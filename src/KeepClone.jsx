import React, { useState } from 'react';
import './KeepClone.css';
import KeepCloneHeader from './KeepCloneHeader';
import KeepCloneFooter from './KeepCloneFooter';
import KeepCloneCreate from './KeepCloneCreate'
import KeepCloneNote from './KeepCloneNote';



const KeepClone = () => {

    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        setNotes((oldNotes) => {
            return [...oldNotes, note];
        });
        console.log(notes)
        /* setNote({
            title: "",
            content: "",
        }) */
    };


    const deleteNote = (id) => {
        setNotes((oldNotes) => {
            return oldNotes.filter((item, index) => {
                return index !== id;
            })
        });
    };



    return (
        <div className="container">
            <KeepCloneHeader />
            <KeepCloneCreate passNote={addNote} />
            <div className="note_container">
                {notes.map((value, index) => {
                    return (
                        <KeepCloneNote
                            key={index}
                            id={index}
                            title={value.title}
                            content={value.content}
                            onSelect={deleteNote}
                        />
                    );
                })}
            </div>
            {/* <KeepCloneFooter /> */}

        </div>
    )
}

export default KeepClone;