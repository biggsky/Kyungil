import React from 'react'

interface ToggleComponentProps {
    toggleContent: string;
}

const ToggleComponent: React.FC<ToggleComponentProps> = ({ toggleContent }) => {
    return (
        <div className='bg-gray-50 p-2 rounded-md shadow'>
            {toggleContent}
            <div className='after::content after::border'></div>
        </div>
    );
}

export default ToggleComponent