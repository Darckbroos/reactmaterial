import { Typography } from '@mui/material';
import React from 'react';
import { Grid } from '@mui/material';

export const Imagenes = () => {
    return (
        <Grid container justifyContent="center">
            <Grid 
            style={{
                    maxWidth:'70%',
                     width:'100%',
                     position: 'static',
                     marginTop: 70,
                     borderStyle: 'solid',
                     borderWidth: '5px',
                     borderColor: 'green ',
                
                }}>
                <img src="./Assets/img/Plano1.jpg" className="logo" alt="" width={'100%'} />
            </Grid>
        </Grid>
    );
}


// import React from 'react';

// export const Imagenes = () => {
//     return (
         
//         <Grid 
//         container
//         >
//             <Grid item xs={3}>
//             <div style={{
//                 maxWidth:'100%',
//                 position: 'static',
//                 marginTop: 70,
//                 borderStyle: 'solid',
//                 borderWidth: '5px',
//                 borderColor: 'green ',
//                 alignItems:'center'
                
                
//             }}>
//                 <img src="./Assets/img/Plano1.jpg" className="logo" alt="" width={'100%'} />
//               </div>   
//             </Grid>
//         </Grid>
       
//     );
// // }



// return (
//     <div style={{
//         maxWidth:'70%',
//         position: 'static',
//         marginTop: 70,
        
        
//     }}>
//         <img src="./Assets/img/Plano1.jpg" className="logo" alt="" width={'75%'} />
//     </div>
// );