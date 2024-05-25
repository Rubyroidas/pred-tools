export type Item = {
    id: number;
    game_id: number;
    name: string;
    display_name: string;
    image: string;
    price?: number;
    total_price: number;
    slot_type?: string;
    rarity?: string;
    aggression_type?: string;
    hero_class?: string;
    required_level?: number;
    stats?: Stats;
    effects: Effect[];
    requirements: string[];
    build_paths: string[];
}

export type Stats = {
    physical_power?: number;
    critical_chance?: number;
    magical_power?: number;
    ability_haste?: number;
    omnivamp?: number;
    max_health?: number;
    attack_speed?: number;
    physical_penetration?: number;
    max_mana?: number;
    tenacity?: number;
    physical_armor?: number;
    magical_armor?: number;
    health_regeneration?: number;
    magical_penetration?: number;
    movement_speed?: number;
    lifesteal?: number;
    mana_regeneration?: number;
    magical_lifesteal?: number;
    heal_shield_increase?: number;
    gold_per_second?: number;
}

export type Effect = {
    name: string;
    active: boolean;
    condition?: string;
    cooldown?: string;
    menu_description: string;
}
