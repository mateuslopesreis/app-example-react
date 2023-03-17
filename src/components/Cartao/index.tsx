import './style.css'
type CartaoProps = {
    nome: string,
    email: String
    
}


export function Cartao({nome,email}:CartaoProps){

    
    return(
    <>
      
     
<section className="grid">
    <img src={"https://randomuser.me/api/portraits/men/29.jpg"}/>
   <div className='informacoes'>
    {nome}
    {email}
    </div>
</section>


    </>
    )
}