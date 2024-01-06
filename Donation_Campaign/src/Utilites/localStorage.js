const getStoredDonationAppl = () =>{
    const storedAppl = localStorage.getItem('Job-Applications');
    if(storedAppl){
        return JSON.parse(storedAppl);
    }
    return [];
}


const saveDonationAppl = (id) =>{
    const storedDonationAppl = getStoredDonationAppl();
    const exists = storedDonationAppl.find(donationId => donationId === id);
    if(!exists){
        storedDonationAppl.push(id);
        localStorage.setItem('Job-Applications', JSON.stringify(storedDonationAppl));
    }
}

export {saveDonationAppl, getStoredDonationAppl}