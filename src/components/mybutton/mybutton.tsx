//Miguel Riaño Rojas
import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';
//Declaro la interface del componente.
export interface MyCustomButtonProps{
    text: string; //prop text de tipo string. Es el texto del botón
    txtcolor: string; //prop txtcolor de tipo string. Es el color del texto del botón
    bgcolor:string; //prop bgcolor de tipo string. Es el color del botón
    borderColor:string; //color del borde
    borderWidth?: "small" | "medium" | "large"; //Ancho del borde
    size?: "small" | "medium" | "large"; //prop size. El ? quiere decir que la prop es opcional. Además
    hoverTxtColor:string; //color del texto del boton cuando se pone el raton encima
    hoverColor:string;//color del boton cuando se pone el raton encima
    //le digo los posibles valores. Se entiende que es string.
    disabled?: boolean; //prop disabled. Es opcional y es de tipo boolean
    onClick?: MouseEventHandler<HTMLButtonElement>; //prop onClick opcional y responde al
    //evento de picar el botón
}
//Defino mi componente CustomButton y le digo que las props son las que definí arriba
function CustomButton(props: MyCustomButtonProps){
    //Paso el valor de las props a un objeto:
    const { text, txtcolor, bgcolor, borderColor, borderWidth, size, hoverTxtColor, hoverColor, disabled, onClick } = props
    return(
        //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
        <Button
        type='button'
        onClick={onClick}
        disabled={disabled}
        size={size}
        sx={{backgroundColor: bgcolor, color: txtcolor, borderColor: borderColor, borderWidth: borderWidth, 
            '&:hover': { 
                backgroundColor: hoverColor,  
                color: hoverTxtColor,
            }}}
            >
            {text}
            </Button>
        )
    }
    export default CustomButton;