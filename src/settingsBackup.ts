import * as fs from 'fs';
import * as path from 'path';
import {
    ExtensionContext,
    Uri,
    window,
    workspace,
} from 'vscode';

const EXPORT_CONFIG_KEYS = [
    'opacity',
    'blur',
    'imagePath',
    'perWindowBackground',
    'randomImageFolder',
    'autoStatus',
    'autoInterval',
    'sizeModel',
    'blendModel',
    'defaultOnlinePage',
    'unsplashAccessKey',
    'pexelsApiKey',
    'onlineImageQuery',
    'onlineImageWidth',
    'onlineImageHeight',
    'lightImagePath',
    'darkImagePath',
    'highContrastImagePath',
];

interface BackupData {
    version: number;
    config: Record<string, any>;
    globalState: Record<string, any>;
}

export async function exportSettings(context: ExtensionContext): Promise<void> {
    const config = workspace.getConfiguration('backgroundCover');
    const configValues: Record<string, any> = {};
    for (const key of EXPORT_CONFIG_KEYS) {
        configValues[key] = config.get(key);
    }

    const globalState: Record<string, any> = {};
    for (const key of context.globalState.keys()) {
        if (key.startsWith('backgroundCover') || key === 'ext_version' || key === 'vscode_version') {
            globalState[key] = context.globalState.get(key);
        }
    }

    const data: BackupData = {
        version: 1,
        config: configValues,
        globalState,
    };

    const defaultUri = Uri.file(path.join(require('os').homedir(), 'cheeck-backbround-cover-settings.json'));
    const uri = await window.showSaveDialog({
        defaultUri,
        filters: { 'JSON': ['json'] },
        title: '背景カバー設定をエクスポート',
    });
    if (!uri) { return; }

    try {
        await fs.promises.writeFile(uri.fsPath, JSON.stringify(data, null, 2), 'utf-8');
        window.showInformationMessage(`設定をエクスポートしました: ${uri.fsPath}`);
    } catch (error: any) {
        window.showErrorMessage(`設定のエクスポートに失敗しました: ${error.message}`);
    }
}

export async function importSettings(context: ExtensionContext): Promise<void> {
    const uris = await window.showOpenDialog({
        canSelectFiles: true,
        canSelectFolders: false,
        canSelectMany: false,
        filters: { 'JSON': ['json'] },
        openLabel: 'インポート',
        title: '背景カバー設定をインポート',
    });
    if (!uris || uris.length === 0) { return; }

    let data: BackupData;
    try {
        const text = await fs.promises.readFile(uris[0].fsPath, 'utf-8');
        data = JSON.parse(text);
    } catch (error: any) {
        window.showErrorMessage(`設定ファイルの読み込みに失敗しました: ${error.message}`);
        return;
    }

    if (!data || typeof data !== 'object') {
        window.showErrorMessage('無効な設定ファイルです。');
        return;
    }

    const config = workspace.getConfiguration('backgroundCover');
    if (data.config) {
        for (const [key, value] of Object.entries(data.config)) {
            if (EXPORT_CONFIG_KEYS.includes(key)) {
                await config.update(key, value, true);
            }
        }
    }

    if (data.globalState) {
        for (const [key, value] of Object.entries(data.globalState)) {
            await context.globalState.update(key, value);
        }
    }

    window.showInformationMessage('設定をインポートしました。反映にはウィンドウの再読み込みが必要な場合があります。');
}
