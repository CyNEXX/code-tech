import styled from "styled-components";

export const ContextualLoadingStyle = styled.div`

    /**
     * ==============================================
    * Dot Windmill
    * ==============================================
    */
     &{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 2rem 0;
        margin: 3rem -5%;
        overflow: hidden;
        height: 100%;
    }

    .dot-windmill {
        position: relative;
        width: var(--contextual-loading-subelement-width);
        height: var(--contextual-loading-subelement-height);
        border-radius: var(--contextual-loading-border-radius);
       /*  background-color: var(--color-green-bright); */
       background-color: var(--color-whitish-green);
        color: var(--color-green-bright);
        transform-origin: var(--contextual-loading-newoffset-x) var(--contextual-loading-newoffset-y);
        box-shadow: var(--full-green-glow);
        animation: dotWindmill 10s infinite linear;
    }

    .dot-windmill::before, .dot-windmill::after {
    content: '';
        display: inline-block;
        position: absolute;
    }

    .dot-windmill::before {
        left: var(--contextual-loading-new-left-before);
        top: var(--contextual-loading-height);
        width: var(--contextual-loading-subelement-width);
        height: var(--contextual-loading-subelement-height);
        border-radius: var(--contextual-loading-border-radius);
        /* background-color: var(--color-green-bright); */
        background-color: var(--color-whitish-green);
        color: var(--color-green-bright);
        box-shadow: var(--full-green-glow);
    }

    .dot-windmill::after {
        left: var(--contextual-loading-new-left-after);
        top: var(--contextual-loading-height);
        width: var(--contextual-loading-subelement-width);
        height: var(--contextual-loading-subelement-height);
        border-radius: var(--contextual-loading-border-radius);
        /* background-color: var(--color-green-bright); */
        background-color: var(--color-whitish-green);
        color: var(--color-green-bright);
        box-shadow: var(--full-green-glow);
    }

    @keyframes dotWindmill {
        0% {
            transform: rotateZ(0deg) translate3d(0, 0, 0);
        }
        100% {
            transform: rotateZ(720deg) translate3d(0, 0, 0);
        }
    }
`;