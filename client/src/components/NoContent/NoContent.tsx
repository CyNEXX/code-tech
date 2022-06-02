import React from "react";

interface NoContentProps {
    message: string
}

const NoContent: React.FC<NoContentProps> = ({ message }) => {
    return <div>{message}</div>
}

export { NoContent as default }