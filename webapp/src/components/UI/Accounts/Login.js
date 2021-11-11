import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '10px solid #145DA0',
  boxShadow: 24,
  p: 6,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const [action, setAction] = React.useState('')
  const handleLoginOpen = () => {
    setOpen(true);
    setAction('login');
  }
  const handleRegisterOpen = () => {
    setOpen(true);
    setAction('register');
  }
  const handleClose = ()=>{ setOpen(false) }

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleRegisterOpen}>Register</Button>
        <Button variant="contained" onClick={handleLoginOpen}>Login</Button>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          {action === 'login'
            ? <LoginForm close={handleClose}/>
            : <RegisterForm close={handleClose}/>}
        </Box>
      </Modal>
    </>
  );
}
