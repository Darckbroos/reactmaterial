import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import { Drawer, Grid, Hidden, IconButton, Tooltip } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';





export function MuiDrawerLeft() {
  const [state, setState] = useState(false);
  
  const toggleDrawer= (open) => (event) => {
      setState(open)
  }

  const list = () =>( 


  <div >
    <Box >
        <Box 
        role="presentation"
        onClick={toggleDrawer( false)}
        onKeyDown={toggleDrawer( false)}
        >
    <IconButton aria-label="" onClose={toggleDrawer(false)}>
        x
    </IconButton>
    
    </Box>
        <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 1 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
        
    </Box>
    </div>
  )

  
  return (
    <div style={{
      maxWidth: 90,
      minWidth: 0,
      position: 'fixed',
      top: 80
  }}>
  
    <Box>
      <Grid >
        <Button variant="contained" onClick={toggleDrawer (true)} startIcon={<DehazeIcon  />}></Button>
      </Grid>
      </Box>
    <Drawer
    anchor={'left'}
    open={state}
    onClose={toggleDrawer(false)}
    variant ="persistent"   
    
    >

    <div style={{
      marginTop:60
    }}>
     {list()}
    </div>
   
    
    
    </Drawer>
    </div>
  )
}

