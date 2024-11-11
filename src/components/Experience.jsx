import React, {useState} from 'react';
import '../styles/Experience.css';

export default function Experience() {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [jobResponsibility, setJobResponsibility] = useState('');
    const [date, setDate] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
    }

    const handleEdit = () => {
        setIsSubmitted(false);
    }


    return(
        <div className = 'experience'>
            <h2>Work Experience</h2>
            {isSubmitted ? (
                <div>
                    <div className='submitted-info'>
                        <span className='label'>Company:</span>
                        <span className='value'>{companyName}</span>
                    </div>
                    <div className='submitted-info'>
                        <span className='label'>Position:</span>
                        <span className='value'>{positionTitle}</span>
                    </div>
                    <div className='submitted-info'>
                        <span className='label'>Responsibility:</span>
                        <span className='value'>{jobResponsibility}</span>
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
                        placeholder = 'Company Name'
                        value = {companyName}
                        onChange = {(e) => setCompanyName(e.target.value)}
                    />
                    <input
                        type = 'text'
                        placeholder = 'Position'
                        value = {positionTitle}
                        onChange = {(e) => setPositionTitle(e.target.value)}
                    />
                    <input
                        type = 'text'
                        placeholder = 'Main responsibility'
                        value = {jobResponsibility}
                        onChange = {(e) => setJobResponsibility(e.target.value)}
                    />
                    <input
                        type = 'text'
                        placeholder = 'Date from and until when you worked'
                        value = {date}
                        onChange = {(e) => setDate(e.target.value)}
                    />
                    <button className = 'button'
                        onClick = {handleSubmit}
                        disabled = {companyName === '' || positionTitle === '' || jobResponsibility === '' || date === ''}
                    >
                        Submit
                    </button>
                </div>
            )}
        </div>
    );

}

