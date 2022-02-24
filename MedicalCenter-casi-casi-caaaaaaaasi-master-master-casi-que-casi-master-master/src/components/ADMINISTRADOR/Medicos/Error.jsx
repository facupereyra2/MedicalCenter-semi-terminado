import React from 'react';

const Error = ({error, cuil}) => {
    return (
        <>
        {cuil.length === 11 ? 
            <div className="error-container">
                <h2>{error}</h2>
            </div>
            : ''
        }
            
        </>
    );
}
 
export default Error;