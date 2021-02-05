import React,{useState} from 'react'
import classes from './ChineseChess.module.css'
import ChineseChessTable from './ChineseChessTable/ChineseChessTable'


const ChineseChess = () => {
    const [carPosition, setCarPosition] = useState({x:0,y:0})
    const [carInputX, setCarInputX] = useState(0)
    const [carInputY, setCarInputY] = useState(0)

    const checkCarValid = (cur,nextX,nextY) => {
        nextX = parseInt(nextX)
        nextY = parseInt(nextY)

        if (((cur.x !== nextX)&&(cur.y !== nextY))
            ||((nextX<0)||(9<nextX))
            ||((nextY<0)||(9<nextY))){
            setCarInputX(carPosition.x)
            setCarInputY(carPosition.y)
            window.alert("Cannot go there.")
            return false
        }
        setCarPosition({x:nextX,y:nextY})
        return true
    }

    return (
        <div className={classes.ChineseChess}>
            <ChineseChessTable Size={{x:10,y:10}} CarPos={carPosition}/>
            <label>移動車至 X (0-9):</label>
            <input 
                onChange={e=>{setCarInputX(e.target.value)}} 
                value={carInputX}
                type="number" min="0" max="9"/>
            <label>移動車至 Y(0-9):</label>
            <input 
                onChange={e=>{setCarInputY(e.target.value)}} 
                value={carInputY}
                type="number" min="0" max="9"/>
            <button onClick={()=>{
                checkCarValid(carPosition,carInputX,carInputY)}}>Go</button>
        </div>
    )
}

export default ChineseChess