import React from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";

const QuestionFAQ = () => {

    const questions = [
        {
            question: "How can I add course ?",
            answer: "Just paste the link of the playlist that you want to add as a course. In playlist link we are intrested in playlist ID which is available in playlist URL under 'list' attribute. Example :- https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi",
        },
        {
            question: "How can I add notes ?",
            answer: "When you play a particular video, you will see a notes section there. Just write your notes there and click 'Add Note'. Your note will be saved and shown to you in that section itself with timestamp.",
        },
    ];

    return (
        <div className="flex flex-col gap-4 md:gap-10">
            <Header currentPage="FAQs" />
            <h2 className="text-[#91a380] text-center text-lg md:text-2xl font-bold">
                FAQs (Frequently Asked Questions) :-
            </h2>
            <div className="m-auto border-2 border-dark bg-[#d2d0d0] rounded-xl p-4 md:p-8 text-base md:text-lg md:w-8/12 w-11/12">
                {questions.map((question, index) => {
                    return (
                        <div key={index}>
                            <p className="font-semibold">
                                {index + 1}. {question.question}
                            </p>
                            <p className="md:pl-10">{question.answer}</p>
                            <br />
                        </div>
                    );
                })}
            </div>
            <Footer />
        </div>
    );
};

export default QuestionFAQ;