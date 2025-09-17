//1 step
//rfce

import React from "react";
import { Link, NavLink } from 'react-router-dom'
//ancore tag(a) ki jagaha Link use karte hai ancore tag(a) iss liye use nahi karte kyo ki vo pura page load karta hai or hume react me parge pra load nahi karna hota  

//https://github.com/hiteshchoudhary/chai-aur-react/blob/main/reactRouterNotes.md
// pura code utahaya hai 
export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                                   


                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                            {/* Home */}
                            <li>
                                <NavLink>
                                   
                                    Home
                                </NavLink>
                            </li>


                            {/* About */}
                            <li>
                                <NavLink to="/about">
                                    About
                                </NavLink>
                            </li>

                            
                            {/* Contact */}
                            <li>
                                <NavLink to="/contact">
                                 Contact
                                </NavLink>
                            </li>

                              {/* Github */}
                            <li>
                                <NavLink  to="/github">
                                    Github
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
