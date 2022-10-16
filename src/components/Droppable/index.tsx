import * as React from "react";
import { useDrop } from "react-dnd";
import "./style.scss";

type DroppableProps = {};

const Droppable = ({}: DroppableProps) => {
  const handleDrop = (item: any, monitor: any) => {
    console.log("handleDrop: ", item, monitor);
    return {};
  };
  const [collected, dropRef] = useDrop(() => ({
    accept: "card",
    drop: handleDrop,
    collect: (monitor) => {
      return {
        isOver: !!monitor.isOver(),
      };
    },
  }));
  console.log(collected);
  return <div className="droppable d-flex" ref={dropRef}></div>;
};

export default Droppable;
