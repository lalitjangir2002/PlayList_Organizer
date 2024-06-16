import React from "react";
import { useRef, useState } from "react";

export const Comments = ({ videoId }) => {
    return (
        <div className="mx-10 text-lg text-white">
            Sorry...
            <p className="pt-4">
                We think 90% of Youtube comments are either appreciation, hate
                speech or spam comments. And none of them are related to
                learning or helping user with their course. There are not
                usually some good discussion that helps user with their
                learnings as it happens on other learning platforms like Udemy
                or Coursera. <br /> While planning this app I thought I will
                include them here but then I realised that they are not useful
                here, while the aim of this app is to avoid distractions, adding
                comments will do no good.
            </p>
        </div>
    );
};

export const Description = ({ description }) => {
    const lines = description.split("\n");
    return (
        <div className="p-4 text-white">
            {lines.map((line, idx) => {
                return (
                    <div key={idx}>
                        <p>{line}</p>
                    </div>
                );
            })}
        </div>
    );
};

export const Notes = ({ title, player }) => {
    const [notes, setNotes] = useState([]);
    const note = useRef(null);
    const handleAddNote = () => {
        const timeSec = Math.round(player.current.getCurrentTime());
        const time = `${Math.floor(timeSec / 60)}:${timeSec % 60}`;
        const currentNote = { time: time, note: note.current.value };
        note.current.value = null;
        setNotes(notes => [...notes, currentNote]);
    };

    const handleSeek = timeString => {
        const time = timeString.split(":");
        const timeSec = time[0] * 60 + parseInt(time[1]);
        player.current.seekTo(timeSec, "seconds");
    };
    return (
        <div className="ml-10 mt-6 space-y-8">
            <div className="flex flex-row gap-4 w-full">
                <textarea
                    ref={note}
                    className="border-2 px-2 border-primary bg-light rounded-sm w-96"
                    type="textbox"
                    name="course-name"
                    placeholder={`Write notes at 09:00`}
                />
                <button
                    className={`border rounded-full px-6 py-2 font-semibold text-[#ffffff] bg-primary hover:bg-dark `}
                    onClick={() => {
                        handleAddNote();
                    }}
                >
                    Add Note
                </button>
            </div>
            <p className="text-lg text-white">
                <span className="font-bold text-white">Notes</span> ({title}) :-{" "}
            </p>
            <div className="pl-4 text-white">
                {notes
                    .slice(0)
                    .reverse()
                    .map((note, idx) => {
                        return (
                            <div key={idx}>
                                <p className="text-white">
                                    <span
                                        className="font-bold text-white cursor-pointer"
                                        onClick={() => handleSeek(note.time)}
                                    >
                                        {note.time}
                                    </span>
                                    {"  "}
                                    {note.note}
                                </p>
                                <br />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
