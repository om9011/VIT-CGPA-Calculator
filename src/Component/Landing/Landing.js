import React from 'react'
import "./Landing.css"
import Typewriter from 'typewriter-effect';
import Card from '../Propertise-Card/Card';

const Landing = () => {
    const startTyping = (typewriter) => {
        typewriter
            .typeString("I'm here to Calculate Your CGPA")
            .callFunction(() => {
                console.log('String typed out!');
            })
            .pauseFor(200)
            .deleteAll()
            .callFunction(() => {
                // Start typing again after deleting
                startTyping(typewriter);
            })
            .start();
    };

    const Features = [
        {
            heading: "CGPA Calculator",
            body: "Calculate CGPA Based on your Previous SGPA Score"
        },
        {
            heading: "Attendance Calculator",
            body: "Calculate your attendance based on Present Days"
        },
        {
            heading: "SGPA Calculator",
            body: "Calcualte SGPA on Credit Points"
        },
        {
            heading: "Grade Predictor",
            body: "Check to How to get your Desire CGPA"
        }
    ]

    return (
        <div className='Landing'>
            <div className='Landing-overlay' />
            <section className='Landing-content'>
                <div className='Landing-logo'>
                    <h1>
                        Highly <br />Distinguished <br />
                        Courses
                    </h1>
                    <p>
                        <Typewriter
                        options={{
                            loop: true,
                        }}
                            
                            onInit={(typewriter) => {
                                startTyping(typewriter);
                            }}
                        />
                    </p>
                    
                </div>
                <div className='Landing-diagram Landing-logo'>
                    <div className='outer-1'>
                        <h2 className='inner-1'>OS</h2>
                        <h2 className='inner-1' style={{ left: "27pc" }} >JS</h2>

                    </div>
                    <div className='outer-2'>
                        <h2 className='inner-2'>CN</h2>
                        <h2 className='inner-2' style={{ left: "40px" }}>DT</h2>
                    </div>
                    <div className='outer-3'>
                        <h2 className='inner-3'>DB</h2>
                    </div>
                    <div className='outer-4'>
                        <h2 className='inner-4'>IoT</h2>
                        <h2 className='inner-4' style={{ left: "-1pc" }}>AI</h2>
                    </div>
                    <div className='outer-5'>
                        <h2 className='inner-5'>VIT</h2>
                    </div>
                </div>
            <div className='Landing-overlay' />
            </section>
            <section className='landing-options'>
                <div className="card-container">
                    {Features.map((Feature) => (
                        <Card key={Feature.heading} heading={Feature.heading} body={Feature.body} />
                    ))}
                </div>
            </section>
        </div>
    )
}


export default Landing;