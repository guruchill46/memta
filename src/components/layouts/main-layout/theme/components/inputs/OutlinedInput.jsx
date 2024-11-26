const OutlinedInput = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 3.25,
    }),
    input: {
      padding: 0,
    },
    sizeSmall: ({ theme }) => ({
      paddingLeft: theme.spacing(1.25),
    }),
  },
};

export default OutlinedInput;
