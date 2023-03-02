import Button from "../../components/Button";
import { Title } from "../../components/Title";

export function Login(){

    return(
        <>
        <header>
             <Title text='login' />
        </header>
        <main>
             <form>
                <input type='email' name="email" placeholder="email"/>
                <input type='password' name="senha" placeholder="password"/>
                <Button text="entrar" type="primary"></Button>
             </form>
        </main>
        </>
    )

}