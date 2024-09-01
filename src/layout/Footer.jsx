import React from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
    return (
        <div
            className="flex flex-col gap-8 pb-6 md:pb-10 justify-between px-8 md:px-20 py-4 bg-gradient-to-r from-dark to-secondary via-primary">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                <h1 className="text-[#91a380] text-4xl font-bold mb-4 lg:mb-0">
                    <span className="text-[#91a380]">P-</span>ORGANIZER
                </h1>
                <div className="flex gap-4 text-white text-xl">
                    <a href="#" aria-label="Facebook">
                        <AiFillFacebook />
                    </a>
                    <a href="#" aria-label="Twitter">
                        <AiFillTwitterCircle />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <AiFillLinkedin />
                    </a>
                    <a href="#" aria-label="Instagram">
                        <AiFillInstagram />
                    </a>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between text-xl w-full gap-8 text-white">
                <div className="lg:w-2/3">
                    <p>
                        PlaylistOrganizer is a web application designed to enhance your learning 
                        experience by organizing YouTube playlists into structured courses. This 
                        app was created to help users avoid distractions from YouTube ads and suggested 
                        videos, providing a focused and streamlined learning environment.
                    </p>
                    <br />
                    <h6>Key Features:</h6>
                    <br />
                    <ul className="list-disc pl-5">
                        <li>Ad-Free Viewing: Watch YouTube videos without interruptions from ads.</li>
                        <li>Course Organization: Transform your playlists into well-organized courses.</li>
                        <li>Notes and Annotations: Take and save notes directly within the app for future reference.</li>
                    </ul>
                    <br />
                    <p>
                        With PlaylistOrganizer, you can maintain your focus and efficiently manage your 
                        learning materials, making it the ideal tool for students and lifelong learners.
                    </p>
                </div>
                <div className="lg:w-1/3 flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-bold text-[#fff] underline">Quick Links</h2>
                        <Link to="/" className="text-light hover:text-[#91a380]">Home</Link>
                        <Link to="/FAQs" className="text-light hover:text-[#91a380]">FAQ</Link>
                        <Link to="" className="text-light hover:text-[#91a380]">Contact Us</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-bold text-[#ffffff] underline">Contact Us</h2>
                        <p>Email: playlist@organiser.com</p>
                        <p>Phone: +000 922 2345</p>
                        <p>Address: 123 Course, Learning City, Edu 10101</p>
                    </div>
                </div>
            </div>
            <div className="text-center text-[#fff] mt-4">
                &copy; 2024 PlayListOrganizer. All Rights Reserved.
            </div>
        </div>
    );
};
