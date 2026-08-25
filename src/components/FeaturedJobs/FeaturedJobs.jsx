import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [showJob, setShowJob] = useState(4);

    useEffect(() => {
        fetch("./jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="m-8">
            <div>
                <h1 className="text-center font-bold text-3xl">Featured Jobs : {jobs.length}</h1>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 p-16 gap-10">
                {
                    jobs.slice(0, showJob).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={showJob === jobs.length && 'hidden' || ' '}>
                <button onClick={() => setShowJob(jobs.length)} className="btn btn-primary">Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;