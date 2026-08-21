/*
 * @Description: vscode:uninstall hook — runs from the VS Code:/Devin install root
 *               just before the extension files are removed from disk. Strips
 *               the background-cover marker block from every bundle we ever
 *               patch. Derives the install root from process.cwd() and
 *               process.execPath, so it also works for Devin Desktop.
 */

import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';

const extName = "backgroundCover";

function resolveAppRootFromExecPath(): string | undefined {
    const execPath = process.execPath;
    if (!execPath) {
        return undefined;
    }

    // macOS .app bundle, including nested helper bundles:
    // /Applications/Devin.app/Contents/Frameworks/Devin Helper (Plugin).app/Contents/MacOS/...
    if (process.platform === 'darwin') {
        const parts = execPath.split(path.sep);
        for (let i = 0; i < parts.length - 1; i++) {
            if (parts[i].endsWith('.app') && parts[i + 1] === 'Contents') {
                return parts.slice(0, i + 2).join(path.sep);
            }
        }
    }

    // Windows / Linux: the executable sits in the app root
    const dir = path.dirname(execPath);
    if (fs.existsSync(path.join(dir, 'resources', 'app', 'out', 'vs', 'workbench', 'workbench.desktop.main.js'))) {
        return dir;
    }

    return undefined;
}

function resolveAppRootFromCwd(): string | undefined {
    const cwd = process.cwd();
    if (fs.existsSync(path.join(cwd, 'resources', 'app', 'out', 'vs', 'workbench', 'workbench.desktop.main.js'))) {
        return cwd;
    }
    return undefined;
}

function collectAppRootCandidates(): string[] {
    const candidates = new Set<string>();

    const fromCwd = resolveAppRootFromCwd();
    if (fromCwd) {
        candidates.add(fromCwd);
    }

    const fromExec = resolveAppRootFromExecPath();
    if (fromExec) {
        candidates.add(fromExec);
    }

    // Common macOS install locations as a best-effort fallback
    if (process.platform === 'darwin') {
        const home = os.homedir();
        const macApps = [
            '/Applications/Devin.app/Contents',
            '/Applications/Visual Studio Code.app/Contents',
            '/Applications/Cursor.app/Contents',
            path.join(home, 'Applications', 'Devin.app/Contents'),
            path.join(home, 'Applications', 'Visual Studio Code.app/Contents'),
            path.join(home, 'Applications', 'Cursor.app/Contents'),
        ];
        for (const app of macApps) {
            if (fs.existsSync(path.join(app, 'resources', 'app', 'out', 'vs', 'workbench', 'workbench.desktop.main.js'))) {
                candidates.add(app);
            }
        }
    }

    return Array.from(candidates);
}

// Every JS bundle the extension may have patched. The main workbench bundle
// is required; auxiliary bundles (AgentView etc.) are best-effort — older
// builds may not ship them.
function getTargetJsPaths(base: string): string[] {
    return [
        path.join(base, 'resources', 'app', 'out', 'vs', 'workbench', 'workbench.desktop.main.js'),
        path.join(base, 'resources', 'app', 'out', 'vs', 'sessions', 'sessions.desktop.main.js'),
        // Cursor Agent Window (Glass) renderer bundle
        path.join(base, 'resources', 'app', 'out', 'vs', 'workbench', 'workbench.glass.main.js'),
        // code-server (web mode) install layout
        path.join(base, 'resources', 'app', 'out', 'vs', 'code', 'browser', 'workbench', 'workbench.js')
    ];
}

function getWorkbenchDirs(base: string): string[] {
    return [
        path.join(base, 'resources', 'app', 'out', 'vs', 'workbench'),
        path.join(base, 'resources', 'app', 'out', 'vs', 'code', 'browser', 'workbench')
    ];
}

main();

function main(): boolean {
    const bases = collectAppRootCandidates();
    if (bases.length === 0) {
        // Last resort: try process.cwd() even if the marker file is missing,
        // because older VS Code: builds may keep the workbench file elsewhere.
        bases.push(process.cwd());
    }

    let allOk = true;
    for (const base of bases) {
        for (const filePath of getTargetJsPaths(base)) {
            if (!fs.existsSync(filePath)) {
                continue;
            }
            try {
                const original = fs.readFileSync(filePath, 'utf-8');
                const cleaned = clearCssContent(original);
                if (cleaned !== original) {
                    fs.writeFileSync(filePath, cleaned, 'utf-8');
                }
            } catch (ex) {
                allOk = false;
            }
        }
        for (const dir of getWorkbenchDirs(base)) {
            removeBackgroundCoverCssFiles(dir);
        }
    }
    return allOk;
}

function removeBackgroundCoverCssFiles(dir: string): void {
    if (!fs.existsSync(dir)) {
        return;
    }
    let names: string[] = [];
    try {
        names = fs.readdirSync(dir);
    } catch {
        return;
    }
    for (const name of names) {
        if (name.startsWith('css-background-cover') && name.endsWith('.css')) {
            try {
                fs.unlinkSync(path.join(dir, name));
            } catch {
                // Best-effort: uninstall runs without vscode APIs or sudo prompts.
            }
        }
    }
}

function clearCssContent(content: string): string {
    const re = new RegExp("\\/\\*ext-" + extName + "-start\\*\\/[\\s\\S]*?\\/\\*ext-" + extName + "-end\\*" + "\\/", "g");
    content = content.replace(re, '');
    content = content.replace(/\s*$/, '');
    return content;
}
