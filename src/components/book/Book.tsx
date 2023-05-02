import style from "./Book.module.css"
import chroma from "chroma-js"
import Page from "./../page/Page"
function Book() {
    let size = 10
    const mode = "lab"
    // left-top  to left-bottom
    let startColors: Array<string> = ["white", "yellow", "red", "#E04E7B"]
    let endColors: Array<string> = ["violet", "green", "black", "blue"]

    let scale = (color1: string, color2: string): Array<string> => {
        return chroma.scale([color1, color2])
            .mode(mode).colors(size)
    }
    let leftTop = scale(startColors[0], endColors[0])
    let rightTop = scale(startColors[1], endColors[1])
    let rightBottom = scale(startColors[2], endColors[2])
    let leftBottom = scale(startColors[3], endColors[3])

    let book = []
    for (let i = 0; i < size; i++) {
        book.push([leftTop[i], rightTop[i], rightBottom[i], leftBottom[i]])
    }
    let bookElement = book.map((el,index) => <Page key={index} colors={el}></Page>)

    return (
        <div className={style.wrapper}>
            <input type="color" />
            {bookElement}
            {/* <Page colors={startColors} /> */}
        </div>

    );
}

export default Book;
