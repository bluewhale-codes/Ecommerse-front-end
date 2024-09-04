import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MainAlert = (props) => {
  return (
          <>
       
    <div className={props.alert ? `alert-active alert-box` : `alert-box`}>
         <Stack sx={{ width: '100%' }} spacing={2}>
              {props.alert && <Alert ariant="filled" severity={props.alert.type}>
                <>
                {props.alert && <strong>{props.alert.msg}</strong>}
                </>
                </Alert>}
                </Stack>
                </div>
            
            </>
  )
}

export default MainAlert