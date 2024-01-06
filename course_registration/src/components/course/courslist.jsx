import  { useState } from 'react';

// eslint-disable-next-line react/prop-types
const CourseCard = ({ course, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    if (!isSelected) {
      setIsSelected(true);
      // eslint-disable-next-line react/prop-types
      onSelect(course.course_title);
    }
  };

  return (
    <div className={`course-card ${isSelected ? 'selected' : ''}`}>
      <img src={course.img} alt={course.course_title} />
      <h3>{course.course_title}</h3>
      <button onClick={handleSelect} disabled={isSelected}>
        Select
      </button>
    </div>
  );
};

export default CourseCard;
