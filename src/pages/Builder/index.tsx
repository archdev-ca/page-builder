import * as React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ComponentCard from "@/components/ComponentCard";
import Droppable from "@/components/Droppable";

import "./style.scss";

type BuilderProps = {};

const Builder = ({}: BuilderProps) => {
  return (
    <Container fluid>
      <Row>
        <DndProvider backend={HTML5Backend}>
          <Col className="d-flex">
            <div className="sidebar">
              <ComponentCard type="nav">Nav</ComponentCard>
              <ComponentCard type="col">Columns</ComponentCard>
            </div>
            <div className="main-col flex-grow">
              <Droppable></Droppable>
            </div>
          </Col>
        </DndProvider>
      </Row>
    </Container>
  );
};

export default Builder;
