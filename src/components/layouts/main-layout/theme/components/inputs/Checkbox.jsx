import IconifyIcon from '../../../../components/base/IconifyIcon';

const Checkbox = {
  defaultProps: {
    icon: <IconifyIcon icon="mdi:checkbox-blank" />,
    checkedIcon: <IconifyIcon icon="mdi:checkbox-marked" />,
    indeterminateIcon: <IconifyIcon icon="mdi:indeterminate-check-box" />,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.info.dark,
    }),
    sizeMedium: ({ theme }) => ({
      padding: theme.spacing(0.75),
      '& .MuiBox-root': {
        fontSize: theme.typography.h5.fontSize,
      },
    }),
    sizeSmall: ({ theme }) => ({
      '& .MuiBox-root': {
        fontSize: theme.typography.h6.fontSize,
      },
    }),
  },
};

export default Checkbox;
