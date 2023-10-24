import React from 'react';

function Home() {
    return (
        <div id='Home' className="bg-cover h-screen flex items-center justify-center" style={{ backgroundImage: 'url("https://cdn2.momjunction.com/wp-content/uploads/2014/12/5abrjsr19smrha8h5eqx.jpeg")' }}>
            <div className="bg-white p-10 rounded-lg text-center shadow-2xl shadow-rose-600 ">
                <h1 className="text-4xl text-blue-600 mb-4">Welcome to Our World</h1>
                <p className="text-gray-800 text-lg mb-6">
                    Discover the magic of learning and maybe reach your potential!
                </p>
                <button className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-green-700">
                    Click here to start your journey!
                </button>
            </div>
        </div>
    );
}

export default Home;
