import React, { useState } from 'react';

function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const loadingStatements = [
        'Waiting...',
        'Please wait...',
        'Almost there...',
        'Maybe...',
        'We are taking a bit, but it might work soon...',
    ];

    const getRandomLoadingStatement = () => {
        const randomIndex = Math.floor(Math.random() * loadingStatements.length);
        return loadingStatements[randomIndex];
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSend = () => {
        setError('');

        // Validate name (at least two words)
        if (name.trim().split(' ').length < 2) {
            setError('Error in one of the fields');
            return;
        }

        // Validate email (ending in "edu")
        if (!email.trim().toLowerCase().endsWith('edu')) {
            setError('Error in one of the fields');
            return;
        }

        // Validate message (no more than 10 characters)
        if (message.length > 10) {
            setError('Error in one of the fields');
            return;
        }

        // Simulate loading for 10 seconds
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsModalOpen(false);
        }, 10000);
    };

    return (
        <div id="Contact" className="pb-24">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">Contact Us</h1>
            <p className="text-gray-600">Click the button to contact us!</p>
            <button
                onClick={handleOpenModal}
                className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700"
            >
                Contact Us
            </button>

            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg text-center">
                        <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
                        <input
                            type="text"
                            className="w-full p-2 rounded-md border border-gray-300 mb-4"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            className="w-full p-2 rounded-md border border-gray-300 mb-4"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            className="w-full p-2 rounded-md border border-gray-300 mb-4"
                            placeholder="Message"
                            rows="4"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            className={`${isLoading
                                ? 'cursor-wait'
                                : 'bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700'
                                }`}
                            onClick={handleSend}
                            disabled={isLoading}
                        >
                            {isLoading ? getRandomLoadingStatement() : 'Send'}
                        </button>
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contact;
