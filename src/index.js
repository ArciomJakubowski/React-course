import React from "react";
import reactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

const element = <h1>hello world!</h1>

console.log(element);

reactDom.render(element, document.getElementById('root'))