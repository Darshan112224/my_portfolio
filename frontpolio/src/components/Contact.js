import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '+91',
        phoneNumber: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Sending data:', formData);
        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            console.log('Response status:', res.status);
            const data = await res.json();
            console.log('Response data:', data);

            if (res.ok) {
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    countryCode: '+91',
                    phoneNumber: '',
                    message: ''
                });
            } else {
                const errorData = await res.json();
                alert(`Error: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error sending data:', error);
            alert('Failed to send message');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-heading">Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                />

                {/* Phone Number with Country Code */}
                <div className="phone-input">
                    <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        required
                    >
                        <option value="+1">+1 (USA)</option>
                        <option value="+91">+91 (India)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+61">+61 (Australia)</option>
                        <option value="+81">+81 (Japan)</option>
                    </select>
                    <input
                        type="number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        required
                    />
                </div>

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                ></textarea>
                <button type="submit" className="btn-submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
