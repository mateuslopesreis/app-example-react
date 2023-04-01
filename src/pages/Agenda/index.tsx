import { Children, Component, useEffect, useState } from "react";
import { Title } from "../../components/Title";
import { Cartao } from "../../components/Cartao";
import { ListagemContatos } from "../../components/ListagemContatos";
import './style.css'
import { getContacts } from "../Services/api";
import { Contact } from "../../Types";
import {CircularProgress, TextField, makeStyles} from "@mui/material"
import { Base } from "../../layout/base";



export function Agenda(){
    
    

    const[search,setSearch] = useState('')
    const [isLoanding, setIsLoanding] = useState<Boolean>(false)
    const [contacts, setContacs]= useState<Contact[]>([])


    const lowerBusca = search.toLowerCase()

    const filteredContacts = contacts.filter((contact)=> contact.name.first.toLowerCase().includes(lowerBusca))
        //fazer a busca
        //criar um filter por nome
    
 
    console.log(search)

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
            <TextField value={search} onChange={(e)=>setSearch(e.target.value)} variant='outlined' fullWidth />
                
        {
           
            isLoanding?( <CircularProgress />) : 
            (
                <ListagemContatos>
           
           {
            filteredContacts.map(contact => {

              return <Cartao key={contact.login.uuid} contactData={contact} />

            })}     
          </ListagemContatos>
            )

        }
    </Base>
    )
    
}

