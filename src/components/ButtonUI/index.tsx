import './ButtomStyle.css'
import * as React from 'react';
import Button from '@mui/material/Button';

type ButtonProps = {
    text:string,
    type:'default' | 'primary'
}

export function ButtonUI(props:ButtonProps){
    return(
        <>
         <Button variant="contained">Hello World</Button>
        {/* <button className={`btn-${props.type}`}>{props.text}</button> */}
        </>
    )
}

 export default Button