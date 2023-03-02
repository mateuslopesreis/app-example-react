
export function Formulario(){

    return(
        <form>
                <input type="text" placeholder="Nome de Usuário"/>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirnmar Senha"/>
            <div className="action-buttons">
                <button className="btn">Criar Conta</button>
            </div>
        </form>
        
    )

}