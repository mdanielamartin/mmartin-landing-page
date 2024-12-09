import React from "react";


//create your first component
const Jumbotron = () => {
    return (
        <div class='bg-light p-4'>

            <h1 class='ms-4 '>A Warm Welcome!</h1>
            <p class='ms-4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis justo ac odio tempor condimentum. Proin sed semper arcu, eu porttitor urna. Ut ac odio porta, molestie metus et, ultricies dolor. Sed dictum at diam nec malesuada.</p>
            <button type="button" class="btn btn-primary ms-4 mt-2">Call to action!</button>
        </div>
    );
};

export default Jumbotron;
