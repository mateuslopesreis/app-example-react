
type ListagemContatosProps ={
    children:React.ReactNode
}

export function ListagemContatos({children}:ListagemContatosProps){
    return(
        <div className="lista">
                {children}
            </div>
    )
}