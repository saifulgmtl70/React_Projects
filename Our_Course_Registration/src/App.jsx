// import React from 'react';
import { useEffect, useState } from 'react';
import './App.css'
import Course from './components/course';
import './index.css'
import Swal from 'sweetalert2';

Swal



const App = () => {

    const [courses, setCourses] = useState([]);

    const [selectedCourses, setSelectedCourses] = useState([]);

    const [credit, setCredit] = useState(0);

    const [price, setPrice] = useState(0);


    const [remaining, setRemaining] = useState(20);



    const handleSelect = (courseTitle, courseCredit, coursePrice) => {
        setSelectedCourses([...selectedCourses, courseTitle]);


        if(selectedCourses.includes(courseTitle)){
            const updatedSelectedCourse = selectedCourses.filter(
                (title) => title !== courseTitle
            );

            setSelectedCourses(updatedSelectedCourse);
            setRemaining(remaining + courseCredit);
            setCredit(credit - courseCredit);
            setPrice(price - coursePrice);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              });
        }

        else{
            const newRemaining = remaining - courseCredit;
            const newCredit = credit + courseCredit;
            const newPrice = price + coursePrice;
            if(newRemaining < 0 && newCredit > 20){
                Swal.fire({
                    icon: 'Error',
                    title: 'OOOOps...',
                    text:
                      "Ooops Sorry!!!! You can't select any courses as it exceeds the remaining credit limit!",
                  });
            }
            else{
                setSelectedCourses([...selectedCourses, courseTitle])
                setRemaining(newRemaining);
                setCredit(newCredit);
                setPrice(newPrice);
            }
        }

        
        


    }


    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])



    return (


        <section className="bg-gray-100 px-12 py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-28">
                <div className="h-full rounded-lg lg:col-span-2">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24 mb-14">
                        {
                            courses.map(course => <Course key={course.id} course={course} handleSelect={handleSelect}></Course>)
                        }

                    </div>
                </div>



                <div className="h-full rounded-lg mt-14">
                    <div className="bg-white px-10 py-10 mb-6 rounded-md">
                        <h3 className='text-rose-600 font-bold text-xl mb-5'>Credit Hour Remaining: {remaining}  </h3>
                        <hr />
                        <h3 className="text-gray-800 text-2xl font-medium mt-5 mb-4">Courses Name</h3>
                        <ul className="list-decimal text-slate-700 font-bold mb-3 ms-5" >
                            {selectedCourses.map((title, index) => (
                                <li key={index}>{title}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white px-10 py-10 mb-6 rounded-md ">
                        
                        <ul className="list-decimal text-slate-700 font-bold" id="order_list"></ul>
                        <div className="divider"></div> 
                            <ul>
                                <li className="text-slate-900 font-semibold mb-2">Total Credit Hour: {credit} <span id="total_price"></span></li>
                                
                                <li className="text-slate-900 font-semibold mb-2">Total Price: {price} <span id="new_total_price"></span></li>
                            </ul>
                        <div className="divider"></div>
                    </div>
                    
                </div>

            </div>
        </section>



        
        
    );
};

export default App;