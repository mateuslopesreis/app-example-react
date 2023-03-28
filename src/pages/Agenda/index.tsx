import { Children, Component, useEffect, useState } from "react";
import { Title } from "../../components/Title";
import { Cartao } from "../../components/Cartao";
import { ListagemContatos } from "../../components/ListagemContatos";
import './style.css'
import { getContacts } from "../Services/api";
import { Contact } from "../../Types";



export function Agenda(){
    const[search,setSearch] = useState('')
    const [contacts, setContacs]= useState<Contact[]>([])
 
    useEffect(()=>{
        async function listContacts(){
            setContacs(await getContacts())
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
        <>
        <header>
    <Title text="Agenda de contatos"></Title>
    </header>
    <main>
    <input  type="search" className="barra_pesquisa" placeholder="Localizar"/>
       
           <ListagemContatos>
           
           {
            contacts.map(contact => {
              return <Cartao contactData={contact} />
            })
          }
        
           
                
          </ListagemContatos>
    </main>
        
    </>
    )
    
}

