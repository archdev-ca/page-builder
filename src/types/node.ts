export interface NodeState {
  byId: {
    [key: string]: { id: number };
  };
  tree: Array<{ id: number }>;
  allIds: Array<number>;
}
