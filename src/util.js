import moment from 'moment';

export const getListStyle = (grid, background) => ({
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