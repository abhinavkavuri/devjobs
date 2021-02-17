import { Link } from 'react-router-dom';
import './Card.css';
import dummy from '../static/dummy.png'

const Card = ({ job }) => {
    console.log(job)
    return (
        <Link className="Card" to={`/job/${job.id}`}>
            <div className="JobLogo">
                <img src={job.company_logo || dummy} alt="logo"/>
            </div>
            <div className="JobContent">
                <p className="JobTime">{job.created_at}</p>
                <div className="spacer-dot"></div>
                <p className="JobType">{job.type}</p>
            </div>
            <h3 className="JobTitle">{job.title}</h3>
            <p className="JobCompany">{job.company}</p>
            <p className="JobLocation">{job.location}</p>
        </Link>
        
    );
};

export default Card;
