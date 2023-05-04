import React, { FC } from "react"
import style from "./Page.module.css"
import chroma from "chroma-js"
type propsPage = {
    colors: Array<string>
    pageNumber: number
    isViceVersa: boolean
}
let Page: FC<propsPage> = ({ colors, pageNumber, isViceVersa }) => {

    let size = 100
    // lab
    // lrgb
    const mode = "lab"
    let scale = (color1: string, color2: string): Array<string> => {
        return chroma.scale([color1, color2]).gamma(1.4).padding([-0.1, 0])
            .mode(mode).colors(size)
    }
    let left = scale(colors[0], colors[2])
    let right = scale(colors[1], colors[3])

    let ar = []

    for (let i = 0; i < size; i++) {
        const leftColor = isViceVersa ? left[i] : right[i];
        const rightColor = isViceVersa ? right[i] : left[i];
        let grad = chroma.scale([leftColor, rightColor])
            .mode(mode).colors(size)
        ar.push(grad)
    }

    let page = ar.map((el, index) => <div key={index} className={style.row}>
        {el.map((color, index) =>
            <span key={index} style={{ background: color }} className={style.block}></span>)}
    </div>
    )

    return (
        <div className={style.wrapper}>
            {page}
            <div className={isViceVersa?style.viceVersa:""}>{pageNumber}</div>
        </div>
    );
}
const PageRef = React.forwardRef((props: any, ref: any) => {
    return (
        <div ref={ref}>
            <Page isViceVersa={props.isViceVersa} colors={props.colors} pageNumber={props.pageNumber} />
        </div>
    );
});
export default PageRef;
