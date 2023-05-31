import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomModal from './CustomModal';
import "../style.css"
CustomModal
const Problem2 = () => {
    const navigate = useNavigate()
    const [contacts, setContacts] = useState([])
    const [usaContacts, setUsaContacts] = useState([])
    const [selectedButton, setSelectedButton] = useState(null);

    async function getContactList() {
        try {
            const response = await fetch('https://contact.mediusware.com/api/contacts/')
            const data = await response.json();
            setContacts(data.results)
            // console.log(data, "data");

        } catch (error) {
            console.error(error);
        }
    }

    async function getContactListByCountry() {
        try {
            const response = await fetch('https://contact.mediusware.com/api/country-contacts/United%20States/')
            const data = await response.json();
            setUsaContacts(data.results)
            // console.log(data, "data");

        } catch (error) {
            console.error(error);
        }
    }

    const handleAllContactsClick = () => {
        setSelectedButton('all');
        navigate('/all');
    };

    const handleUsContactsClick = () => {
        setSelectedButton('usa');
        navigate('/usa');
    };

    useEffect(() => {

        getContactList()
        getContactListByCountry()

    }, [selectedButton])
    useEffect(() => {
        if (selectedButton === 'all') {
            navigate('/all');
        } else if (selectedButton === 'usa') {
            navigate('/usa');
        }
    }, [selectedButton, navigate]);

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button
                        data-toggle="modal"
                        data-target="#exampleModal"
                        className="btn btn-lg button_1 btn-outline-primary"
                        type="button"
                        onClick={handleAllContactsClick}
                    >
                        All Contacts
                    </button>
                    <button
                        data-toggle="modal"
                        data-target="#exampleModal"
                        className="btn button_2 btn-lg btn-outline-warning"
                        type="button"
                        onClick={handleUsContactsClick}
                    >
                        US Contacts
                    </button>
                    <CustomModal allcontacts={contacts} usContact={usaContacts} status={selectedButton} />
                </div>
            </div>
        </div>
    );
};

export default Problem2;