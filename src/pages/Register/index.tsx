import Button from "../../components/ButtonUI";
import { Title } from "../../components/Title";


export function Register(){
        return (
            <>
            <header>
            <Title text="Criar Conta"/>
        </header>
        <main>
            <form>
                <input type="text" placeholder="Nome de Usuário"/>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirnmar Senha"/>
                <div className="action-buttons">
                    <Button text="Criar Conta"  type='primary'></Button>
                </div>
            </form>
        </main>
            </>
        )
}