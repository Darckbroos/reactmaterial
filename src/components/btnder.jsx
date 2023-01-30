import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Drawer, Grid, Hidden, IconButton, Tooltip, Typography } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Container } from '@mui/system';




export function MuiDrawer() {

  const [state, setState] = useState(false);
  
  const toggleDrawer= (open) => (event) => {
      setState(open)
  }


  

  const list = () =>( 
<div>
<Grid>
    <Box zIndex="modal">
        <Box 
        role="presentation"
        onClick={toggleDrawer( false)}
        onKeyDown={toggleDrawer( false)}>
    <IconButton aria-label="" onClose={toggleDrawer(false)}>
        x
    </IconButton>
    
            </Box>
        <List >
                <Card sx={{ maxWidth: 270}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
                />
                <CardContent>
                
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
      </List>
      <List >
                <Card sx={{ maxWidth: 270 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
                />
                <CardContent>
                
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
      </List>
      <List >
                <Card sx={{ maxWidth: 270 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
                />
                <CardContent>
                
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
      </List>        
    </Box>
    </Grid>
</div>
  )

  
  return (
    <div style={{
        maxWidth: 90,
        minWidth: 0,
        position: 'fixed',
        right: 0,
        top: '50%'
    }}>
    <Container maxWidth="xl">
        <Box  >
            <Grid variant="h1" >
            <Button id='drawer2' variant="contained" onClick={toggleDrawer (true)} startIcon={<KeyboardDoubleArrowLeftIcon />}></Button>
            </Grid>
        </Box>
    </Container>
    <Drawer
    anchor={'right'}
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

