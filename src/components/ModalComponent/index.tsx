import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";

interface ModalComponentProps {
    id: number;
    openModal: boolean;
}
export default function ModalComponent({id, openModal}: ModalComponentProps) {

const [open, setOpen] = useState(openModal);

const handleOpen = () => {
setOpen(true);
};

const handleClose = () => {
setOpen(false);
};

useEffect(()=> {
    // setOpen(openModal)
},[open])
return (
<div>
    <Button onClick={handleOpen}>Open Modal</Button>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
    >
    <div>
        <h2 id="modal-title">Modal Title</h2>
        <p id="modal-description">Modal Content Goes Here</p>
        <Button onClick={handleClose}>Close</Button>
    </div>
    </Modal>
</div>
);
}
