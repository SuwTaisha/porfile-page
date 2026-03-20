//This one is use for my github commit response
//jusqt define it to reuse easier in the future

export type CommitNode = {
  occurredAt: string;
  commitCount: number;
};

export type repository = {
  repository: {
    name: string;
  };

  contributions: {
    nodes: CommitNode[];
  };
};
