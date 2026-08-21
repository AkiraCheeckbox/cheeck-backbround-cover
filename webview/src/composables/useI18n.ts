import { ref, computed } from 'vue';
import en from '../locales/en';
import zh from '../locales/zh';
import ja from '../locales/ja';

export type Locale = 'en' | 'zh' | 'ja';
export type MessageKey = keyof typeof en;

const tables: Record<Locale, typeof en> = { en, zh: zh as typeof en, ja };
const locale = ref<Locale>('ja');

export function setLocale(l: Locale) { locale.value = l; }
export function getLocale(): Locale { return locale.value; }

export function useI18n() {
    return {
        locale,
        t(key: MessageKey): string {
            const table = tables[locale.value] ?? ja;
            return (table as any)[key] ?? (ja as any)[key] ?? String(key);
        }
    };
}

export const i18nLocale = computed(() => locale.value);
