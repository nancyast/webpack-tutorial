import helloWorld from "./hello-world";
import Component from "./component"
import Image from './images.jpg'
import './style.css';

const button = document.querySelector('button')
button.classList.add('tabs')

// console.log('Image', Image)

helloWorld();

const img = document.createElement('img');
img.src = Image;
const body = document.querySelector('body');
body.appendChild(img)

const com = new Component()
console.log(com.render())