import React from 'react'
import Tab from '@mui/material/Tab';
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BoostLabel() {
  return (
    <Tab label="Boost" {...a11yProps(3)} />
  )
}

export default BoostLabel