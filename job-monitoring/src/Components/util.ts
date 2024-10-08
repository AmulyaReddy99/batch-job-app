import moment from 'moment';

export const getListStyle = (grid, background) => ({
    background,
    border: '1px solid lightgrey',
    margin: '10px',
    padding: grid,
    width: 250,
    borderRadius: '10px',
    height: '85vh'
});

const jobNames = ['ATS', 'Workflow', 'Sailpoint', 'Quick sight']

export const getItems = (count, status, offset = 0, background = 'white') =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
      id: `item-${k + offset}-${new Date().getTime()}`,
      content: jobNames[k],
      background,
      startDate: moment(new Date()).format('DD-MM-YY hh:mm:ss'),
      endDate: moment(new Date()).format('DD-MM-YY hh:mm:ss'),
      status
}));