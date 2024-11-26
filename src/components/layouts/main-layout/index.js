import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Calendar from '../sections/calendar/index.jsx';
import Analytics from '../sections/analytics/index.jsx';
import TotalSpent from '../sections/total-spent/index.jsx';
import CardSecurity from '../sections/card-security/index.jsx';
import ComplexTable from '../sections/complex-table/index.jsx';
import PiChart from '../sections/your-pi-chart/index.jsx';
import History from '../sections/history/index.jsx';
import Revenue from '../sections/revenue/index.jsx';
import Tasks from '../sections/tasks/index.jsx';
import TeamMembers from '../sections/team-members/index.jsx';
import DailyTraffic from '../sections/daily-traffic/index.jsx';
import TrendingNFTs from '../sections/trending-nfts/index.jsx';
import BusinessDesign from '../sections/business-design/index.jsx';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {theme} from './theme/theme.js';
import Layout from './main-layout/index.jsx';
import Stack from '@mui/material/Stack';


const Dashboard = () => {

  useEffect(()=>{
    document.body.classList.add('bodyChange')
    return ()=>{
      document.body.classList.remove('bodyChange')
    }
  })
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Layout/>
      <Stack px={'28px'}>
    <Grid container spacing={2.5}>
      <Grid item xs={12}>
        <Analytics />
      </Grid>
      <Grid item xs={12} md={6}>
        <TotalSpent />
      </Grid>
      <Grid item xs={12} md={6}>
        <Revenue />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CardSecurity />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <Tasks />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <DailyTraffic />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <PiChart />
      </Grid>
      <Grid item xs={12} lg={8} xl={6}>
        <TrendingNFTs />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <History />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <Calendar />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <BusinessDesign />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <TeamMembers />
      </Grid>
      <Grid item xs={12} lg={8} xl={6}>
        <ComplexTable />
      </Grid>
    </Grid>
    </Stack>
    </ThemeProvider>
  );
};

export default Dashboard;
