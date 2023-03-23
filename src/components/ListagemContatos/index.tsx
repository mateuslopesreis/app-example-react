import './style.css'

type ListagemContatosProps ={
    children:React.ReactNode
}

export function ListagemContatos({children}:ListagemContatosProps){
    return(
        <>
            <section className='listagemContatos'>
                    {children}
            </section>
 
        </>
    )
}