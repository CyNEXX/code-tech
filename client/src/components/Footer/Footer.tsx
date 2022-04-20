import React from "react";
import { FooterStyle } from "./FooterStyle";

export const Footer: React.FC<FooterProps> = (props) => {
    return <FooterStyle>
        <h4>
            {props.textData}
        </h4>
    </FooterStyle>
}