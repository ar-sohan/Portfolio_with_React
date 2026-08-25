import { useLoaderData, useParams } from "react-router-dom";
import JobDetailsBanner from "../JobDetailsBanner/JobDetailsBanner";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { TfiBag } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import saveJobApplication from "../../LocalStorage"

const JobDetails = () => {
    const handleApplyJob = (id) => {
        toast("Application Added");
        saveJobApplication(id);
    }
    const jobs = useLoaderData();
    const { id } = useParams();

    const job = jobs.find(job => job.id == id);

    const { job_description, job_responsibility, educational_requirements, experiences, contact_information, salary, job_title } = job;

    return (
        <div>
            <JobDetailsBanner></JobDetailsBanner>
            <div className="p-12 grid grid-cols-4 ">
                <div className="col-span-3">
                    <p> <span className="font-bold text-xl">Job Description :</span> {job_description}</p>
                    <p> <span className="font-bold text-xl">job Responsibility :</span> {job_responsibility}</p>
                    <p> <span className="font-bold text-xl">Educational Requirements :</span> <br /> {educational_requirements}</p>
                    <p> <span className="font-bold text-xl">Experiences:</span> <br /> {experiences}</p>
                </div>
                <div className="col-span-1">
                    <div>
                        <h2 className="font-bold text-xl ">Job Details</h2>
                        <hr />
                        <div>
                            <p className="flex items-center gap-2"><RiMoneyEuroCircleLine></RiMoneyEuroCircleLine> <span className="font-bold">Salary</span> {salary}</p>
                            <p className="flex items-center gap-2"><TfiBag></TfiBag> <span className="font-bold">Job Title</span> {job_title}</p>
                        </div>
                        <h2>Contact Information</h2>
                        <hr />
                        <div>
                            <p className="flex items-center gap-2"><FaPhoneAlt></FaPhoneAlt> <span className="font-bold">Phone :</span>{contact_information.phone}</p>
                            <p className="flex items-center gap-2"><MdMarkEmailUnread></MdMarkEmailUnread> <span className="font-bold"> Email :</span>{contact_information.email}</p>
                            <p className="flex gap-1"><IoLocationOutline className="text-3xl"></IoLocationOutline> <span className="font-bold"> Address: </span>{contact_information.address}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleApplyJob(id)} className="btn btn-active btn-primary">Apply</button>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;