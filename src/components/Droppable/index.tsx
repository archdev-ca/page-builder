import * as React from "react";
import { useDrop } from "react-dnd";
import "./style.scss";

type DroppableProps = {};

const Droppable = ({}: DroppableProps) => {
  const handleDrop = (item: any, monitor: any) => {
    console.log("handleDrop: ", item, monitor);
    return {};
  };

  const [{ isOver, canDrop }, dropRef] = useDrop(() => ({
    accept: "card",
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  return (
    <div
      className={`droppable d-flex ${canDrop && "is-dragging"}`}
      contentEditable="true"
      ref={dropRef}
    ></div>
  );
};

export default Droppable;
