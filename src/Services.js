import React from 'react';

function Services() {
    return (
        <div id='Services' className="p-4">
            <h1 className="text-3xl font-bold mb-4">Our Tutoring Services</h1>

            <div className="mb-6">
                <h2 className="text-xl font-semibold">Math Tutoring</h2>
                <p>
                    Our experienced math tutors can help with everything from basic
                    arithmetic to advanced calculus. Whether you're struggling or want to
                    excel, we've got you covered.
                </p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold">Science Tutoring</h2>
                <p>
                    Need help with physics, chemistry, or biology? Our science tutors are
                    here to simplify complex concepts and make learning fun.
                </p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold">Language Tutoring</h2>
                <p>
                    Learning a new language or improving your English? Our language
                    tutors offer personalized lessons to boost your skills and confidence.
                </p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold">Test Prep</h2>
                <p>
                    Get ready for standardized tests like the SAT and ACT with our expert
                    test prep tutors. Boost your scores and open doors to your dream
                    colleges.
                </p>
            </div>
        </div>
    );
}

export default Services;
