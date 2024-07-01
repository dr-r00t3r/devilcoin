import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'

function TabBoost(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box
        sx={{  
          width: '100%',
          textAlign:'center',
          display: 'flex',
          flexDirection: 'column',
          }}
        >
          <Typography variant="h6" gutterBottom>
            {/* tabboost */}
          </Typography>
      </Box>
    </div>
  )
}

export default TabBoost