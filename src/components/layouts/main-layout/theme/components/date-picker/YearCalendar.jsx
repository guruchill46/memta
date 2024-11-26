const YearCalendar = {
  styleOverrides: {
    root: ({ theme }) => ({
      '& .MuiPickersYear-root': {
        '& .MuiPickersYear-yearButton': {
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
          },
        },
      },
    }),
  },
};

export default YearCalendar;
