import { AddressBook, ImageSquare } from 'phosphor-react'
import Button from '../../components/Button'
import { Menu } from '../../components/Menu'
import { MenuItem } from '../../components/MenuItem'
import { Title } from '../../components/Title'
import {Link} from 'react-router-dom'
/* import {} from 'phosphor-react' */


export function Home(){

    return(
    <>
        <header>
                <Title text='Bem vindo'/>
        </header>
            <main>
                
                <Menu>
                <Link to='/Agenda'>
                    <MenuItem icon={<AddressBook size={24}/>} text="Agenda"/>
                </Link>
                    
                    <Link to='/Gallery'>
                    <MenuItem icon={<ImageSquare size={24}/>} text="Galeria"/>
                    </Link>
                </Menu>
             </main>
    </>
    )

}


{/*  <div className="action-buttons">
                    <Button text='Login' type='primary' />
                    <Button text='Cadastro' type='default'/>
                    <Button text='Luffy' type='primary'/>
                    
                </div> */}