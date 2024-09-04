
import { makeStyles,} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: "column-reverse",
    },
  },
  paper: {
    [theme.breakpoints.down('sm')]: {
      maxHeight: '600vh',
    },

  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
    textAlign: 'justify',
    fontSize: '2px',
  },
  title: {
    [theme.breakpoints.down('sm')]: {
       fontSize: '30px',
    },
  },
  message: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      maxWidth: '500px',
    },
    [theme.breakpoints.down('xs')]: {
       fontSize: '15px',
       width: '200px',
    },
  },
  section2: {
    [theme.breakpoints.down('sm')]: {
      gridArea: '1',
    },
  },
  gridContainer: {
    display: 'grid',
    gridAutoRows: 'minMax(150px, auto)',
    gridTemplateColumns: '1fr',
     
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      maxWidth: '500px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
      width: '200px',
   },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
    },
  },
  commentsInnerContainer: {
    height: '200px',
    width: '500px',
    overflowY: 'auto',
    marginRight: '30px',
    scrollBehavior: 'smooth',
  },
  commentsInnerContainer2: {
    [theme.breakpoints.down('xs')]: {
      width: '200px',
    },    
  },
}));
