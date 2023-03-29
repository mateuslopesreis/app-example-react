import './style.css'
import { Contact } from '../../Types'
import Button from '../Button'
/* type CartaoProps = {
    nome: string,
    email: String   
} */

type ContactCardProps ={
    contactData: Contact
}
export function Cartao({contactData}:ContactCardProps){
const {name,email,picture} = contactData
    return(
    <>
        <div className="cartaoContatos">
            <img src={picture.medium}/>
            <div className='informacoes'>
               <h2>{name.first}</h2>
              <p>{email}</p>
              <Button text='Detalhes' type='primary'/>
             </div>
        </div>
    </>
    )
}