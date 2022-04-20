import React from "react";
import { ContextualLoadingStyle } from "./ContextualLoadingStyle";


export const ContextualLoading: React.FC<{}> = () => {

    return (
        <ContextualLoadingStyle className="stage filter-contrast">
            <div className="dot-windmill "></div>
        </ContextualLoadingStyle>
    )
}