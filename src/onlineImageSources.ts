import * as https from 'https';
import { window, workspace } from 'vscode';
import { PickList } from './PickList';

interface RandomImageResult {
    url: string;
    thumb?: string;
}

function httpGetJson<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
        https.get(url, { timeout: 15000 }, res => {
            if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                httpGetJson<T>(res.headers.location).then(resolve, reject);
                return;
            }
            let data = '';
            res.on('data', chunk => { data += chunk; });
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data) as T);
                } catch (e) {
                    reject(new Error(`Invalid JSON response: ${data.slice(0, 200)}`));
                }
            });
        }).on('error', reject);
    });
}

async function fetchUnsplashRandom(accessKey: string, query?: string): Promise<RandomImageResult> {
    let url = `https://api.unsplash.com/photos/random?client_id=${encodeURIComponent(accessKey)}`;
    if (query) {
        url += `&query=${encodeURIComponent(query)}`;
    }
    const data: any = await httpGetJson(url);
    return {
        url: data?.urls?.regular || data?.urls?.full,
        thumb: data?.urls?.small,
    };
}

async function fetchPexelsRandom(apiKey: string, query?: string): Promise<RandomImageResult> {
    const q = query || 'nature';
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&per_page=1&page=${Math.floor(Math.random() * 20) + 1}`;
    const data: any = await new Promise((resolve, reject) => {
        https.get(url, {
            headers: { Authorization: apiKey },
            timeout: 15000,
        }, res => {
            let d = '';
            res.on('data', chunk => { d += chunk; });
            res.on('end', () => {
                try {
                    resolve(JSON.parse(d));
                } catch (e) {
                    reject(new Error(`Invalid JSON: ${d.slice(0, 200)}`));
                }
            });
        }).on('error', reject);
    });
    const photo = data?.photos?.[0];
    if (!photo) { throw new Error('No photo found from Pexels.'); }
    return {
        url: photo.src?.large2x || photo.src?.large || photo.src?.original,
        thumb: photo.src?.small,
    };
}

async function fetchPicsumRandom(width = 1920, height = 1080): Promise<RandomImageResult> {
    const seed = Math.random().toString(36).slice(2);
    const url = `https://picsum.photos/seed/${seed}/${width}/${height}`;
    return new Promise((resolve, reject) => {
        https.get(url, { timeout: 15000 }, res => {
            if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                resolve({ url: res.headers.location });
            } else if (res.statusCode === 200) {
                resolve({ url });
            } else {
                reject(new Error(`Picsum returned ${res.statusCode}`));
            }
            res.resume();
        }).on('error', reject);
    });
}

export async function applyRandomOnlineImage(): Promise<void> {
    const config = workspace.getConfiguration('backgroundCover');
    const unsplashKey = config.get<string>('unsplashAccessKey', '');
    const pexelsKey = config.get<string>('pexelsApiKey', '');
    const query = config.get<string>('onlineImageQuery', '');
    const width = config.get<number>('onlineImageWidth', 1920);
    const height = config.get<number>('onlineImageHeight', 1080);

    let result: RandomImageResult | undefined;
    let source = 'Picsum';
    try {
        if (unsplashKey) {
            result = await fetchUnsplashRandom(unsplashKey, query);
            source = 'Unsplash';
        } else if (pexelsKey) {
            result = await fetchPexelsRandom(pexelsKey, query);
            source = 'Pexels';
        } else {
            result = await fetchPicsumRandom(width, height);
        }
    } catch (error: any) {
        window.showErrorMessage(`オンライン画像の取得に失敗しました: ${error.message}`);
        return;
    }

    if (!result?.url) {
        window.showErrorMessage('取得したオンライン画像に URL がありません。');
        return;
    }

    await PickList.updateImgPath(result.url);
    window.showInformationMessage(`${source} から画像を取得し、背景に適用しました。`);
}
