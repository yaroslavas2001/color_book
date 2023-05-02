import { FC } from "react"
import style from "./Page.module.css"
import chroma from "chroma-js"
type propsPage = {
    colors: Array<string>
}
let Page: FC<propsPage> = ({ colors }) => {

    let size = 100
    // lab
    // lrgb
    const mode = "lab"
    let scale = (color1: string, color2: string): Array<string> => {
        return chroma.scale([color1, color2])
            .mode(mode).colors(size)
    }
    let left = scale(colors[0], colors[2])
    let right = scale(colors[1], colors[3])
   
    let ar = []
   
    for (let i = 0; i < size; i++) {
        const leftColor = left[i];
        const rightColor = right[i];
        let grad = chroma.scale([leftColor, rightColor])
            .mode(mode).colors(size)
        ar.push(grad)
    }
   
   let page = ar.map((el, index) => <div key={index} className={style.row}>
        {el.map((color, index) => <span key={index} style={{ background: color }} className={style.block}></span>)}
    </div>
    )

    return (
        <div className={style.wrapper}>
            {page}
        </div>

    );
}

export default Page;
