import React, {useState} from 'react';
import './AddForm.scss';

export const AddForm = ({
                            createBoardItem,
                            createColumnItem,
                            createPostItem,
                            type,
                            id,
                            changeButtonForm
}) => {
    const [ valueTitle, setValueTitle ] = useState('');
    const [ valueText, setValueText ] = useState('');
    const [ valueColor, setValueColor ] = useState('#ff0000');

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
        if (valueTitle.length > 0){
            if (type === 'board'){
                createBoardItem(valueTitle);
            } else if (type === 'column') {
                createColumnItem(valueTitle, id);
            } else {
                createPostItem(valueTitle, valueText, valueColor, id)
            }
            setValueTitle('');
            changeButtonForm();
        }
    }

    return (
        type === 'post'
            ? <form className="add-form" onSubmit={createSection}>
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
            : <form className="add-form" onSubmit={createSection}>
                <input
                    type="text"
                    autoFocus={true}
                    onChange={onChangeTitle}
                    placeholder="Title"
                    value={valueTitle}
                />
            </form>
    )
}