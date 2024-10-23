//Miguel Riaño Rojas
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { MouseEventHandler } from 'react';

export interface MyFavouriteProps{
    iconColor: "disabled" | "action" | "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning"; //Color del icono
    disabled?: boolean; //Desabilitado?
    onClick?: MouseEventHandler<HTMLButtonElement>; //Evento al hacer click
}
//Definicion del componente
function MyFavourite(props: MyFavouriteProps){
    //Paso el valor de las props
    const {iconColor, disabled, onClick} = props
    return(
        //Personalizo el componente
        <IconButton disabled={disabled} onClick={onClick}>
            <FavoriteIcon color={iconColor}/>
        </IconButton>
    )
}
export default MyFavourite;