import * as React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ComponentCard from "@/components/ComponentCard";
import Droppable from "@/components/Droppable";

import "./style.scss";

type BuilderProps = {};

const Builder = ({}: BuilderProps) => {
  const [isDragging, setIsDragging] = React.useState(false);
  console.log("builder isdragging: ", isDragging);
  return (
    <Container fluid>
      <Row>
        <DndProvider backend={HTML5Backend}>
          <Col className="d-flex">
            <div className="sidebar py-4">
              <ComponentCard setIsDragging={setIsDragging} type="nav">
                Nav
              </ComponentCard>
              <ComponentCard setIsDragging={setIsDragging} type="col">
                Columns
              </ComponentCard>
            </div>
            <div className="main-col flex-grow">
              <Droppable isDragging={isDragging}></Droppable>
            </div>
          </Col>
        </DndProvider>
      </Row>
    </Container>
  );
};

export default Builder;
