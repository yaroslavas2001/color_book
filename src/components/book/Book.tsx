import style from "./Book.module.css"
import chroma from "chroma-js"
import Page from "./../page/Page"
import { FC, useCallback } from "react";
import HTMLFlipBook from 'react-pageflip';
import { Color } from "../../App";
type propsBook = {
    colors: Array<Color>
}
let Book: FC<propsBook> = ({ colors }) => {
    let size = 10

    const mode = "lab"
    // left-top  to left-bottom
    let scale = (color1: string, color2: string): Array<string> => {
        return chroma.scale([color1, color2])
            .mode(mode).colors(size)
    }

    let leftTop = scale(colors[0].color, colors[4].color)
    let rightTop = scale(colors[1].color, colors[5].color)
    let rightBottom = scale(colors[2].color, colors[6].color)
    let leftBottom = scale(colors[3].color, colors[7].color)

    let book = []
    for (let i = 0; i < size; i++) {
        book.push([leftTop[i], rightTop[i], rightBottom[i], leftBottom[i]])
    }

    let bookElement = book.map((el, index) => <Page isViceVersa={index % 2 !== 0} key={index} pageNumber={index + 1} colors={el} />)

    const onFlip = useCallback((e: any) => {
        console.log('Current page: ' + e.data);
    }, []);

    return (
        <div className={style.wrapper}>
            <HTMLFlipBook
                onFlip={onFlip}
                width={300}
                height={400}
                style={{}}
                className=""
                minWidth={300}
                maxWidth={300}
                minHeight={400}
                maxHeight={400}
                drawShadow={true}
                flippingTime={1000}
                usePortrait={true}
                size='fixed'
                startPage={0}
                startZIndex={0}
                autoSize={true}
                maxShadowOpacity={0.5}
                showCover={false}
                mobileScrollSupport={true}
                clickEventForward={true}
                swipeDistance={30}
                useMouseEvents={true}
                showPageCorners={true}
                disableFlipByClick={false}
            >
                {bookElement}
            </HTMLFlipBook>
        </div>
    );
}

export default Book;
