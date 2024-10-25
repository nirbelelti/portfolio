import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import AppRoutes from "./Routes.tsx";
import MobileScrollMainComponent from "./MobileScrollMainComponent.tsx";
import {isMobile} from 'react-device-detect';


function App() {
    return (
        <>
            <Navbar/>
            <div className="container mb-5 mt-5 content">
                {isMobile ? <MobileScrollMainComponent/> : <AppRoutes/>}
            </div>
            <Footer/>
        </>
    )
}

export default App
