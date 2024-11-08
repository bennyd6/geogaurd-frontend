import { Link } from 'react-router-dom';
import './services.css'
import { Slide } from 'react-awesome-reveal';
function Services() {
    return(
      <>
      <div className="services-main">
        <Slide direction='up' duration={1000}>
        <div className="serv-card">
          <Link to='predict-floods'>Predict Floods</Link>
        </div>
        </Slide >
        <Slide direction='up' duration={1500}>
        <div className="serv-card">
          <Link to='predict-landslides'>Predict Land Slides</Link>
        </div>
        </Slide>
        <Slide direction='up' duration={2000}>
        <div className="serv-card">
          <Link to='push-alerts'>Push Custom Alerts</Link>
        </div>
        </Slide>
      </div>
      </>
    )
  }
  export default Services;