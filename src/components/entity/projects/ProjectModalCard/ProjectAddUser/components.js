import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    maxWidth: '400px',
    flexDirection: 'column',
    width: '400px',
    marginLeft: '20px'
  },

  users: {
    height: '280px',
    padding: '5px',
    'overflow-y': 'auto',
    '&::-webkit-scrollbar-thumb': {
      height: '10px',
      width: '10px',
      borderRadius: '10px',
      background: 'gray'
    }
  },

  form: {
    display: 'flex',
    flexDirection: 'column'
  }
}))
