import './predictFloods.css';
import Alert from '../assets/alert.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import axios from 'axios';

export default function PredictFloods() {
    const [alert, setAlert] = useState('n');
    const [formData, setFormData] = useState({
        rainfall: '',
        soilMoisture: '',
        terrainChanges: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handlePredict(e) {
        e.preventDefault();
    
        const data = {
            rainfall: parseFloat(formData.rainfall),
            soilMoisture: parseFloat(formData.soilMoisture),
            terrainChanges: parseFloat(formData.terrainChanges),
        };
    
        console.log("Data being sent:", data); // Log the data
    
        // fetch('http://127.0.0.1:5000/api/predict', {
        fetch('https://geogaurd-ml.onrender.com/api/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((result) => {
            if (result.floodRisk === 'High' || result.landslideRisk === 'High') {
                setAlert('true');
            } else {
                setAlert('false');
            }
        })
        .catch((error) => {
            console.error('Error fetching prediction:', error);
            setAlert('false');
        });
    }
    

    return (
        <div className="predict-main">
            <div className={alert === 'n' ? 'predict-main-in-1' : 'predict-main-in-1-short'}>
                <form className='form' onSubmit={handlePredict}>
                    <input 
                        type="text" 
                        name="rainfall" 
                        placeholder="Rainfall" 
                        value={formData.rainfall}
                        onChange={handleChange} 
                    />
                    <input 
                        type="text" 
                        name="soilMoisture" 
                        placeholder="Soil Moisture" 
                        value={formData.soilMoisture}
                        onChange={handleChange} 
                    />
                    <input 
                        type="text" 
                        name="terrainChanges" 
                        placeholder="Terrain Changes" 
                        value={formData.terrainChanges}
                        onChange={handleChange} 
                    />
                    <button type="submit">Predict</button>
                </form>
            </div>

            {alert === 'true' && (
                <div className="predict-main-in-2">
                    <h2>Flood Risk is High, send Alerts </h2>
                    <div className="alert-border-1">
                        <div className="alert-border-2">
                            <Link to="/services/send-alerts">
                                <img src={Alert} alt="Alert" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {alert === 'false' && (
                <div className="predict-main-in-3">
                    <h1>Safe!!!</h1>
                </div>
            )}
        </div>
    );
}
