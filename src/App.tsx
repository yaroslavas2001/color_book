
import { useState } from 'react';
import './App.css';
import Book from './components/book/Book';
import ChangeColor from './components/chanhe_color/ChangeColor';
export type Color = {
  id: number,
  color: string
}
function App() {
  let icolors: Array<Color> = [
    {
      id: 1,
      color: "#FFFFFF"
    },
    {
      id: 2,
      color: "#FFFF00"
    },
    {
      id: 3,
      color: "#FF0000"
    },
    {
      id: 4,
      color: "#E04E7B"
    },
    {
      id: 5,
      color: "#7F00FF"
    },

    {
      id: 6,
      color: "#32CD32"
    },
    {
      id: 7,
      color: "#000000"
    },
    {
      id: 8,
      color: "#0000FF"
    },
  ]
  let [colors, setColors] = useState(icolors)


  return (
    <div className="App">
      <ChangeColor setColors={setColors} colors={colors} />
      <Book colors={colors}  ></Book>
    </div>
  );
}

export default App;
