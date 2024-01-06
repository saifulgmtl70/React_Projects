import { number } from 'prop-types';
import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';

const LineChart = () => {

    const studentMarksData = [
        {
          "id": 1,
          "studentName": "Student 1",
          "mathMarks": 85,
          "physicsMarks": 78,
          "chemistryMarks": 92
        },
        {
          "id": 2,
          "studentName": "Student 2",
          "mathMarks": 78,
          "physicsMarks": 85,
          "chemistryMarks": 90
        },
        {
          "id": 3,
          "studentName": "Student 3",
          "mathMarks": 92,
          "physicsMarks": 88,
          "chemistryMarks": 75
        },
        {
          "id": 4,
          "studentName": "Student 4",
          "mathMarks": 88,
          "physicsMarks": 92,
          "chemistryMarks": 79
        },
        {
          "id": 5,
          "studentName": "Student 5",
          "mathMarks": 75,
          "physicsMarks": 80,
          "chemistryMarks": 88
        },
        {
          "id": 6,
          "studentName": "Student 6",
          "mathMarks": 94,
          "physicsMarks": 76,
          "chemistryMarks": 84
        },
        {
          "id": 7,
          "studentName": "Student 7",
          "mathMarks": 89,
          "physicsMarks": 92,
          "chemistryMarks": 90
        },
        {
          "id": 8,
          "studentName": "Student 8",
          "mathMarks": 82,
          "physicsMarks": 85,
          "chemistryMarks": 89
        },
        {
          "id": 9,
          "studentName": "Student 9",
          "mathMarks": 91,
          "physicsMarks": 78,
          "chemistryMarks": 86
        },
        {
          "id": 10,
          "studentName": "Student 10",
          "mathMarks": 76,
          "physicsMarks": 90,
          "chemistryMarks": 92
        }
      ];
      

    return (
        <div>
            <LChart width={900} height={700} data={studentMarksData}>
                <XAxis dataKey="studentName"></XAxis>
                <YAxis dataKey="mathMarks"></YAxis>
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey="physicsMarks" stroke='tomato'></Line>
                <Line dataKey="chemistryMarks" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;