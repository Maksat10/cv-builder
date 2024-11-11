import React, {useState} from 'react';
import '../styles/General-Info.css';


export default function GeneralInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
    }

    const handleEdit = () => {
        setIsSubmitted(false);
    }

    
    return (
        <div className = 'general-info'>
            <h2>General Information</h2>
            
            {isSubmitted ? (
                <div>
                    <div className='submitted-info'>
                        <span className='label'>Name:</span>
                        <span className='value'>{name}</span>
                    </div>
                    <div className='submitted-info'>
                        <span className='label'>Email:</span>
                        <span className='value'>{email}</span>
                    </div>
                    <div className='submitted-info'>
                        <span className='label'>Phone:</span>
                        <span className='value'>{phone}</span>
                    </div>
                    <button className = 'button button-edit' onClick = {handleEdit}>
                        Edit
                    </button>
                </div>
            ) : (
                <div>
                    <input
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='tel'
                        placeholder='Phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <br/>
                    <button
                        className='button button-submit'
                        onClick={handleSubmit}
                        disabled={name === '' || email === '' || phone === ''}
                    >
                        Submit
                    </button>
                </div>
            )}

        </div>
    );

}

