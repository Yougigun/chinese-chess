import React from 'react'
import classes from './ChineseChessTable.module.css'
const ChineseChessTable = ({Size,CarPos}) => {
    let tableTD =[]
    let table = []
    let tdOfCar = []
    for (let y = 0;y<Size.y;y++){
        tableTD.push(<td></td>)
    }
    for (let y = 0;y<Size.y;y++){
        if (CarPos.y === y) {
            tdOfCar.push(<td>車</td>)
        } else {
            tdOfCar.push(<td></td>)
        }
        
    }
    for (let x = 0;x<Size.x;x++){
        if (CarPos.x === x) {
            table.push((<tr>{tdOfCar}</tr>))
        } else {
            table.push((<tr>{tableTD}</tr>))
        }
    }
    table = (<table>{table}</table>)
    return (
        <div className={classes.ChineseChessTable}>
                {table}
        </div>
    )
}

export default ChineseChessTable
