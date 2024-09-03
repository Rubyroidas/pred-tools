import styled from '@emotion/styled';

import config from './comms.json';
import {type NodeConfig} from './comms.d.json';

console.log(config);

const NodeName = styled.div`
    display: inline-block;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0;
`;

const NodeList = styled.div`
    margin-left: 1rem;
`;
const CommandPathContainer = styled.div`
    font-family: monospace;
    color: #515151;
    background-color: #bdbdbd;
    display: inline-block;
    padding: 4px 8px;
    margin-left: 8px;
`;

const CommandPath = ({keysPath}: {keysPath: string[]}) => (
    <CommandPathContainer>
        {keysPath.join(' > ')}
    </CommandPathContainer>
);

const Node = ({node, keysPath = []}: {node: NodeConfig, keysPath?: string[]}) => (
    <div>
        <NodeName>{node.name}</NodeName>
        {node.nodes ? (
            <NodeList>
                {Object.entries(node.nodes).map(([key, value]) => (
                    <Node key={key} node={value} keysPath={[...keysPath, key]}/>
                ))}
            </NodeList>
        ) : (
            <CommandPath keysPath={keysPath}/>
        )}
    </div>
);

export const CommsPage = () => (
    <div>
        <h1>Comms</h1>
        <Node node={config}/>
    </div>
);
