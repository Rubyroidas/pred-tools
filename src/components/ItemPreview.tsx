import styled from '@emotion/styled';

import {Item} from '../types';

const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        "icon stats"
        "name stats";
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
`;
const Name = styled.div`
    grid-area: name;
    width: 100px;
    height: 100px;
    color: rgba(105, 105, 175, 1);
`;
const Icon = styled.img`
    grid-area: icon;
    width: 100px;
    height: 100px;
    border: 3px solid var(--main-highlight-color);
    border-radius: 50%;
`;
const Stats = styled.div`
    grid-area: stats;
    width: 100px;
    height: 100px;
    color: rgba(105, 175, 105, 1);
`;

export const ItemPreview = ({item}: { item: Item }) => {
    return (
        <Wrapper>
            <Name>{item.display_name}</Name>
            <Icon src={`https://omeda.city${item.image}`}/>
            <Stats>
                <div>Physical Power: {item.stats?.physical_power}</div>
                <div>Magical Power: {item.stats?.magical_power}</div>
                <div>Physical Armor: {item.stats?.physical_armor}</div>
                <div>Magical Armor: {item.stats?.magical_armor}</div>
            </Stats>
        </Wrapper>
    );
};
