import * as React from "react";
import { useDrag } from "react-dnd";
import "./style.scss";

type ComponentCardProps = {
  children: React.ReactNode;
  type: string;
};

const ComponentCard = ({ type, children }: ComponentCardProps) => {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: "card",
      item: { type },
      collect: (monitor) => {
        return {
          isDragging: !!monitor.isDragging(),
        };
      },
    }),
    []
  );
  return (
    <div
      ref={dragRef}
      className={`component-card ${isDragging && "is-dragging"}`}
    >
      {children}
    </div>
  );
};

export default ComponentCard;
