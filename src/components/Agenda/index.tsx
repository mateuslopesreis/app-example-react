import { Children, Component } from "react";
import { Title } from "../../components/Title";
import { Cartao } from "../Cartao";
import { ListagemContatos } from "../ListagemContatos";
import './style.css'

export function Agenda(){

    return(
        <>
        <header>
    <h2>Agenda de contatos</h2>
    </header>
    <input type="text" className="barra_pesquisa" placeholder="Localizar"/>
        <main>
           <ListagemContatos>
                <Cartao nome="Mateus" email={'lopes@gmail.com'}></Cartao>
          </ListagemContatos>
    </main>
        
    </>
    )
    
}


/* component list ---(Children:React.reactnode)

dentro outro Componente --- que vai ser os cartões */
