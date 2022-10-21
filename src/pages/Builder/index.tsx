import * as React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ComponentCard from "@/components/ComponentCard";
import Droppable from "@/components/Droppable";

import "./style.scss";

type BuilderProps = {};

const Builder = ({}: BuilderProps) => {
  let idCounter = React.useRef(1);
  const [nodes, setNodes] = React.useState({
    byId: {
      0: { id: 0 },
    },
    tree: [{ id: 0 }],
    allIds: [0],
  });

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
              <Droppable id={0} idCounter={idCounter}></Droppable>
              {nodes.tree.map((obj) => {})}
            </div>
          </Col>
        </DndProvider>
      </Row>
    </Container>
  );
};

export default Builder;
