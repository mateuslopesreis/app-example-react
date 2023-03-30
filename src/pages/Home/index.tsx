import { AddressBook, ImageSquare } from 'phosphor-react'
import Button from '../../components/ButtonUI'
import { Menu } from '../../components/Menu'
import { MenuItem } from '../../components/MenuItem'
import { Title } from '../../components/Title'
import {Link} from 'react-router-dom'
import { Base } from '../../layout/base'
/* import {} from 'phosphor-react' */


export function Home(){

    return(
      
        <Base appBarTitle="Dashboard">

                <Menu>
                <Link to='/Agenda'>
                    <MenuItem icon={<AddressBook size={24}/>} text="Agenda"/>
                </Link>
                    
                    <Link to='/Gallery'>
                    <MenuItem icon={<ImageSquare size={24}/>} text="Galeria"/>
                    </Link>
                    
                </Menu>
        </Base>
   
    )

}


{/*  <div className="action-buttons">
                    <Button text='Login' type='primary' />
                    <Button text='Cadastro' type='default'/>
                    <Button text='Luffy' type='primary'/>
                    
                </div> */}