import { Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe.tsx';
import Education from "./pages/Education.tsx";
import Employment from "./pages/Employment.tsx";
import Technologies from "./pages/Technologies.tsx";
import Projects from "./pages/Projects.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AboutMe />} />    {/* No more 'exact', always exact */}
            <Route path="/education" element={<Education />} />
            <Route path="/employment" element={<Employment />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    );
};

export default AppRoutes;