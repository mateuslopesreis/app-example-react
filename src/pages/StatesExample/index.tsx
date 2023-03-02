import './style.css'

export function StatesExample(){
    console.log('renderizou')
    let name = 'Mateus'

    function handleInput(event){
        name = event.target.value
        console.log('disparou evento')
    }

    return(
        <>
            <input onInput={handleInput} className='inputName' type='text'/>
            <h1>{name}</h1>
        </>
    )
}