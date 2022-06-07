import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    height: '350px'
  },
  comments: {
    maxHeight: '100%',
    height: '100%',
    'overflow-y': 'auto',
    display: 'flex',
    flexDirection: 'column'
  }
}))
