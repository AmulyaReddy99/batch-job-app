import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { getItemStyle, getListStyle, getItems } from "./util";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
const grid = 8;

function OnboardingApp() {
  const [state, setState] = useState([
    getItems(10, 'Todo'), 
    getItems(5, 'Inporgress', 10), 
    getItems(1, 'Completed', 15, '#e6fff3'), 
    getItems(1, 'Failed', 16, '#ffe6e6')
  ]);
  const [offset, setOffset] = useState(16);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter(group => group.length));
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setState([...state, []]);
        }}
      >
        Add new group
      </button>
      <button
        type="button"
        onClick={() => {
          const copyState = [...state];
          copyState[0] = [...copyState[0], getItems(1, offset)]
          setState([...copyState]);
          setOffset(offset + 1);
        }}
      >
        Add new item
      </button>
      <div style={{ display: "flex" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(grid, el[0]?.background, snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  <p>{el[0]?.status}</p>
                  {el.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            grid,
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <div>
                            <div 
                              style={{
                                display: "flex",
                                justifyContent: "space-between"
                              }}
                            >
                            {item.content}
                            <i onClick={() => {
                                  // const newState = [...state];
                                  // newState[ind].splice(index, 1);
                                  // setState(
                                  //   newState.filter(group => group.length)
                                  // );
                                }}
                                class="fa fa-refresh"
                                aria-hidden="true"></i>
                            </div>
                            <div 
                              style={{
                                display: "flex",
                                justifyContent: "space-between"
                              }}
                            >
                              <span>{item.startDate}</span>
                              <span>{item.endDate}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
}

export default OnboardingApp;