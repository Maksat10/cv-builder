import React, {useState} from 'react';
import '../styles/Education.css';

export default function Education() {
    const [school, setSchool] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
    }

    const handleEdit = () => {
        setIsSubmitted(false);
    }


    return(
        <div className = 'education'>
            <h2>Education</h2>
            {isSubmitted ? (
                <div>
                    <div className='submitted-info'>
                        <span className='label'>School:</span>
                        <span className='value'>{school}</span>
                    </div>
                    <div className='submitted-info'>
                        <span className='label'>Title:</span>
                        <span className='value'>{title}</span>
                    </div>
                    <div className='submitted-info'>
                        <span className='label'>Date:</span>
                        <span className='value'>{date}</span>
                    </div>
                    <button className = 'button button-edit' onClick = {handleEdit}>
                        Edit
                    </button>
                </div>
            ) : (
                <div>
                    <input
                        type = 'text'
                        placeholder = 'School Name'
                        value = {school}
                        onChange = {(e) => setSchool(e.target.value)}
                    />
                    <input
                        type = 'text'
                        placeholder = 'Title of Study'
                        value = {title}
                        onChange = {(e) => setTitle(e.target.value)}
                    />
                    <input
                        type = 'text'
                        placeholder = 'Date of Study'
                        value = {date}
                        onChange = {(e) => setDate(e.target.value)}
                    />
                    <button className = 'button'
                        onClick = {handleSubmit}
                        disabled = {school === '' || title === '' || date === ''}
                    >
                        Submit
                    </button>
                </div>
            )}
        </div>
    );

}

