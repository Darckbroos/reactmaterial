import React from 'react';
import { Grid, Button } from '@mui/material';

export const Imagenes = () => {
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
                <img src="./Assets/img/Plano1.jpg" className="logo" alt="" width={'100%'} />
                </Button>
                
            </Grid>
        </Grid>
    );
}
