import React, { useEffect, useState } from 'react';
import "../style.css"
const CustomModal = ({ allcontacts, usContact, status }) => {
    const [singleItem, setSingleItem] = useState()
    const [inputval, setInputval] = useState("")
    const [checked, setChecked] = useState(false)
    const [selectedBtn, setselectedBtn] = useState(null)


    const handlesingleContact = (item) => {
        setSingleItem(item)
    }
    console.log("single item", singleItem)



    useEffect(() => {
        setselectedBtn(status)
    }, [])
    useEffect(() => {
        setselectedBtn(status)
    }, [status])

    //filtered data

    const contactBasedOnStatus = selectedBtn === "all" ? allcontacts : usContact
    let filteredContactList = contactBasedOnStatus.filter((contact) => contact.phone.toLowerCase().includes(inputval.toLocaleLowerCase()))

    const filteredByEven = filteredContactList.filter((contact) => Number(contact.id) % 2 === 0)

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{selectedBtn == "all" ? "Modal A" : "Modal B"}</h5>

                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <input type="text"
                                    value={inputval}
                                    onChange={(e) => setInputval(e.target.value)}
                                    className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">Search</span>
                                </div>
                            </div>
                            <div style={{ marginBottom: "20px" }}>
                                <button type="button" className="btn button_1 btn-secondary me-3"

                                    onClick={() => setselectedBtn("all")}
                                >All Contacts</button>
                                <button type="button"

                                    onClick={() => setselectedBtn("usa")}
                                    className="btn button_2 btn-secondary me-3">US Contacts</button>
                                <button type="button " onClick={() => setInputval("")} className="btn  close btn-secondary m3-3" data-dismiss="modal">Close</button>
                            </div>

                            <ul className="list-group">
                                {checked && filteredByEven.map((contact) => (
                                    <li onClick={() => handlesingleContact(contact)}
                                        data-toggle="modal" data-target="#exampleModal1"
                                        className='list-group-item' style={{ cursor: "pointer" }} key={contact.id}> Phone: {contact.phone} Id: {contact.id} </li>

                                ))}
                                {!checked && filteredContactList.map((contact) => (
                                    <li onClick={() => handlesingleContact(contact)}
                                        data-toggle="modal" data-target="#exampleModal1"
                                        className='list-group-item' style={{ cursor: "pointer" }} key={contact.id}> Phone: {contact.phone} Id: {contact.id} </li>

                                ))}
                            </ul>




                            <div className="modal modal1 fade" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel1">Single Contact View</h5>

                                        </div>
                                        <div className="modal-body">
                                            {singleItem && (<>
                                                <li className='list-group-item'>Id: {singleItem.id}</li>
                                                <li className='list-group-item'>Phone: {singleItem.phone}</li>
                                                <li className='list-group-item'>Country: {singleItem.country.name}</li>
                                            </>)}
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <div className="form-check">
                                <input
                                    onChange={() => setChecked(!checked)}
                                    className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Checkbox A
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomModal;
