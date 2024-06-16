import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";

export const CourseCard = (props) => {
    const course = props.course;
    console.log(`Navigating to: /player/${course.name}/${course.id}`);

    return (
        <div className="bg-[#d2d0d0] w-60 border-2 border-secondary rounded-lg p-2">
            <img src={course.thumbnail} alt="course" />
            <div className="space-y-2 px-2 py-4 text-sm">
                <p className="text-xl font-bold">{course.name}</p>
                <p>{course.channel}</p>
                <ProgressBar
                    className="pt-1"
                    completed={course.progress}
                    bgColor="#307672"
                    height="10px"
                    isLabelVisible={false}
                />
                <p>{course.progress}% complete</p>
                <button className="border rounded-full px-4 py-2 w-full font-semibold text-[#fff] bg-[#3da9a3] hover:bg-[#38938e] text-base">
                    <Link to={`/player/${course.name}/${course.id}`}>
                        {course.progress === 0 ? "Start" : "Continue"} Learning
                    </Link>
                </button>
            </div>
        </div>
    );
};
