import React, {useState} from 'react';
import { Grid, Button } from '@mui/material';
import { BasicModal } from './btnimagen';


const initialButtons = [];

export const Imagenes = () => {


    const [buttons, setButtons] = useState(initialButtons);

    const handleClick = (event) => {
        
      const { clientX , clientY } = event;
      const overlappingButton = buttons.find(
        (button) =>
            clientX > button.left &&
            clientX < button.left + button.width &&
            clientY > button.top &&
            clientY < button.top + button.height
      );
      if (!overlappingButton) {
        setButtons([
          ...buttons,
          {
            left: clientX + -50+'px',
            top:  clientY + -25 +'px',
            width: 100,
            height: 50,
          },
        ]);
      }
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
                        overflow: 'hidden',
                }}>
                    <img onClick={handleClick} src="./Assets/img/Plano1.jpg" className="logo" alt="" width={'100%'} />
                </Grid>
                <Grid>
                {buttons.map((button, index) => (
                        <Button
                        onClick={handleClick}
                        key={index}
                        style={{
                          
                          position: "absolute",
                          left: button.left,
                          top: button.top,
                          width: button.width,
                          height: button.height,
                            
                        }}
                        > 
                        <Grid>
                            <BasicModal></BasicModal>
                        </Grid>
                       
                    </Button>
                ))}
                </Grid>
                    
                
                
            </Grid> 
        </Grid>
    );
}
