import { FC, useState } from "react"
import style from "./ChangeColor.module.css"
import { Color } from "../../App"
type propsPage = {

    colors: Array<Color>
    setColors: (colors: Array<Color>) => void
}
let ChangeColor: FC<propsPage> = ({ colors, setColors }) => {
    let [isChange, setIsChange] = useState(false)
    let [innerColors, setInnerColors] = useState(colors)

    let colorsElement = colors.map((el, index) => {
        return (
            <div className={style.color} style={{ background: el.color }} key={index}>
                <span className={style.color_name}>{el.color}</span>
            </div>
        )
    })



    let changeColor = (id: number, color: string) => {
        let update: Array<Color> = innerColors.map((el) => el.id === id ? { ...el, color: color } : el)
        setInnerColors(update)
    }
    let inputs = innerColors.map((el, index) => {
        return (<input key={index} type="color" onChange={(e) => { changeColor(el.id, e.target.value) }}
            value={el.color}></input>)
    })
    // let start = setColor(startColors)
    // let end = setColor(endColors)
    let save = () => {
        setColors(innerColors)
        setIsChange(false)
    }
    return (
        <div className={style.wrapper}>
            {!isChange &&
                <>
                    <div className={style.color_block}>
                        {colorsElement}

                    </div>

                    <button onClick={() => setIsChange(true)}>Change colors</button>
                </>
            }
            {isChange &&
                <>
                    <div className={style.color_block}>
                        {inputs}
                    </div>
                    <div className={style.color_block}>

                        <button onClick={save}>Save</button>
                        <button onClick={() => setIsChange(false)}>Cancel</button>
                    </div>
                </>
            }

        </div>
    );
}

export default ChangeColor;
