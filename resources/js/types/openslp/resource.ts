import { IdAndTimestamps } from '@/types/openslp/shared';

export type Resource = IdAndTimestamps & {
    name: string;
    href: string;

    author: string;
    author_page_href: string;

    og_image: string | null;
    og_title: string | null;
    og_description: string | null;

    has_downloadables: boolean;

    pricing_model: 'free' | 'freemium' | 'paid';
    target_audience: 'pediatric' | 'adult' | 'all';

    uses_ai: boolean;

    updates_regularly: boolean;
    notes: string;
    keywords: string;
    clicked_count: number;
    supports_english: boolean;
    supports_spanish: boolean;
    supports_korean: boolean;
    category: 'games' | string;
};
