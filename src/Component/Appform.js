import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from "react-toastify";
import '../Component_css/Appform.css'
import db from '../Firebase';
import AppTable from './AppTable';
function Appform() {

    const money = 925000293;
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [amount, setAmount] = useState();
    const [update, setUpdate] = useState(money)

    // pushing values to firestore
    // retrieving data
    const submit = (e) => {
        e.preventDefault();
        if (name === " ") {
            alert("aler")
        }
        else {
            db.collection("customersData").add({
                name: name,
                email: email,
                phone: phone,
                amount: amount,
                // id: ids
            }).then((docRef) => {
                toast("Data Successfully Submitted");
                setUpdate(parseInt(update) - parseInt(amount))

            })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        }

    };



    return (
        <>
            <AppTable money={update} />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>Send Money</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate className="needs-validation">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                            <input
                                required
                                className='m-2 hover__'
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={e => { setName(e.target.value) }}
                            />
                            <input
                                required
                                className='m-2 hover__'
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                value={email}
                                onChange={e => { setEmail(e.target.value) }}
                            />
                            <input
                                required
                                className='m-2 hover__'
                                type="number"
                                placeholder="Phone number"
                                autoFocus
                                value={phone}
                                isvalid
                                onChange={e => { setPhone(e.target.value) }}
                            />
                            <input
                                required
                                className='m-2 hover__'
                                type="number"
                                placeholder="Amount"
                                autoFocus
                                value={amount}
                                onChange={e => { setAmount(e.target.value) }}
                            />

                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='close__ btn' onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='submit' className="btn btn-success additional btn" onClick={submit}>
                        Send Money
                    </Button>
                </Modal.Footer>
                <ToastContainer />
            </Modal>
        </>
    )
}

export default Appform; 