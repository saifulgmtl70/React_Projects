import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer p-10 ">
        <aside>
          <img src="https://i.ibb.co/pWCp8ss/Screenshot-1-removebg-preview.png" alt="" className='w-56' />
          <h2 className='text-3xl font-bold mb-3'>EduTrainX Ltd</h2>
          <p className='text-lg text-slate-400'>Providing reliable Educational and Trainuing Courses</p>
        </aside> 
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Course</a> 
          <a className="link link-hover">Training</a> 
          <a className="link link-hover">Motivation</a> 
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Webinar</a> 
          <a className="link link-hover">FAQ</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

  
    );
};

export default Footer;