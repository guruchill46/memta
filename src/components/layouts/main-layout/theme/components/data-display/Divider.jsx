const Divider = {
  styleOverrides: {
    root: ({ theme }) => ({
      height: 2,
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderColor: theme.palette.info.main,

      '&.MuiDivider-withChildren': {
        height: '0 !important',
        color: theme.palette.text.disabled,
        backgroundColor: 'transparent',
        fontWeight: 500,

        '&::before': {
          backgroundColor: theme.palette.info.main,
        },
        '&::after': {
          backgroundColor: theme.palette.info.main,
        },
      },
    }),
  },
};

export default Divider;