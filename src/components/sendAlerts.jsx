import './sendAlerts.css';
import { useState } from 'react';
import axios from 'axios';

export default function SendAlerts() {
    const [inputs, setInputs] = useState(['', '', '', '', '', '']);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (isNaN(value) || value === '') {
            return;
        }

        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);

        if (index < 5 && value !== '') {
            document.getElementById(`input-${index + 1}`).focus();
        }
    };

    const handleKeyUp = (e, index) => {
        const key = e.key.toLowerCase();

        if (key === 'backspace' || key === 'delete') {
            const newInputs = [...inputs];
            newInputs[index] = '';
            setInputs(newInputs);

            if (index > 0) {
                document.getElementById(`input-${index - 1}`).focus();
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const pincode = inputs.join('');

        if (pincode.length !== 6) {
            alert('Pincode must be 6 digits.');
            return;
        }

        try {
            const result = await axios.get(`https://geogaurd-backend.onrender.com/citizen/alert/${pincode}`);
            // const result = await axios.get(`http://localhost:3000/citizen/alert/${pincode}`);
            console.log(result);
        } catch (err) {
            console.error('Error sending alert:', err);
        }
    };

    return (
        <div className="alerts-main">
            <form onSubmit={handleSubmit} className='alert-form'>
                <div className="inputs">
                    {inputs.map((input, index) => (
                        <span key={index} className="input-container">
                            <input
                                id={`input-${index}`}
                                className="input"
                                type="text"
                                inputMode="numeric"
                                maxLength="1"
                                value={input}
                                onChange={(e) => handleChange(e, index)}
                                onKeyUp={(e) => handleKeyUp(e, index)}
                                autoFocus={index === 0}
                            />
                            {index < 5 && <span className="separator">-</span>}
                        </span>
                    ))}
                </div>
                <button type="submit">Push Alerts</button>
            </form>
        </div>
    );
}
