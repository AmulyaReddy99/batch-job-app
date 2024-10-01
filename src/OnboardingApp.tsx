import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { getListStyle, getItems } from "./util";

const grid = 8;

function OnboardingApp() {
  const [state, setState] = useState([
    getItems(10, 'Todo'), 
    getItems(5, 'Inporgress', 10), 
    getItems(1, 'Completed', 15, '#e6fff3'), 
    getItems(1, 'Failed', 16, '#ffe6e6')
  ]);
  const [offset, setOffset] = useState(16);

  return (
    <div>
      <div style={{ display: "flex" }}>
          {state.map((el, ind) => <>
                <div
                  style={getListStyle(grid, el[0]?.background)}
                >
                  <p>{el[0]?.status}</p>
                  {el.map((item, index) => (
                    <>
                        <div
                          style={{
                            userSelect: "none",
                            padding: 10 * 2,
                            margin: `0 0 10px 0`,
                            background: "white",
                            border: '1px solid lightgrey',
                        }}
                        >
                          <div>
                            <div 
                              style={{
                                display: "flex",
                                justifyContent: "space-between"
                              }}
                            >
                            {item.content}
                            <i onClick={() => {}}
                                className="fa fa-refresh"
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
                    </>
                  ))}
                </div>
              </>
            )}
        </div>
      </div>
  );
}

export default OnboardingApp;