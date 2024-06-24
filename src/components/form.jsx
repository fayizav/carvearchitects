import React, { useState } from 'react';
import '../styles/form.css';

function Form() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted!');

        // Form data
        const formData = new FormData(e.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Send form data to Formspree
        try {
            const response = await fetch('https://formspree.io/f/xqkrkggg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsFormSubmitted(true);
                // Clear the form fields
                e.target.reset(); // Reset the form
            } else {
                console.error('Form submission failed.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className='main-form'>
            <div className='texts'>
                <h5>MESSAGE</h5>
                <h1>Do You Question <br />Please Contact Us?</h1>
                <p>At Carve Architects, we specialize in transforming innovative and sustainable design concepts into stunning architectural realities. </p>
            </div>
            <div className='forms'>
                <form onSubmit={handleSubmit}>
                    <div className='emailphn'>
                        <input type="email" id="email" name="email" placeholder=" Your Email" required />
                        <input type="tel" id="phone" name="phone" placeholder="Your Phone" required />
                    </div>
                    <input type="text" id="address" name="address" placeholder="Your Address" required />
                    <textarea id="message" name="message" placeholder="Write your message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
                {isFormSubmitted && <p>Your message has been submitted!</p>}
            </div>
        </div>
    );
}

export default Form;