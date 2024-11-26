const Drawer = {
  styleOverrides: {
    root: ({ theme }) => ({
      '&:hover, &:focus': {
        '*::-webkit-scrollbar, *::-webkit-scrollbar-thumb': {
          visibility: 'visible',
        },
      },
      '*::-webkit-scrollbar-track': {
        marginTop: theme.spacing(15),
      },
    }),
    paper: ({ theme }) => ({
      padding: 0,
      width: '290px',
      height: '100vh',
      border: 0,
      borderRadius: 0,
      backgroundColor: theme.palette.info.lighter,
      boxShadow: 'none',
      boxSizing: 'border-box',
    }),
  },
};

export default Drawer;
