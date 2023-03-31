import { Children, Component, useEffect, useState } from "react";
import { Title } from "../../components/Title";
import { Cartao } from "../../components/Cartao";
import { ListagemContatos } from "../../components/ListagemContatos";
import './style.css'
import { getContacts } from "../Services/api";
import { Contact } from "../../Types";
import {CircularProgress, TextField} from "@mui/material"
import { Base } from "../../layout/base";



export function Agenda(){
    const[search,setSearch] = useState('')
    const [isLoanding, setIsLoanding] = useState<Boolean>(false)
    const [contacts, setContacs]= useState<Contact[]>([])
 
    useEffect(()=>{
        async function listContacts(){
            setIsLoanding(true)
            setContacs(await getContacts())
            setIsLoanding(false)
            console.log(contacts)
        }
        listContacts()
    },[])


    //array de dependencia

    /* useEffect(()=>{
        console.log(search)
    },search)
 */
    return(
       <Base appBarTitle={'Agenda de Contatos'}>
    <input type="search" className="barra_pesquisa" placeholder="Localizar"/>

        {
            isLoanding? <CircularProgress /> : 
            (
                <ListagemContatos>
           
           {
            contacts.map(contact => {
              return <Cartao contactData={contact} />
            })}     
          </ListagemContatos>
            )

        }
    </Base>
    )
    
}

