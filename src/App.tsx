import React, { useEffect } from 'react';
import * as C from './app-style';
import { Character } from './components/Character'
import { useCharacter } from './hooks/useCharacter'

function App() {

  const char = useCharacter();

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
        break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
        break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
        break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, [])

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} />
      </C.Map>
    </C.Container>
  );
}

export default App;
