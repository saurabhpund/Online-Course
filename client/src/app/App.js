import "../App.css";
import CourseDetails from "../Screens/CourseDetails";
import CourseList from '../Screens/CourseList';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import StudentDashboard from "../Screens/StudentDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
