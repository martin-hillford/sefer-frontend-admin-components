import { Alert } from '../Alert';
import { Overlay } from '../Overlay';
import { ReactNode } from 'react';

export const SavingAlert = (props : { children? : ReactNode, show : boolean, content?: string}) => {
    const { content, children, show } = props;
    if(!show) return null;
    return (
        <Overlay>
            <Alert variant="primary" hide={false} closable={false}>
                {content}
                {children}
            </Alert>
        </Overlay>
    );
};
