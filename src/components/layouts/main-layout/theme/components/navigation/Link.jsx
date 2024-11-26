import { Link as RouterLink } from 'react-router-dom';
import { forwardRef } from 'react';

const LinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

const Link = {
  defaultProps: {
    underline: 'none',
    component: LinkBehavior,
  },
};

export default Link;
