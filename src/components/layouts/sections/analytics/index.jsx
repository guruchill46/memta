import Grid from '@mui/material/Grid';
import Earnings from './earnings.jsx';
import Sales from './sales.jsx';
import Spend from './spend.jsx';
import Tasks from './tasks.jsx';
import Balance from './balance/index.jsx';
import Projects from './projects.jsx';

const Analytics = () => {
  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12} sm={6} md={4} xl={2}>
        <Earnings />
      </Grid>

      <Grid item xs={12} sm={6} md={4} xl={2}>
        <Spend />
      </Grid>

      <Grid item xs={12} sm={6} md={4} xl={2}>
        <Sales />
      </Grid>

      <Grid item xs={12} sm={6} md={4} xl={2}>
        <Balance />
      </Grid>

      <Grid item xs={12} sm={6} md={4} xl={2}>
        <Tasks />
      </Grid>

      <Grid item xs={12} sm={6} md={4} xl={2}>
        <Projects />
      </Grid>
    </Grid>
  );
};

export default Analytics;
