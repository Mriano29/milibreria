import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { MouseEventHandler } from 'react';

export interface MyFavouriteBorderProps{
    iconColor: "disabled" | "action" | "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning"; //Color del icono
    disabled?: boolean; //Desabilitado?
    onClick?: MouseEventHandler<HTMLButtonElement>; //Evento al hacer click
}
//Definicion del componente
export default function MyFavouriteBorder(props: MyFavouriteBorderProps){
    //Paso el valor de las props
    const {iconColor, disabled, onClick} = props
    return(
        //Personalizo el componente
        <IconButton disabled={disabled} onClick={onClick}>
            <FavoriteBorderIcon color={iconColor}/>
        </IconButton>
    )
}