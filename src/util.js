import moment from 'moment';

export const getItemStyle = (grid, isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: "white",
    border: '1px solid lightgrey',
    ...draggableStyle
});

export const getListStyle = (grid, background, isDraggingOver) => ({
    background,
    border: '1px solid lightgrey',
    margin: '10px',
    padding: grid,
    width: 250
});

export const getItems = (count, status, offset = 0, background = 'white') =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
      id: `item-${k + offset}-${new Date().getTime()}`,
      content: `Batch Job ${k + offset}`,
      background,
      startDate: moment(new Date()).format('DD-MM-YY'),
      endDate: moment(new Date()).format('DD-MM-YY'),
      status
}));