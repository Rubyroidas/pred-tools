import {Item} from '../types';

const API_BASE = 'https://omeda.city';

export class OmedaAPI {
    static async loadItems() {
        const res = await fetch(`${API_BASE}/items.json`);
        const items = await res.json() as (Item[] | undefined);
        return items;
    }
}
