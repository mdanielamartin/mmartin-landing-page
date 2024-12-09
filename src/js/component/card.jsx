import React from "react";
import Rigo from "../../img/rigo-baby.jpg";



//create your first component
const Card = () => {
    return (
        <div class="card w-100 mt-3">
            < img class="card-img-top" src={Rigo} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title mt-2">Card title</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas pretium tortor, nec ultricies magna. Proin sodales augue vel venenatis consectetur. Cras tincidunt, dui a convallis tristique, ipsum felis tempor libero, quis tempus eros nisi in nibh. </p>
            </div>
            <div class='card-footer d-flex justify-content-center align-items-center pt-3 pb-3'>
                <a href="#" class="btn btn-primary">Find Out More!</a>
            </div>
        </div >
    );
};

export default Card;
