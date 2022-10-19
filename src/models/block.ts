import React from "react";

export class Block {
  id: string;
  component: null | React.ReactNode;

  constructor(id: string, component: React.ReactNode) {
    this.id = id;
    this.component = component;
  }
}
