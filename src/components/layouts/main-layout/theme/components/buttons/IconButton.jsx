const IconButton = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.info.darker,
      marginLeft: 0,
    }),
    sizeLarge: ({ theme }) => ({
      padding: theme.spacing(1),
      fontSize: theme.typography.h3.fontSize,
    }),
    sizeMedium: ({ theme }) => ({
      padding: theme.spacing(0.75),
      fontSize: theme.typography.h4.fontSize,
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(0.5),
      fontSize: theme.typography.h6.fontSize,
    }),
  },
};

export default IconButton;