import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Job = ({ job }) => {

    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='gap-3 flex'>
                    <div>
                        <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
                    </div>
                    <div>
                        <button className="btn btn-outline btn-primary">{job_type}</button>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='flex items-center gap-1'>
                        <img src="/icons/location2.png" alt="" />
                        <p>{location}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src="/icons/location2.png" alt="" />
                        <p>{salary}</p>
                    </div>
                </div>
                <div className="card-actions justify-start">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object,
}
export default Job;