import {alpha, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    title1: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
        textShadow:'0 0 7px #fff,0 0 0px #fff,0 0 0px #fff, 0 0 0px #0fa, 0 0 0px #0fa, 0 0 10px #0fa, 0 0 50px #0fa, 0 0 70px #0fa'
      },
    title2: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
      },
      searchIcon: {
        padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
      },
      toolbar: {
        display: 'flex', justifyContent: 'space-between',
      },
      appbar:{
        background: 'linear-gradient(to left, #2C5364, #203A43, #0F2027)',

      }
}))