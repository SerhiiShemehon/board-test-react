import React, {useState} from 'react';
import './EditForm.scss';

export const EditForm = ({
                             id,
                             title,
                             text,
                             color,
                             changeTextForm,
                             editPost
}) => {
    const [ valueTitle, setValueTitle ] = useState(title);
    const [ valueText, setValueText ] = useState(text);
    const [ valueColor, setValueColor ] = useState(color);

    const onChangeTitle = (element) => {
        setValueTitle(element.target.value);
    }
    const onChangeText = (element) => {
        setValueText(element.target.value);
    }
    const onChangeColor = (element) => {
        setValueColor(element.target.value);
    }

    const createSection = (element) => {
        element.preventDefault();
        editPost(valueTitle, valueText, valueColor, id);
        changeTextForm();
    }

    return (
        <form className="edit-form" onSubmit={createSection}>
            <input
                type="text"
                autoFocus={true}
                required={true}
                onChange={onChangeTitle}
                placeholder="Your title"
                value={valueTitle}
            />
            <textarea
                required={true}
                placeholder="Your text"
                onChange={onChangeText}
                value={valueText}
            />
            <label htmlFor="color">
                <span>Color:</span>
                <input
                    id="color"
                    type="color"
                    value={valueColor}
                    onChange={onChangeColor}
                />
            </label>
            <button className="btn" type="submit">Add</button>
        </form>
    )
}