import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Droppable from "../components/Droppable";
import { useState } from "react";
import Draggable from "../components/Draggable";

function DraggableChildren() {
  console.log("Draggable Children");
  return <span>Drag me</span>;
}

function SimpleExample() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>
      <DraggableChildren />
    </Draggable>
  );
  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Droppable>{isDropped ? draggableMarkup : "Drag over here"}</Droppable>
    </DndContext>
  );

  function handleDragEnd(e: DragEndEvent) {
    if (e.over && e.over.id === "droppable") {
      setIsDropped(true);
    }
  }
}

export default SimpleExample;
