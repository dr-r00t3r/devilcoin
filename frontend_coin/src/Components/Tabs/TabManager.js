import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {TabRef} from './TabsContent/TabRef'
import TabTask from './TabsContent/TabTask'
// import TabTap from './TabsContent/TabTap'
import { TabTap } from './TabsContent/TabTap';

import TabBoost from './TabsContent/TabBoost'
import TabStats from './TabsContent/TabStats'

import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import GroupsIcon from '@mui/icons-material/Groups';
import ListAltIcon from '@mui/icons-material/ListAlt';
import coin from '../../static/img/tap_icon_click_2.jpg'
import boost from '../../static/img/boost_icon_label.png'
// import RefLabel from './TabsLabel/RefLabel';
// import TaskLabel from './TabsLabel/TaskLabel';
// import TapLabel from './TabsLabel/TapLabel';
// import BoostLabel from './TabsLabel/BoostLabel';
// import StatsLabel from './TabsLabel/StatsLabel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

class TabManager extends Component {
  constructor(props){
    super(props)
    this.state={
        value:2
      }
    // const [value, setValue] = React.useState(2);
  }
  handleChange = (event, newValue) => {
    this.setState({
      value:newValue
    })
    // setValue(newValue);
  };
  render(){
    return (
        <Box sx={{  width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    position:'fixed',
                    bottom:0,
                    justifyItems:'center',
                    alignContent:'center',
                    textAlign:'center',
                    }}>
          <Box sx={{  borderTop: 1,
                      borderColor: 'divider',
                      justifyItems:'center',
                      alignContent:'center',
                      textAlign:'center',
                      }}>
            <Tabs 
                value={this.state.value}
                onChange={this.handleChange}
                aria-label="basic tabs example"
                centered>
              {/* <RefLabel {...a11yProps(0)}/>
              <TaskLabel {...a11yProps(1)}/>
              <TapLabel {...a11yProps(2)}/>
              <BoostLabel {...a11yProps(3)}/>
              <StatsLabel {...a11yProps(4)}/> */}

              <Tab 
                icon={<GroupsIcon  style={{ color: "#E1C177",width:'30px'}}/>}
                sx={{textTransform :"none"}} 
                label="Ref" 
                {...a11yProps(0)}
                // component={Link} 
                to="/passenger"
              />
              <Tab 
                icon={<ListAltIcon style={{ color: "#E1C177",width:'30px'}} />}
                sx={{textTransform :"none"}}
                label="Task" 
                {...a11yProps(1)}
                // component={Link} 
                to="/passenger"
                />
              <Tab 
                icon={<img src={coin} style={{width:'24px',borderRadius:'50%'}}/>}
                sx={{textTransform :"none"}}
                label="Tap" 
                {...a11yProps(2)}
                // component={Link} 
                to="/passenger"
                />
              <Tab 
                icon={<img src={boost} style={{width:'24px'}}/>}
                sx={{textTransform :"none"}}
                label="Boost" 
                {...a11yProps(3)}
                // component={Link} 
                to="/passenger"
                />
              <Tab 
                icon={<MilitaryTechIcon style={{ color: "#E1C177",width:'30px'}}/>}
                sx={{textTransform :"none"}}
                label="Stats" 
                {...a11yProps(4)}
                // component={Link} 
                to="/passenger"
                />
            </Tabs>
          </Box>
            
            <TabRef value={this.state.value} index={0}>

            </TabRef>
            <TabTask value={this.state.value} index={1}>

            </TabTask>
            <TabTap value={this.state.value} index={2}>
              Item One
            </TabTap>
            <TabBoost value={this.state.value} index={3}>

            </TabBoost>
            <TabStats value={this.state.value} index={4}>
              
            </TabStats>
          
        </Box>
    )
  }
}

export {TabManager};