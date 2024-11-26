import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Sidebar from './sidebar/index';
import Topbar from './topbar/index';

const MainLayout = ({
  children
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  return (
    (<Stack width={1}>
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        setIsClosing={setIsClosing} />
      <Stack
        component="main"
        direction="column"
        px={3.5}
        flexGrow={1}
        width={{ xs: 1, lg: 'calc(100% - 290px)' }}>
        <Topbar
          isClosing={isClosing}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen} />
        {children}
      </Stack>
    </Stack>)
  );
};

export default MainLayout;
