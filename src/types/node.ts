export interface NodeState {
  byId: {
    [key: string]: { id: number };
  };
  tree: Array<TreeNode>;
  allIds: Array<number>;
}

export interface TreeNode {
  id: number;
  children?: Array<TreeNode>;
}
