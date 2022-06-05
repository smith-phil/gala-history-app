import { styled } from "@mui/material";
import Alert from "@mui/material/Alert/Alert"

interface ErrorAlertProps {
    message:string,
    onClose:()=>void
}

export const ErrorAlert = (props:ErrorAlertProps) => {
        return (
            <Alert
                severity='error' 
                onClose={e=>props.onClose()}>
                    {props.message}
            </Alert>
        )
}


