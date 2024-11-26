const MonthCalendar = {
  styleOverrides: {
    root: ({ theme }) => ({
      '& .MuiPickersMonth-root': {
        '& .MuiPickersMonth-monthButton': {
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
          },
        },
      },
    }),
  },
};

export default MonthCalendar;
