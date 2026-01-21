import { IdAndTimestamps } from '@/types/openslp/shared';

export type PricingModel =
    | 'free'
    | 'freemium'
    | 'paid'
    | 'paid_with_drops'
    | 'paid_trial'
    | 'mixed';

export type ResourceCategory = IdAndTimestamps & {
    name: string;
    icon: string | null;
    position: number;
    parent_id: number | null;
    bg_color: string | null;
    description: string | null;
};

export type Resource = IdAndTimestamps & {
    name: string;
    href: string;

    author: string;
    author_page_href: string;

    og_image: string | null;
    og_title: string | null;
    og_description: string | null;

    has_downloadables: boolean;

    pricing_model: PricingModel;
    target_audience: 'pediatric' | 'medical' | 'all';

    uses_ai: boolean;

    updates_regularly: boolean;
    notes: string;
    keywords: string;
    clicked_count: number;
    supports_english: boolean;
    supports_spanish: boolean;
    supports_korean: boolean;
    category: ResourceCategory;
};
