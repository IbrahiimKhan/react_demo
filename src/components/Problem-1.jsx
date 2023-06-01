import React, { useState } from 'react';
import { useEffect } from 'react';
import "../style.css"

const Problem1 = () => {
    //states
    const [show, setShow] = useState('all');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [items, setItems] = useState([]);

    //handling click
    const handleClick = (val) => {
        setShow(val);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            alert('Name is required');
            return;
        }
        if (!status) {
            alert('Status is required');
            return;
        }

        const newItem = { name, status };
        setItems([...items, newItem]);
        setName('');
        setStatus('');
    };

    const statusOrder = {
        active: 1,
        complete: 2,
        pending: 3,
    };
    //filtering element
    const filteredItems = items.filter((item) => show === 'all' || show === item.status);
    //sorting elements
    const sortedItems = filteredItems.sort((a, b) => a.status.localeCompare(b.status))
    console.log("sortedArr", sortedItems)

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                type="text"
                                className="form-control"
                                placeholder="Name"
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                onChange={(e) => setStatus(e.target.value)}
                                value={status}
                                type="text"
                                className="form-control"
                                placeholder="Status"
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === 'all' && 'active'}`}
                                type="button"
                                onClick={() => handleClick('all')}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === 'active' && 'active'}`}
                                type="button"
                                onClick={() => handleClick('active')}
                            >
                                Active
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === 'completed' && 'active'}`}
                                type="button"
                                onClick={() => handleClick('completed')}
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
