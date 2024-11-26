const ListItemText = {
  styleOverrides: {
    root: {},
    primary: ({ theme }) => ({
      marginTop: theme.spacing(0.15),
      color: theme.palette.text.disabled,
      fontSize: theme.typography.body1.fontSize,
      fontWeight: 500,
    }),
  },
};

export default ListItemText;
