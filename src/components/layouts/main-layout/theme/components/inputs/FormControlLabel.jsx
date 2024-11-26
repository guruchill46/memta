const FormControlLabel = {
  styleOverrides: {
    root: {
      marginLeft: 0,
    },
    label: ({ theme }) => ({
      marginLeft: 0,
      letterSpacing: 0.25,
      fontSize: theme.typography.body2.fontSize,
      userSelect: 'none',
      fontWeight: 500,
    }),
  },
};

export default FormControlLabel;
