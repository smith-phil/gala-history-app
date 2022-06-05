import { styled } from "@mui/material";
import Alert from "@mui/material/Alert/Alert"

/**
 * @property message, the message to display
 * @property onClose, callback to execute when alert closes
 */
interface ErrorAlertProps {
    message:string,
    onClose:()=>void
}

/**
 * 
 * @param props {@link ErrorAlertProps}
 * @returns Alert showing an error 
 */
export const ErrorAlert = (props:ErrorAlertProps) => {
        return (
            <Alert
                severity='error' 
                onClose={e=>props.onClose()}>
                    {props.message}
            </Alert>
        )
}


