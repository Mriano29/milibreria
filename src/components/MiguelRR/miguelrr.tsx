import Typography from '@mui/material/Typography';

export interface MiguelRRProps{
    text: string; //texto
    alignment: "center"| "inherit" | "justify" | "left" | "right"; //Alineacion del componente
    color: "primary" | "secondary" | "success" | "error" | "info" | "error" | "info" | "warning" | "textPrimary" | "textSecondary" | "textDisabled"; //Color del texto
    bottomMargin?: boolean; //Subrayado
    variant: "body1" | "body2" | "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "overline" | "subtitle1" | "subtitle2"; //Tipo del texto
}

//Definicion del componente
 function MiguelRR(props: MiguelRRProps){
    //Paso el valor de las props
    const {text, alignment, color, bottomMargin, variant} = props
    return(
        //Personalizo el componente
        <Typography 
        align={alignment}
        color={color}
        gutterBottom={bottomMargin}
        variant={variant}
        >
        {text}
        </Typography>
    )
}

export default MiguelRR;