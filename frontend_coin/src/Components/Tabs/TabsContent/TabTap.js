import React , {Component}  from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'
import Avatar from '@mui/material/Avatar';

import coin from '../../../static/img/tap_icon_label.png'
import clicable from '../../../static/img/tap_icon_click_2.jpg'

function ShowAmountCoin(amount){
  var thausend_q=amount/1000
  var milion_q=amount/1000000
  if (milion_q>0){
    return parseFloat(amount/1000000)+" M"
  }else if (thausend_q>0){
    return parseFloat(amount/1000)+" K"
  }else{
    return parseFloat(amount)
  }
}
class TabTap extends Component{
  constructor(props){
    super(props)
    
    // value=this.props.value
    // index=this.props.index
    // const { children, value, index, ...other } = this.props.value,this.props.index;
  }
  // const { children, value, index, ...other } = props;
  render(){
    return (
      <div
        role="tabpanel"
        hidden={this.props.value !== this.props.index}
        id={`simple-tabpanel-${this.props.index}`}
        aria-labelledby={`simple-tab-${this.props.index}`}
        // {...other}
        style={{height:'100%',width:'100%'}}
      >
          <Box
            sx={{  
              width: '100%',
              height:'100%',
              textAlign:'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent:'center',
              }}
            >
              <Box
                sx={{  
                  width: '100%',
                  height:'30%',
                  marginTop:'50px',
                  // marginBottom: '50px',
                  display:'flex',
                  textAlign:'center',
                  justifyContent:'center'
                }}
              >
                <Avatar  
                  src={clicable} 
                  sx={{ width: '10%', height: '10%' }}
                  style={{marginRight:'15px',marginTop:'5px'}}
                  />
                <Typography variant="h5" gutterBottom style={{textAlign:'center',paddingTop:'10px'}}>
                  {ShowAmountCoin(2450000)}
                </Typography>
                {/* <Typography variant="h1" gutterBottom>
                    h2. Heading
                </Typography> */}
              </Box>
              <Box
                // onClick={}
                sx={{  
                  width: '100%',
                  height:'70%',
                  // marginTop:'100px'
                }}
                
              >
                <div 
                  style={{
                        display:'flex',
                        textAlign:'center',
                        justifyContent:'center'
                      }}
                  > 
                  <Avatar  
                    sx={{ width: '20%', height: '20%' }}
                    alt="tap_icon" src={clicable}
                  />
                </div>
              </Box>
          </Box>
      </div>
    )
  }
}

export {TabTap}