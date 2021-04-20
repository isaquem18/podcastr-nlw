import MiniSquare from './MiniSquare';
import { Square } from './styles';

function App() {

  function handleSelectedColor() {
    const getColor = document.getElementById('getColor').value;
    localStorage.setItem('color', getColor)
  }

  return (
    <>
      <input type="text" placeholder="#000" onChange={handleSelectedColor} id="getColor" />
      <Square>
      <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />    
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
        <MiniSquare />
      </Square>
    </>
  );
}

export default App;
