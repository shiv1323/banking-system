import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AppTable from './AppTable';
import db from '../Firebase';

function ShowTransaction() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const [customersData, setCustomersData] = useState([]);

    useEffect(() => {
        db.collection("customersData").onSnapshot((snapshot) => {
            setCustomersData(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
    }, []);
    return (
        <>
            <AppTable />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Transaction History</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button style={{ border: "none", backgroundColor: "transparent", color: "red" }} onClick={handleClose}>
                        Close
                    </Button>
                    <div className="container">
                        <div className="table-responsive">
                            <table className="table table-hover table-bordered p-2">
                                <thead>
                                    <tr className="table-primary">
                                        <th scope="col">S.NO</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                </thead>
                                {
                                    customersData.map(({ id, data }) => {
                                        return (
                                            <tbody key={id}>
                                                <tr className="table-info">
                                                    <th scope="row" className='p-3'>{id}</th>
                                                    <td className='p-3'>{data.name}</td>
                                                    <td className='p-3'>{data.amount}</td>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                }
                            </table>
                        </div>

                    </div>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ShowTransaction