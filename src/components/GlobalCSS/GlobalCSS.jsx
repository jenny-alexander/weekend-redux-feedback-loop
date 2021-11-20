import { makeStyles } from '@mui/styles';

const GlobalCSS = makeStyles((theme) => ({
  question:{
    p: 2,
    textAlign: 'center',
    fontSize: '30px'
  },
  box:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card:{
    height: 275,
    width: 700,
    boxShadow: 10
  },
  reviewCard:{
    height: 475,
    width: 700,
    boxShadow: 10
  },
  link:{
    color:'inherit',
    textDecoration: 'inherit',
  },
  listItemText: {
    fontSize: 20
  }
}));

export default GlobalCSS;