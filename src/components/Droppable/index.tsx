import * as React from "react";
import { useDrop } from "react-dnd";
import "./style.scss";

type DroppableProps = {
  idCounter: React.RefObject<number>;
  id: number;
  component?: React.ReactNode;
  children?: React.ReactNode;
};

const Droppable = ({ children = null, id, idCounter }: DroppableProps) => {
  const handleDrop = (item: any, monitor: any) => {
    console.log("handleDrop: ", id);
    console.log("handleDrop: monitor", monitor.getDropResult());
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
      className={`droppable d-flex flex-grow ${canDrop && "is-dragging"}`}
      // contentEditable="true"
      ref={dropRef}
    >
      {children}
    </div>
  );
};

export default Droppable;
