import * as C from './styled';
import { CharacterSides } from '../../types/CharacterSide'

type Props = {
  x: number
  y: number
  side: CharacterSides
}

export const Character: React.FC<Props> = ({ x, y, side }) => {
  const size = 30;

  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90
  }

  return (
    <C.Container
      size={size}
      left={x * size}
      top={y * size}
      sidePos={sides[side] ?? 0}
    >

    </C.Container>
  )
}