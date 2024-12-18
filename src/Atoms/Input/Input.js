import React from 'react';
import 'Input.css'

const Input = ({ type = 'text', placeholder = '', value, onChange }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
    );
};

export default Input;