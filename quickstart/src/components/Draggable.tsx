import { useDraggable } from "@dnd-kit/core";
import React from "react";

function Draggable(props: { children: React.ReactNode; id?: string }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id || "draggable",
  });
  const style = transform
    ? { transform: `translate3d(${transform.x}px,${transform.y}px,0)` }
    : undefined;
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      {props.children}
    </div>
  );
}

export default Draggable;
