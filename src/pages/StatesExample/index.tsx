import { useState } from 'react'
import './style.css'

export function StatesExample(){
    console.log('renderizou')
    const [name,setName] = useState('')

    function handleInput(event: React.ChangeEvent<HTMLInputElement>){
        /*let nome = event.target.value
        setName(nome)
               ou 
        */
        setName(event.target.value)
        console.log('disparou evento')
    }

    return(
        <>
            <h1>State Example</h1>
            <input onInput={handleInput} className='inputName' type='text'/>
            <h1>{name}</h1>
        </>
    )
}