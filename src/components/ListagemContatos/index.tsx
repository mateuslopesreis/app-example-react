import { CssBaseline } from '@mui/material'
import { List } from '@mui/material/List'
import './style.css'

type ListagemContatosProps ={
    children:React.ReactNode
}

export function ListagemContatos({children}:ListagemContatosProps){
    return(
        <List>
                    {children}
            
 
        </List>
    )
}
/* 
{/* <ListemItemText> *
buscar TextFiedl/} */
    
{/* <CssBaseline></CssBaseline> */}