import { window, workspace } from 'vscode';
import { getContext } from './global';
import { PickList } from './PickList';
import { resolveCurrentBlur, resolveCurrentImagePath, resolveCurrentOpacity } from './windowBackground';

const PRESETS_KEY = 'backgroundCover.presets';

export interface BackgroundPreset {
    id: string;
    name: string;
    imagePath: string;
    opacity: number;
    blur: number;
    sizeModel: string;
    blendModel: string;
}

function readPresets(): BackgroundPreset[] {
    const ctx = getContext();
    return ctx.globalState.get<BackgroundPreset[]>(PRESETS_KEY, []);
}

async function writePresets(presets: BackgroundPreset[]): Promise<void> {
    const ctx = getContext();
    await ctx.globalState.update(PRESETS_KEY, presets);
}

export async function savePreset(): Promise<void> {
    const name = await window.showInputBox({
        placeHolder: 'プリセット名を入力',
        prompt: '現在の背景設定を保存するプリセット名を入力してください',
        validateInput: value => value && value.trim() ? undefined : '名前を入力してください',
    });
    if (!name) { return; }

    const config = workspace.getConfiguration('backgroundCover');
    const imagePath = resolveCurrentImagePath(config.imagePath || '') || config.imagePath || '';
    const presets = readPresets();
    const existing = presets.find(p => p.name === name.trim());
    if (existing) {
        const ok = await window.showWarningMessage(`「${name}」は既に存在します。上書きしますか？`, 'はい', 'いいえ');
        if (ok !== 'はい') { return; }
    }

    const newPreset: BackgroundPreset = {
        id: existing ? existing.id : Date.now().toString(),
        name: name.trim(),
        imagePath,
        opacity: resolveCurrentOpacity(config.opacity ?? 0.2),
        blur: resolveCurrentBlur(config.blur ?? 0),
        sizeModel: config.get<string>('sizeModel', 'cover'),
        blendModel: config.get<string>('blendModel', 'auto'),
    };

    const next = existing
        ? presets.map(p => p.id === newPreset.id ? newPreset : p)
        : [...presets, newPreset];
    await writePresets(next);
    window.showInformationMessage(`プリセット「${newPreset.name}」を保存しました。`);
}

export async function loadPreset(): Promise<void> {
    const presets = readPresets();
    if (presets.length === 0) {
        window.showInformationMessage('プリセットがまだありません。コマンドパレットから「プリセットを保存」してください。');
        return;
    }

    const pick = await window.showQuickPick(
        presets.map(p => ({ label: p.name, description: p.imagePath, preset: p })),
        { placeHolder: '適用するプリセットを選択' }
    );
    if (!pick) { return; }

    const p = pick.preset;
    const config = workspace.getConfiguration('backgroundCover');
    await config.update('opacity', p.opacity, true);
    await config.update('blur', p.blur, true);
    await config.update('sizeModel', p.sizeModel, true);
    await config.update('blendModel', p.blendModel, true);
    await PickList.updateImgPath(p.imagePath);
    window.showInformationMessage(`プリセット「${p.name}」を適用しました。`);
}

export async function deletePreset(): Promise<void> {
    const presets = readPresets();
    if (presets.length === 0) {
        window.showInformationMessage('削除するプリセットがありません。');
        return;
    }

    const pick = await window.showQuickPick(
        presets.map(p => ({ label: p.name, description: p.imagePath, preset: p })),
        { placeHolder: '削除するプリセットを選択' }
    );
    if (!pick) { return; }

    const next = presets.filter(p => p.id !== pick.preset.id);
    await writePresets(next);
    window.showInformationMessage(`プリセット「${pick.preset.name}」を削除しました。`);
}
