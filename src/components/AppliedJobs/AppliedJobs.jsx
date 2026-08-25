import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import getStoredJobApplication from "../../LocalStorage"


const AppliedJobs = () => {
    const jobs = useLoaderData(); 
    
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedIds = getStoredJobApplication();

        if (jobs > 0) {
            const jobApplied = [];
            for (const id of storedIds) {
                const job = jobs.find(job => job.id == id);

                if (job) {
                    jobApplied.push(job)
                }
            }
            setAppliedJobs(jobApplied);
            console.log(jobs, jobApplied, storedIds);
        }
      
    }, [])

   
    return (
        <div>
            <h2>Jobs i have applied: {appliedJobs.length}</h2>
        </div>
    );
};

export default AppliedJobs;