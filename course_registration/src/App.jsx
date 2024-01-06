import Course from './components/course';
import './App.css'
import './index.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const App = () => {

    const [courses, setCourses] = useState([]);

    const [selectedCourses, setSelectedCourses] = useState([]);

    const [credit, setTotalCredit] = useState(0);
    const [price, setTotalPrice] = useState(0);
    

    const [remaining, setRemaining] = useState(20);


    const handleSelect = (courseTitle, courseCredit, coursePrice) => {
        setSelectedCourses([...selectedCourses, courseTitle]);

        if (selectedCourses.includes(courseTitle)) 
        {

            const updatedSelectedCourses = selectedCourses.filter(
              (title) => title !== courseTitle
              
            );
            
            setSelectedCourses(updatedSelectedCourses);
            setRemaining(remaining + courseCredit);
            setTotalCredit(credit - courseCredit);
            setTotalPrice(price - coursePrice);
            Swal.fire({
                icon: 'Error',
                title: 'OOOOps...',
                text:
                  "Ooops Sorry!!!! You can't select same course for twice",
              });
        } 

        else 
        {
            const newRemaining = remaining - courseCredit;
            const resultCredit = credit + courseCredit;
            const resultPrice = price + coursePrice;
        
            if (newRemaining < 0 && resultCredit > 20) {

              Swal.fire({
                icon: 'Error',
                title: 'OOOOps...',
                text:
                  "Ooops Sorry!!!! You can't select any courses as it exceeds the remaining credit limit!",
              });
            }
            else {

            //   setSelectedCourses([...selectedCourses, courseTitle]);
              setRemaining(newRemaining);
              setTotalCredit(resultCredit);
              setTotalPrice(resultPrice);
            }
        }

      };

    useEffect(() => {
        fetch("course.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])


    return (
        <section className='mx-auto bg-gray-100 px-12 py-16 font-rubik '>
            <h2 className='text-center text-5xl text-slate-900 mb-12 font-bold'>Course Registration</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-28">
                <div className="h-full  rounded-lg sm:mx-auto md:mx-auto lg:col-span-2">
                    <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 lg:gap-24 mb-14'>

                        {
                            courses.map(course => <Course key={course.id} course={course} handleSelect={handleSelect} ></Course>)
                        }

                    </div>
                </div>

                <div className="h-full rounded-lg order-first lg:order-last">
                    <div className="bg-slate-50 px-10 py-10 mb-6 rounded-md ">
                        <h2 className='text-rose-500 font-bold text-2xl mb-3'>Credit Our Remaining: {remaining} hr </h2>
                        <hr /> 

                        <h3 className='text-slate-800 text-xl font-bold mt-3 mb-4'>Course Name</h3>
                        <ul className="list-decimal text-slate-700 font-bold mb-3 ms-5" >
                            {selectedCourses.map((title, index) => (
                                <li key={index}>{title}</li>
                            ))}
                        </ul>
                        <hr />
                        <h4 className='text-slate-700 text-lg mt-3 mb-4'>Total Credit Hour:{credit} </h4>
                        <hr />
                        <h4 className='text-slate-700 text-lg mt-3 mb-4'>Total Price: {price}USD </h4>
                            
                    </div>
                </div>
            </div>
        </section>
    );
};

export default App;