
import { useState } from 'react';
import './App.css';
import Book from './components/book/Book';
import ChangeColor from './components/chanhe_color/ChangeColor';
import html2canvas from 'html2canvas';

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

  let print = () => {
    var containers: any = document.getElementsByClassName("gradient_page");; /* full page */
    console.log("c", containers)
    if (containers)
      for (let i = 0; i < containers.length; i++) {
        const element = containers[i];
        time(i + 1, element, i + 1)
        // html2canvas(element, { allowTaint: true, useCORS: true, logging: true }).then(function (canvas) {
        //   var link = document.createElement("a");
        //   document.body.appendChild(link);
        //   link.download = `page_${i + 1}_color_book.jpg`;
        //   link.href = canvas.toDataURL('image/pdf');
        //   link.target = '_blank';
        //   link.click();
        // });
      }
  }
  let pr = (element: any, pageNumber: number) => {
    html2canvas(element, { allowTaint: true, useCORS: true, logging: true }).then(function (canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = `page_${pageNumber}_color_book.jpg`;
      link.href = canvas.toDataURL('image/pdf');
      link.target = '_blank';
      link.click();
    });
  }
  // та как нет на странице разртанй странице, он на 3 не печатается
  let time = (time: number, element: any, pageNumber: number) => {
    setTimeout(pr, time * 2000, element, pageNumber);
    // setTimeout()
  }
  return (
    <div className="App">
      <ChangeColor setColors={setColors} colors={colors} />
      <Book colors={colors}  ></Book>
      <button className='print_btn' onClick={() => print()}>Print</button>
    </div>
  );
}

export default App;
