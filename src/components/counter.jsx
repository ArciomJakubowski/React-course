import React, { useState } from "react";


const Counter = (props) => {
    // console.log(props);
    // const [value, setValue] = useState(props.value)
    const {value, id} = props
    // console.log(value);
    // console.log(id);

    const formatValue = () => {
        return value === 0 ? 'empty' : value
    }

    let getBadgeClasses = () => {
        let classes = 'badge m-2 '
        classes += value === 0 ? 'bg-warning' : 'bg-primary'
        return classes
    }

    const handleIncrement = () => {
        // console.log('handle increment');
        // value((prevpState) => prevState + 1)
        return props.onIncrement((value + 1), id)
    }

    const handleDecrement = () => {
        // console.log('handle decrement');
        // value((prevState) => prevState - 1)
        return props.onDecrement((value - 1), id)
    }


    return (
        <div>
            <span>{props.name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={() => handleIncrement()}>+</button>
            <button className="btn btn-primary btn-sm m-2" onClick={() => handleDecrement()}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => (props.onDelete(props.id))}>Delete</button>
        </div>
    )
   
}

export default Counter