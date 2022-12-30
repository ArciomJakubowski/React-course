import React, {useState} from "react";
import Counter from "./counter";


const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: 'Ненужная вещь'},
        {id: 1, value: 4, name: 'Ложка'}, 
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'},
     ]

    const [counters, setCounters] = useState(initialState)

       const handleDelete = (id) =>{
            console.log('handleDelete: ', id);
            const newCounters = counters.filter(c => c.id !== id)
            console.log(newCounters);
            setCounters(newCounters)
       }

    const handleReset = () => {
        setCounters(initialState)
        // console.log('handle reset');
    }

    const handleIncrement = (valueCounter, incrId) => {
        setCounters(counters.map((count) => count.id === incrId ? {...count, value: valueCounter} : {...count}))
        // console.log('counters12', counters);
    }

    const handleDecrement = (valueCounter, decrId) => {
        setCounters(prevState => prevState.map((count) => count.id === decrId && valueCounter >= 0 ? {...count, value: valueCounter} : {...count}))
        // console.log('counters123', counters);
    }


    // const handleUpdate = () => {
    //     const updatedState = [
    //         {id: 0, value: 1, name: 'Ненужная вещь', price: '222'},
    //         {id: 1, value: 2, name: 'Ложка'}, 
    //         {id: 2, value: 3, name: 'Вилка'},
    //         {id: 3, value: 4, name: 'Тарелка'},
    //         {id: 4, value: 0, name: 'Набор минималиста'},
    //      ]
    //     setCounters(updatedState)
    // }
    return (
        <>
         {counters.map((count) => (
                <Counter 
                    key = {count.id}
                    {...count}                              // id = {count.id} value = {count.value} name = {count.name}
                    onIncrement = {handleIncrement} 
                    onDecrement = {handleDecrement} 
                    onDelete = {handleDelete} />    
            ))}
            <button className="btn btn-primary btn-sm m-2 " onClick={handleReset}> Сброс </button>
            {/* <button className="btn btn-primary btn-sm m-2 " onClick={handleUpdate}> Обновить состояние </button> */}
        </>
    )
}

export default CountersList