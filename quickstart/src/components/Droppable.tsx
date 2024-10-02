import { useDroppable } from "@dnd-kit/core";
import React from "react";

function Droppable(props: { children: React.ReactNode; id?: string }) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id || "droppable",
  });
  const style = {
    color: isOver ? "green" : "lightgray",
    border: "1px solid gray",
    height: "250px",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

export default Droppable;
