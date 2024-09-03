export type NodeConfig = {
    name: string;
    nodes: Record<'f1' | 'f2' | 'f3' | 'f4', NodeConfig>;
}

declare const data: NodeConfig;
export default data;
