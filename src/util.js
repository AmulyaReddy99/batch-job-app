

export function generateColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16) + 90;
}

export const getItemStyle = (grid, isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: "white",
    ...draggableStyle
});

export const getListStyle = (grid, isDraggingOver) => ({
    background: generateColor(),
    padding: grid,
    width: 250
});

export const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
      id: `item-${k + offset}-${new Date().getTime()}`,
      content: `item ${k + offset}`
}));