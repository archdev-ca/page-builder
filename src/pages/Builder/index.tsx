import * as React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { NodeState } from "@/types/node";
import ComponentCard from "@/components/ComponentCard";
import Droppable from "@/components/Droppable";

import "./style.scss";

type BuilderProps = {};

const Builder = ({}: BuilderProps) => {
  let idCounter = React.useRef(0);
  const [nodes, setNodes] = React.useState<NodeState>({
    byId: {
      0: { id: 0 },
      1: { id: 1 },
      2: { id: 2 },
    },
    tree: [{ id: 0, children: [{ id: 1 }, { id: 2 }] }],
    allIds: [0],
  });

  const recurseNodes = (treeNode: any) => {
    console.log(treeNode);
    idCounter.current += 1;
    let node = nodes.byId[treeNode.id];
    return (
      <Droppable
        id={idCounter.current}
        idCounter={idCounter}
        key={idCounter.current}
      >
        {treeNode.children &&
          treeNode.children.map((childNode: any) => {
            return recurseNodes(childNode);
          })}
      </Droppable>
    );
  };

  const createComponentTree = () => {
    let component = (
      <>
        {nodes.tree.map((obj: any) => {
          return recurseNodes(obj);
        })}
      </>
    );
    return component;
  };

  return (
    <Container fluid>
      <Row>
        <DndProvider backend={HTML5Backend}>
          <Col className="d-flex">
            <div className="sidebar py-4">
              <ComponentCard key={1} type="nav">
                Nav
              </ComponentCard>
              <ComponentCard key={2} type="col">
                Columns
              </ComponentCard>
            </div>
            <div className="main-col flex-grow">
              <Droppable id={0} idCounter={idCounter}>
                {createComponentTree()}
              </Droppable>
              {/* {nodes.tree.map((obj) => {})} */}
            </div>
          </Col>
        </DndProvider>
      </Row>
    </Container>
  );
};

export default Builder;
