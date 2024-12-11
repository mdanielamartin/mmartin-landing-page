import React from "react";


//create your first component
const Jumbotron = () => {
    return (
        <div className='bg-light jumbo jumbotron'>
            <h1 className='ms-4 display-1'>A Warm Welcome!</h1>
            <p className='mt-2 ms-4 me-4 text-align-start fs-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis justo ac odio tempor condimentum. Proin sed semper arcu, eu porttitor urna. Ut ac odio porta, molestie metus et, ultricies dolor. Sed dictum at diam nec malesuada.</p>
            <p>
                <button type="button" className="btn btn-primary ms-4 mt-3 fs-3">Call to action!</button>
            </p>
        </div>
    );
};

export default Jumbotron;
