import { Alert } from '../Alert';
import { Navigate } from "../Navigate";
import { Overlay } from '../Overlay';
import { ReactNode, useState } from 'react';

interface Props {
    redirect? : string,
    variant? : 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'selected',
    children? : ReactNode,
    content?: string,
    onClosed? : () => void
    show: boolean
}

export const SavedAlert = (props : Props) => {
    const { variant, redirect, content, onClosed, children, show } = props;
    const [closed, setClosed] = useState(false);

    if(!show) return null;
    if (closed && redirect) return <Navigate to={redirect} />;

    const onClosedHandler = () => {
        setClosed(true);
        if (onClosed) onClosed();
    };

    return (
        <Overlay>
            <Alert variant={variant ?? 'success'} hide="auto" closable timeout={2500} onClosed={onClosedHandler}>
                {content}
                {children}
            </Alert>
        </Overlay>
    );
};
