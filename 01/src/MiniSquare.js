import { useState } from 'react';

import { MiniSquareStyle } from './styles';

export default function MiniSquare() {
    const [color, setColor] = useState('#f00');


    function handleClick() {
        (async () => {
            const color = await localStorage.getItem('color')
            setColor(color)
        })()
    }
    return (
        <MiniSquareStyle onClick={handleClick} color={color}>

        </MiniSquareStyle>
    )
}