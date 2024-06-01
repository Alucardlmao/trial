// Failure.js
import React from 'react';
import Button from './Button';

const Failure = () => {
    return (
        <div className="modal-content">
            <h2
                className="text-3xl text-center font-bold text-red-500 mb-4"
                style={{ color: '#33496F' }}
            >
                Payment Failed
            </h2>
            <h3
                className="text-xl text-center font"
                style={{ color: '#666666' }}
            >
                Please try again.
            </h3>
            <div>
                <img src="/failedGif.png" alt="" />
            </div>
            {/* <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br> */}
            <div className="text-center mt-4">
                <Button
                    href="/for-individual"
                    className=" text-3xl text-blue-500 font-semibold"
                    style={{ color: '#33496F' }}
                >
                    Try Again
                </Button>
            </div>
        </div>
    );
};

export default Failure;
