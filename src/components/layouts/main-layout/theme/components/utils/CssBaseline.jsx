import scrollbar from '../../styles/scrollbar';
import echart from '../../styles/echart';

const CssBaseline = {
  defaultProps: {},
  styleOverrides: (theme) => ({
    '*, *::before, *::after': {
      margin: 0,
      padding: 0,
    },
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      fontVariantLigatures: 'none',
      backgroundColor: theme.palette.info.main,
      ...scrollbar(theme),
    },
    ...echart(),
  }),
};

export default CssBaseline;
