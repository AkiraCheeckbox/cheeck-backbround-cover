import { window } from 'vscode';
import { getContext } from './global';
import { resolveCurrentImagePath } from './windowBackground';

const IMAGE_TAGS_KEY = 'backgroundCover.imageTags';

export interface ImageTagsMap {
    [path: string]: string[];
}

function readTags(): ImageTagsMap {
    const ctx = getContext();
    return ctx.globalState.get<ImageTagsMap>(IMAGE_TAGS_KEY, {});
}

async function writeTags(tags: ImageTagsMap): Promise<void> {
    const ctx = getContext();
    await ctx.globalState.update(IMAGE_TAGS_KEY, tags);
}

export async function tagCurrentImage(): Promise<void> {
    const imagePath = resolveCurrentImagePath('');
    if (!imagePath) {
        window.showWarningMessage('タグを付ける背景が設定されていません。');
        return;
    }

    const input = await window.showInputBox({
        placeHolder: '例: お気に入り, 夜用, 落ち着く',
        prompt: `「${imagePath}」に付けるタグをカンマ区切りで入力`,
        validateInput: v => v && v.trim() ? undefined : 'タグを入力してください',
    });
    if (!input) { return; }

    const newTags = input.split(/[,，]/).map(t => t.trim()).filter(Boolean);
    const tags = readTags();
    tags[imagePath] = newTags;
    await writeTags(tags);
    window.showInformationMessage(`「${imagePath}」にタグを保存しました: ${newTags.join(', ')}`);
}

export async function searchImagesByTag(): Promise<void> {
    const tags = readTags();
    const allTags = new Set<string>();
    for (const list of Object.values(tags)) {
        for (const t of list) { allTags.add(t); }
    }

    if (allTags.size === 0) {
        window.showInformationMessage('まだタグが登録されていません。先に「背景にタグを付ける」を使ってください。');
        return;
    }

    const pick = await window.showQuickPick(
        [...allTags].sort().map(t => ({ label: t })),
        { placeHolder: '検索するタグを選択' }
    );
    if (!pick) { return; }

    const matched = Object.entries(tags)
        .filter(([, list]) => list.includes(pick.label))
        .map(([path]) => ({ label: path, path }));

    if (matched.length === 0) {
        window.showInformationMessage('該当する画像が見つかりませんでした。');
        return;
    }

    const image = await window.showQuickPick(matched, { placeHolder: '背景に設定する画像を選択' });
    if (!image) { return; }

    const { PickList } = await import('./PickList');
    await PickList.updateImgPath(image.path);
}
