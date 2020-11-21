import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';


const KeepCloneCreate = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });


    const inputHandle = (event) => {
        const { value, name } = event.target;
        setNote((preNote) => {
            return {
                ...preNote,
                [name]: value
            };
        });

    };

    const addData = () => {

        note.title !== '' ? props.passNote(note) : window.alert("Please Add Data..");
        /* setNotes((oldNotes) => {
            return [...oldNotes, note];
        });
        setNote({
            title: "",
            content: "",
        }) */
    };


    return (
        <div className="main_note">
            <form>
                <input
                    type="text"
                    placeholder="Title"
                    autoComplete="off"
                    name='title'
                    value={note.title}
                    onChange={inputHandle}
                    className="input_field"
                />
                <textarea
                    name='content'
                    cols="" rows=""
                    placeholder="Write a Note"
                    value={note.content}
                    onChange={inputHandle}
                    className="input_field">{" "}</textarea>
                <Button className="btn_add" onClick={addData}>
                    <AddIcon className="add_icon" />
                </Button>
            </form>


        </div>
    )
}

export default KeepCloneCreate
