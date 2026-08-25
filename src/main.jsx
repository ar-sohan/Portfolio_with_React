import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistic from './components/Statistic/Statistic';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';
import Work from './components/Work/Work';
import Experience from './components/Experience/Experience';
import Skill from './components/Skill/Skill';
import Achievement from './components/Achievement/Achievement';
import Qualification from './components/Qualification/Qualification';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/work",
        element: <Work></Work>
      },
      {
        path: "/experience",
        element: <Experience></Experience>
      },
      {
        path: "/skill",
        element: <Skill></Skill>
      },
      {
        path: "/achievement",
        element: <Achievement></Achievement>
      },
      {
        path: "/qualification",
        element: <Qualification></Qualification>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
