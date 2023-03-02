import Button from '../../components/Button'
import { Title } from '../../components/Title'
/* import {} from 'phosphor-react' */


export function Home(){

    return(
    <>
        <header>
                <Title text='Bem vindo'/>
        </header>
            <main>
                 <div className="action-buttons">
                    <Button text='Login' type='primary' />
                    <Button text='Cadastro' type='default'/>
                    <Button text='Luffy' type='primary'/>
                    
                </div>
             </main>
    </>
    )

}