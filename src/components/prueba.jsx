import { Button } from '@mui/material';
import React, { useState } from 'react';

export function MyButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [changes, setChanges] = useState(0);

  const handleClick = (event) => {
    setPosition({ x:  event.client.x + 1, y:  event.client.y + 1 });
    setChanges(changes + 1);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Botón 1
      </Button>
      <Button variant="contained" style={{ position: 'absolute', left: position.x, top: position.y }}>
        Botón 2 (cambios: {changes})
      </Button>
    </div>
  );
}

