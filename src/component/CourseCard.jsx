import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

export const CourseCard = (props) => {
    const { course, onRemoveCourse } = props;

    return (
        <div className="bg-[#d2d0d0] w-60 border-2 border-secondary rounded-lg p-2 relative">
            <div className="absolute -top-3 -right-3 bg-[#e62a2a] rounded-full p-1">
                <IoCloseOutline 
                    className="text-xl cursor-pointer text-white" 
                    onClick={() => onRemoveCourse(course.id)} 
                />
            </div>
            <img src={course.thumbnail} alt="course" className="w-full h-auto rounded-md" />
            <div className="space-y-2 px-2 py-4 text-sm h-40">
                <p className="text-xl font-bold">{course.name}</p>
                <p>{course.channel}</p>
            </div>
            <div className="w-50 p-4 b-0 sticky">
                <ProgressBar
                    className="pt-1"
                    completed={course.progress}
                    bgColor="#307672"
                    height="10px"
                    isLabelVisible={false}
                />
                <p className="pb-4">{course.progress}% complete</p>
                <Link to={`/player/${course.name}/${course.id}`}>
                    <button className="border rounded-full px-4 py-2 w-full font-semibold text-[#fff] bg-[#3da9a3] hover:bg-[#38938e] text-base">
                        {course.progress === 0 ? "Start" : "Continue"} Learning
                    </button>
                </Link>
            </div>
        </div>
    );
};
