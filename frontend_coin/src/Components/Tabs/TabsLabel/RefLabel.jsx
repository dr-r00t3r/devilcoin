import React from 'react'
import Tab from '@mui/material/Tab';
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function RefLabel() {
  return (
    <Tab label="Ref" {...a11yProps(0)} />
  )
}

export default RefLabel