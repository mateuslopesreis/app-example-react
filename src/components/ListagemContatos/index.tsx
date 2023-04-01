import { List } from '@mui/material'

type ListagemContatosProps ={
    children:React.ReactNode
}

export function ListagemContatos({children}:ListagemContatosProps){
    return(

        <section className='listandoContatos'>
        <List sx={{
        }}>
                    {children}
            
 
        </List>
        </section>
    )
}
/* 
{/* <ListemItemText> *
buscar TextFiedl/} */
    
{/* <CssBaseline></CssBaseline> */}