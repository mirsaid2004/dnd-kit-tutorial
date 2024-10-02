import { DndContext, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import Droppable from "../components/Droppable";
import { useState } from "react";
import Draggable from "../components/Draggable";

function DraggableChildren() {
  console.log("Draggable Children");
  return <span>Drag me</span>;
}

function ComplexExample() {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);
  const draggableMarkup = (
    <Draggable id="draggable_complex">
      <DraggableChildren />
    </Draggable>
  );
  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}
      {containers.map((id) => (
        // We updated the Droppable component so it would accept an `id`
        // prop and pass it to `useDroppable`
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : "Drop here"}
        </Droppable>
      ))}
    </DndContext>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
}

export default ComplexExample;
