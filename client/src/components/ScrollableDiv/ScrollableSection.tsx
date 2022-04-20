import React from "react";
/* import { DynamicContentStyle } from "../ContentWrapper/ContentWrapperStyle"; */
import { ScrollableSectionStyle } from "./ScrollableDivStyle";


export const ScrollableSection: React.FC<ComponentToWrapProps> = (props) => {
    const { childComp } = props;
    return (
        <ScrollableSectionStyle>
            {childComp}
        </ScrollableSectionStyle>
    )
};