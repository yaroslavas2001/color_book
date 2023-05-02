import style from "./Book.module.css"
import chroma from "chroma-js"
import Page from "./../page/Page"
import { PageFlip } from 'page-flip';
import { LegacyRef, useCallback, useRef } from "react";
import HTMLFlipBook from 'react-pageflip';

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
    let bookElement = book.map((el, index) => <Page key={index} colors={el}></Page>)
    const onFlip = useCallback((e: any) => {
        console.log('Current page: ' + e.data);
    }, []);
    return (
        <div className={style.wrapper}>
            {/* <input type="color" /> */}
            <HTMLFlipBook
                onFlip={onFlip}
                width={300}
                height={400}
                style={{}}
                className=""
                minWidth={300}
                maxWidth={400}
                minHeight={400}
                maxHeight={500}
                drawShadow={true}
                flippingTime={1000}
                usePortrait={true}
                size='fixed'
                startPage={0}
                startZIndex={0}
                autoSize={true}
                maxShadowOpacity={0.9}
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
