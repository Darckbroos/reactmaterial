import React, {useState} from 'react';
import { Grid, Button } from '@mui/material';
import { BasicModal } from './btnimagen';


export const Imagenes = () => {


    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

    const handleClick = (event) => {
      setButtonPosition({ x: event.clientX+ -45+'px' , y: event.clientY + -20 +'px' });
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
                <Grid style={{
                        maxWidth:'100%',
                        minWidth:'20%',
                        border: '3px solid #66ff76',
                }}>
                    <img onClick={handleClick} src="./Assets/img/Plano1.jpg" className="logo" alt="" width={'100%'} />
                </Grid>
                                <Button
                    style={{
                    position: 'fixed',
                    left: buttonPosition.x,
                    top: buttonPosition.y,
                    overflowx: 'hidden',    
                    }}
                    
                >
                    <BasicModal></BasicModal>
                </Button>
                
            </Grid>
        </Grid>
    );
}
