import React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import DetailsTable from "./Component/DetailsTable";
const fetchJobs = () => {
  return Axios.get(`http://localhost:3000/jobs`);
};

function Details() {
  const params = useParams();
  const [jobs, setJobs] = React.useState([]);
  const [isProtected, setIsProtected] = React.useState(false);
  const [lastBackUpTime, setLastBackUpTime] = React.useState(null);
  const [averageTimeTaken, setAverageTimeTaken] = React.useState(null);
  React.useEffect(() => {
    fetchJobs().then(({ data }) => {
      const filterData = data.filter(
        (server) => server.fileServerId == params.id
      );
      setJobs(filterData);
      const jobCompleted = filterData.filter(
        (data) => data.status === "Completed"
      );
      setIsProtected(jobCompleted.length !== 0);
      setLastBackUpTime(
        jobCompleted.sort((a, b) => -a.endTime + b.endTime)[0]?.endTime
      );
      console.log(filterData);
    });
  }, []);
  console.log(lastBackUpTime);
  return (
    <div>
      <div>Details</div>
      <p>ID:{params.id}</p>
      <p>Name:{params.name}</p>
      <p>IP Address:{params.ipAddress}</p>
      <p>Operating System:{params.operatingSystem}</p>
      <p>Software Version:{params.softwareVersion}</p>
      <p>Protected: {isProtected.toString()}</p>
      <p>Last Backuptime:{lastBackUpTime}</p>
      <p>Average Time Taken:{averageTimeTaken}</p>
      <DetailsTable jobs={jobs} />
    </div>
  );
}

export default Details;
