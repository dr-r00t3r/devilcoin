import React from 'react'
import Tab from '@mui/material/Tab';
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TaskLabel(props) {
  return (
    <Tab label="Task" props />
  )
}

export default TaskLabel