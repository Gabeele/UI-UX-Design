import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSpock, faInfo, faEnvelope, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';



function Navbar() {
    return (
        <nav className="bg-blue-600 text-white py-3 fixed w-full bottom-0">
            <ul className="flex justify-between items-center mx-4 ">
                <li className="text-2xl">
                    <a href='#Home'>
                        <img
                            src={process.env.PUBLIC_URL + '/TutorMe.png'}
                            alt="Logo"
                            width={50}
                            height={50}
                        ></img>
                    </a>
                </li>
                <li className="mr-4">
                    <a href='#Home'>
                        <FontAwesomeIcon icon={faHandSpock} />{' '}
                        Welcome
                    </a>
                </li>
                <li className="mr-4">
                    <a href='#Services'>
                        <FontAwesomeIcon icon={faInfo} />{' '}
                        The things that we do            </a></li>

                <li className="mr-4">
                    <a href='#AboutUs'>
                        <FontAwesomeIcon icon={faPeopleGroup} />{' '}
                        Who are we?
                    </a></li>
                <li className="mr-4">
                    <a href='#Contact'>
                        <FontAwesomeIcon icon={faEnvelope} />{' '}
                        Ring us up!
                    </a>
                </li>
            </ul>
        </nav >
    );
}

export default Navbar;
