import { useState } from 'react'
import { movies } from './data'
import './style.css'

export function Gallery(){
    console.log('renderizou')

    /* let NovoMovie = movies[0] */
    

    const [listar,setListar] = useState(0)
    let movie = movies[listar]

    function handleInput(){
            
          
            console.log(movies.length)
          /* if(movies.length>15){ */
            console.log('deu')
          
            setListar(listar+1);
          
    }

    function handleInput2(){
        setListar(listar-1)
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
    
    -------------------------------------------------------------------------------------------
    Primeiro teste de useState


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
            
        </> */

