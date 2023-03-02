import {House, User, Gear} from 'phosphor-react'
import './NavStyle.css'



export function Nav(){

    return(
        <>
            
       
         <nav className='navbar-menu'>
        <a title='Inicio' href='#'>
            <House size={25}/>
        </a>

        <a title='Perfil' href='#'>
            <User size={25}/>
        </a>

        <a title='configurações' href="#">
            <Gear size={25}/>
        </a>
         </nav>  
      
        </>
    )

}