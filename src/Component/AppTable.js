
import React, { useEffect, useState } from 'react'
import '../Component_css/table.css'
import { Link } from 'react-router-dom'
import Header from './Header'
import Button from 'react-bootstrap/Button';
import db from '../Firebase';

function AppTable({ money = 925000293 }) {
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

    const deleteData = (id) => {
        db.collection("customersData").doc(id).delete();
    };

    return (
        <>
            <Header />
            <div className='back_over'>
                <div className="my-info text-center">
                    <h2>Account Holder Name: Shivansh Verma</h2>
                    <h5>Net Bank Balance: <span id="myAccountBalance">₹{money}</span></h5>
                    <Link to="/sendmoney">
                        <button className="btn btn-info" data-toggle="modal" data-target="#sendMoney">Send Money</button>
                    </Link>
                    <Link className="btn btn-info" to="/transaction" data-toggle="modal" data-target="#transactionHistory">See All Transactions</Link>
                </div>
                <div className="container">
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered p-2">
                            <thead>
                                <tr className="table-primary">
                                    <th scope="col">S.NO</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile no.</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            {
                                customersData.map(({ id, data }) => {
                                    return (
                                        <tbody key={id}>
                                            <tr className="table-info">
                                                <th scope="row" className='p-3'>{id}</th>
                                                <td className='p-3'>{data.name}</td>
                                                <td className='p-3'>{data.email}</td>
                                                <td className='p-3'>{data.phone}</td>
                                                <td className='p-3'>{data.amount}</td>
                                                <Button
                                                    className="btn addditional btn p-3"
                                                    onClick={() => {
                                                        deleteData(id);
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </table>
                    </div>

                </div>

            </div>

        </>
    )
}

export default AppTable