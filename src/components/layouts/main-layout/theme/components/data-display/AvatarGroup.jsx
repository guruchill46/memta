const AvatarGroup = {
  styleOverrides: {
    root: {},
    avatar: ({ theme }) => ({
      border: 3,
      marginLeft: theme.spacing(-2),
      borderStyle: 'solid',
      borderColor: theme.palette.info.lighter,
      fontSize: theme.typography.body2.fontSize,
      '&:nth-of-type(1)': {
        zIndex: 99,
        backgroundColor: theme.palette.info.dark,
      },
    }),
  },
};

export default AvatarGroup;