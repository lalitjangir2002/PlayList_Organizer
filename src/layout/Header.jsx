import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export const Header = (props) => {
    const nav = props.nav && true;
    const courseTitle = props.courseTitle;
    const [currentPage, setCurrentPage] = useState(props.currentPage);

    return (
        <div className="flex flex-row justify-between px-4 lg:px-20 py-4 bg-gradient-to-r from-dark to-secondary via-primary">
            <Link to="/">
                <h1 className="hidden md:flex text-[#91a380] text-left text-3xl font-bold ">
                    <span className="text-[#91a380]">P</span>ORGANISER
                </h1>
                <h1 className="md:hidden text-[#91a380] text-left text-3xl font-bold ">
                    <span className="text-[#91a380]">P</span>O
                </h1>
            </Link>

            <div
                className={`text-[#91a380] ${
                    courseTitle || "hidden"
                } text-xl font-semibold`}
            >
                <p>{courseTitle}</p>
            </div>
            <div
                className={`flex flex-row gap-6 lg:gap-12 text-light font-semibold ${
                    nav === false && "hidden"
                } text-base md:text-lg`}
            >
                <button
                    className={`${
                        currentPage === "My Learning" && "font-bold text-[#91a380]"
                    }`}
                    onClick={() => {
                        setCurrentPage("My Learning");
                    }}
                >
                    <NavLink to="/" className="text-[#fff]">My Learning</NavLink>
                </button>
                {/* <button
                    className={`${
                        currentPage === "About" && "font-bold text-[#91a380]"
                    }`}
                    onClick={() => {
                        window.scrollTo({
                            top: document.documentElement.scrollHeight,
                            behavior: "smooth",
                        });
                        setCurrentPage("About");
                    }}
                >
                    About
                </button> */}
                <button
                    className={`${
                        currentPage === "FAQs" && "font-bold text-[#91a380]"
                    }`}
                    onClick={() => {
                        setCurrentPage("FAQs");
                    }}
                >
                    <NavLink to="/FAQs" className="text-white">FAQs</NavLink>
                </button>
            </div>
        </div>
    );
};