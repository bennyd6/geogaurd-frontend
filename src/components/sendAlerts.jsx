import './sendAlerts.css'
import axios from 'axios'
import { useState } from 'react'

export default function SendAlerts() {
    const [pincode, setPincode] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.get(`http://localhost:3000/citizen/alert/${pincode}`)
            console.log(result)
        } catch (err) {
            console.error('Error sending alert:', err)
        }
    }

    return (
        <div className="alerts-main">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Enter pincode' 
                    value={pincode} 
                    onChange={(e) => setPincode(e.target.value)} 
                />
                <button type="submit">Push Alerts</button>
            </form>
        </div>        
    )
}
