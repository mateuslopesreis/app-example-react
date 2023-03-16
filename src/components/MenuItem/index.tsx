import { User } from 'phosphor-react'
import './style.css'
type MenuItemProps = {
    icon:React.ReactNode
    text: String
}
export function MenuItem({icon,text}:MenuItemProps){
    return(
        <>
            <a href="#" className="menuItem">
                {icon}{text}
            </a>
        </>
    )
}