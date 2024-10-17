import React from "react";
import MiguelRR, { MiguelRRProps } from "../miguelrr";
export default function Example(props: MiguelRRProps){
        return(
                <MiguelRR
                        text={props.text}
                        alignment={props.alignment}
                        color={props.color}
                        bottomMargin={props.bottomMargin}
                        variant={props.variant}
                />
        )
}