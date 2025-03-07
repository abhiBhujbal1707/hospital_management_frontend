
// import React, { useState, useContext } from "react";
// import { AiOutlineDown } from "react-icons/ai";
// import { Link } from "react-scroll";
// import MyContext from "../../context/MyContext";
// import { BrowserRouter as Router, Route, Routes, Link as Link2, useNavigate } from "react-router-dom";
// import ReceptionistDashboard from "../Dashboards/Staff/Reception";
// import MainHero from "../Hero/MainHero";

// const MainNavbar = ({ user, setUser }) => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isSignUpOpen, setIsSignUpOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState("Patient");

//     const { isLoggedIn, setisLoggedIn } = useContext(MyContext);
//     const navigate = useNavigate(); // Hook for redirection

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const toggleSignUp = () => {
//         setIsSignUpOpen(!isSignUpOpen);
//         setUser("Patient");
//         setSelectedOption("Patient");
//     };

//     const handleLogout = () => {
//         setisLoggedIn(false);
//         navigate("/"); // Redirect to home page
//     };

//     return (
//         <nav className="bg-zinc-500 z-10 sticky top-0 w-full">
//             <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 <a href="#" className="flex items-center space-x-3">
//                     <img src="/logo.png" className="h-8" alt="Logo" />
//                     <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
//                         Indira
//                     </span>
//                 </a>
//                 <button
//                     onClick={toggleMenu}
//                     className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden"
//                     aria-controls="navbar-default"
//                     aria-expanded={isMenuOpen}
//                 >
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                         <path
//                             fillRule="evenodd"
//                             d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zM3 10h14a1 1 0 010 2H3a1 1 0 010-2zM3 15h14a1 1 0 010 2H3a1 1 0 010-2z"
//                             clipRule="evenodd"
//                         ></path>
//                     </svg>
//                 </button>
//                 <div className={`w-full md:block md:w-auto ${isMenuOpen ? "block" : "hidden"}`} id="navbar-default">
//                     <ul className="font-medium flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0 mt-4 md:mt-0">
//                         <li>
//                             <Link2 to="/" className="block py-2 px-3 text-white hover:text-gray-300">
//                                 Home
//                             </Link2>
//                         </li>
//                         <li>
//                             <Link
//                                 to="about-section"
//                                 smooth={true}
//                                 duration={500}
//                                 className="block py-2 px-3 cursor-pointer text-white hover:text-gray-300"
//                             >
//                                 About
//                             </Link>
//                         </li>
//                         <li>
//                             <a href="#" className="block py-2 px-3 text-white hover:text-gray-300">
//                                 Doctors
//                             </a>
//                         </li>
//                         <li className="relative">
//                             <button onClick={toggleSignUp} className="block py-2 px-3 w-full text-left text-white hover:text-gray-300">
//                                 <div className="flex items-center gap-1">
//                                     SignIn {selectedOption}
//                                     <AiOutlineDown />
//                                 </div>
//                             </button>
//                             {isSignUpOpen && (
//                                 <ul className="absolute flex flex-col mt-2 bg-white border rounded shadow-lg dark:bg-gray-800"></ul>
//                             )}
//                         </li>
//                         <li>
//                             <a href="#" className="block py-2 px-3 text-white hover:text-gray-300" onClick={() => setUser("Login")}>
//                                 Login
//                             </a>
//                         </li>
//                         {isLoggedIn && (
//                             <>
//                                 <li>
//                                     <Link2 to="/dashboard" className="py-2 px-3 text-white hover:text-gray-300">
//                                         Dashboard
//                                     </Link2>
//                                 </li>
//                                 <li>
//                                     <button
//                                         onClick={handleLogout}
//                                         className="py-2 px-3 text-white hover:text-gray-300 bg-red-600 rounded-lg"
//                                     >
//                                         Logout
//                                     </button>
//                                 </li>
//                             </>
//                         )}
//                     </ul>
//                 </div>
//             </div>
//             <Routes>
//                 <Route path="/dashboard" element={<ReceptionistDashboard />} />
//                 <Route path="/" element={<MainHero user={user} setUser={setUser} />} />
//             </Routes>
//         </nav>
//     );
// };

// export default MainNavbar;
import React, { useState, useContext } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-scroll";
import MyContext from "../../context/MyContext";
import { BrowserRouter as Router, Route, Routes, Link as Link2, useNavigate } from "react-router-dom";
import ReceptionistDashboard from "../Dashboards/Staff/Reception";
import MainHero from "../Hero/MainHero";
import DoctorDashboard from "../../DoctorDashboard";

const MainNavbar = ({ user, setUser }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Patient");

    const { isLoggedIn, setisLoggedIn } = useContext(MyContext);
    const { Staff, setStaff } = useContext(MyContext);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSignUp = () => {
        setIsSignUpOpen(!isSignUpOpen);
        setUser("Patient");
        // setSelectedOption("Patient");
    };

    const handleLogout = () => {
        setisLoggedIn(false);
        navigate("/");
    };

    return (
        <nav className="bg-zinc-500 z-10 sticky top-0 w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3">
                    <img src="/logo.png" className="h-8" alt="Logo" />
                    <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
                        Indira
                    </span>
                </a>
                <button
                    onClick={toggleMenu}
                    className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zM3 10h14a1 1 0 010 2H3a1 1 0 010-2zM3 15h14a1 1 0 010 2H3a1 1 0 010-2z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isMenuOpen ? "block" : "hidden"}`} id="navbar-default">
                    <ul className="font-medium flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0 mt-4 md:mt-0">
                        <li>
                            <Link2 to="/" className="block py-2 px-3 text-white hover:text-gray-300">
                                Home
                            </Link2>
                        </li>
                        <li>
                            <Link
                                to="about-section"
                                smooth={true}
                                duration={500}
                                className="block py-2 px-3 cursor-pointer text-white hover:text-gray-300"
                            >
                                About
                            </Link>
                        </li>
                        {!isLoggedIn && (
                            <>
                                <li className="relative">
                                    <button onClick={toggleSignUp} className="block py-2 px-3 w-full text-left text-white hover:text-gray-300">
                                        <div className="flex items-center gap-1">
                                            SignIn {selectedOption}

                                        </div>
                                    </button>
                                    {/* {isSignUpOpen && (
                                        <ul className="absolute flex flex-col mt-2 bg-white border rounded shadow-lg dark:bg-gray-800"></ul>
                                    )} */}
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-white hover:text-gray-300" onClick={() => setUser("Login")}>
                                        Login
                                    </a>
                                </li>
                            </>
                        )}
                        {isLoggedIn && (
                            <>
                                <li>

                                    {Staff.role === "Receptionist" && (<><Link2 to="/dashboard" className="py-2 px-3 text-white hover:text-gray-300">
                                        Dashboard
                                    </Link2></>)}
                                    {Staff.role === "Doctor" && (<><Link2 to="/doctor-dashboard" className="py-2 px-3 text-white hover:text-gray-300">
                                        Dashboard
                                    </Link2></>)}





                                </li>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="py-2 px-3 text-white hover:text-gray-300 bg-red-600 rounded-lg"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
            <Routes>
                <Route path="/dashboard" element={<ReceptionistDashboard />} />
                <Route path="/doctor-dashboard" element={< DoctorDashboard />} ></Route>
                <Route path="/" element={<MainHero user={user} setUser={setUser} />} />
            </Routes>
        </nav>
    );
};

export default MainNavbar;