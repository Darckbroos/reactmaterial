import React, {useState} from 'react';
import { Grid, Button } from '@mui/material';
import { NestedModal } from './modalchild';


export const Imagenes = () => {


    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

    const handleClick = (event) => {
      setButtonPosition({ x: event.clientX+ -50+'px' , y: event.clientY + -20 +'px' });
    };

    return (
        <Grid container justifyContent="center">
            <Grid 
            style={{
                    maxWidth:'70%',
                     width:'100%',
                     position: 'static',
                     marginTop: 70,
                     
                
                }}>
                <Button
                style={{
                    maxWidth:'100%',
                     borderStyle: 'solid',
                     borderWidth: '5px',
                     borderColor: 'rgba(255, 0, 0, 0.4) ',
                     
                
                }}
                >
                <img onClick={handleClick} src="./Assets/img/Plano1.jpg" className="logo" alt="" width={'100%'} />
                       </Button> 
                <Button
                    style={{
                    position: 'fixed',
                    left: buttonPosition.x,
                    top: buttonPosition.y,
                    overflowx: 'hidden',
                    overflowy: 'hidden'
                    }}
                    
                >
                    <NestedModal></NestedModal>
                </Button>
                
            </Grid>
        </Grid>
    );
}
