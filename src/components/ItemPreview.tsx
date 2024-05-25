import styled from '@emotion/styled';

import {Effect, Item} from '../types';

const Wrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-areas:
        "icon stats"
        "name stats";
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1fr 1fr;
`;
const Name = styled.div`
    grid-area: name;
    width: 120px;
    height: 120px;
    color: rgba(105, 105, 175, 1);
    text-align: center;
`;
const Icon = styled.img`
    grid-area: icon;
    width: 100px;
    height: 100px;
    border: 3px solid var(--main-highlight-color);
    border-radius: 50%;
    margin: 10px;
`;
const Stats = styled.div`
    grid-area: stats;
    width: 100px;
    height: 100px;
    color: rgba(105, 175, 105, 1);
`;

const Stat = ({name, value}: { name: string, value?: number }) => {
    if (value === undefined) {
        return null;
    }

    return (
        <div>{name}: {value}</div>
    );
};

const EffectElement = ({effect}: {effect: Effect}) => (
    <div>
        <div>{effect.name}</div>
        <div>{effect.active ? 'Active': 'Passive'}</div>
        <div>Cooldown: {effect.cooldown}</div>
    </div>
);

export const ItemPreview = ({item}: { item: Item }) => {
    return (
        <Wrapper>
            <Name>{item.display_name}</Name>
            <Icon src={`https://omeda.city${item.image}`}/>
            <Stats>
                <Stat name="Physical Power" value={item.stats?.physical_power}/>
                <Stat name="Magical Power" value={item.stats?.magical_power}/>
                <Stat name="Physical Armor" value={item.stats?.physical_armor}/>
                <Stat name="Magical Armor" value={item.stats?.magical_armor}/>
                <Stat name="Ability Haste" value={item.stats?.ability_haste}/>
                <Stat name="Attack Speed" value={item.stats?.attack_speed}/>
                <Stat name="Critical Chance" value={item.stats?.critical_chance}/>
                <Stat name="Health Regeneration" value={item.stats?.health_regeneration}/>
                <Stat name="Mana Regeneration" value={item.stats?.mana_regeneration}/>
                <Stat name="Magical Penetration" value={item.stats?.magical_penetration}/>
                <Stat name="Physical Penetration" value={item.stats?.physical_penetration}/>
                <Stat name="Omnivamp" value={item.stats?.omnivamp}/>
                <Stat name="Lifesteal" value={item.stats?.lifesteal}/>
                <Stat name="Magical Lifesteal" value={item.stats?.magical_lifesteal}/>
                <Stat name="Heal Shield Increase" value={item.stats?.heal_shield_increase}/>
                <Stat name="Gold Per Second" value={item.stats?.gold_per_second}/>
                <Stat name="Max Health" value={item.stats?.max_health}/>
                <Stat name="Max Mana" value={item.stats?.max_mana}/>
                <Stat name="Tenacity" value={item.stats?.tenacity}/>
                <Stat name="Movement Speed" value={item.stats?.movement_speed}/>
                {item.effects.map(effect => (
                    <EffectElement key={effect.name} effect={effect}/>
                ))}
            </Stats>
        </Wrapper>
    );
};
