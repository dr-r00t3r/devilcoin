import React from 'react'
import Tab from '@mui/material/Tab';
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function StatsLabel() {
  return (
    <Tab label="Stats" {...a11yProps(4)} />
  )
}

export default StatsLabel