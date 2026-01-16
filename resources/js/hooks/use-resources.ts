import { Resource } from '@/types/openslp/resource';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type Filter = {
    searchKeywords: boolean;
    includeSpanish: boolean;
    includeKorean: boolean;
    targetAudience: 'pediatric' | 'medical' | 'all' | '';
    includeDownloadables: boolean;
    includeFree: boolean;
    includeFreemium: boolean;
    includePaid: boolean;
    includePaid_with_drops: boolean;
    includePaid_trial: boolean;
    includeMixed: boolean;
    filterValue: string | number | boolean;
};

// Define the state type
type State = {
    resources: Resource[];
};

// Define the actions type
type Actions = {};

// Combine state and actions
type Store = State & Actions;

// Create the Zustand store
export const useHeartbeatStore = create<Store>()(
    immer((set, get) => ({
        isAlive: true, // Default state
        pollingIntervalId: null, // Interval ID initialized to null

        // Check the heartbeat by making an API request
    })),
);
