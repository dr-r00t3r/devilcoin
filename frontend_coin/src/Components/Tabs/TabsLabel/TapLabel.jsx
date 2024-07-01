import React from 'react'
import Tab from '@mui/material/Tab';
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TapLabel(props) {
  return (
    <Tab label="Tap" props />
  )
}

export default TapLabel