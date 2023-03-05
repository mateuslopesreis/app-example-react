import { useState } from 'react'
import { movies } from './data'
import './style.css'

export function Gallery(){
    console.log('renderizou')

    /* let NovoMovie = movies[0] */
    let aum = 0

    const [movie,setMovie] = useState(movies[0])


    function handleInput(){
          setMovie(movies[length++])
    }

    function handleInput2(){
        setMovie(movies[length--])
  }

    return(
        <>
            <section className="gallery">
            
            <img src={movie.images.poster}></img>
            <p>Titulo: </p><h3>{movie.title}</h3>
            <p>Duração: </p><h3>{movie.duration}</h3>
            
            
            <button className='botoes' onClick={handleInput}>Anterior</button>
            <button className='botoes'onClick={handleInput2}>Próxima</button>
            </section>
            
        </>
    )
}

/* 
const [name,setName] = useState('')



return(
    <>
        <h1>State Example</h1>
        <input onInput={handleInput} className='inputName' type='text'/>
        <h1>{name}</h1> */ 