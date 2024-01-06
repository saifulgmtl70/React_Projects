const getStoredJobApplication = () =>{
    const storedApplication = localStorage.getItem('Job-Applications');
    if(storedApplication){
        return JSON.parse(storedApplication);
    }
    return [];
}


const saveJobApplication = (id) =>{
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('Job-Applications', JSON.stringify(storedJobApplications));
    }
}

export {saveJobApplication, getStoredJobApplication}