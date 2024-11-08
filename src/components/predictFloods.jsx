import './predictFloods.css';
import { Slide } from 'react-awesome-reveal';
import Alert from '../assets/alert.png';
import { Link } from 'react-router-dom';

export default function PredictFloods() {
    return (
        <div className="predict-main">
            <div className="predict-main-in-1">
                <input type="text" name="rain-fall" placeholder="Rainfall" />
                <input type="text" name="soil-moisture" placeholder="Soil Moisture" />
                <input type="text" name="terrain-changes" placeholder="Terrain Changes" />
            </div>
            {/* <Slide direction='right' duration={1000}> */}
                <div className="predict-main-in-2">
                    <div className="alert-border-1">
                        <div className="alert-border-2">
                            <Link to='send-alerts'>
                                <img src={Alert} alt="Alert" />
                            </Link>
                        </div>
                    </div>
                </div>
            {/* </Slide> */}
        </div>
    );
}
