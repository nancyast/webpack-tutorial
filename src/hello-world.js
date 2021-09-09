import Component from "./component"
import Image from './images.jpg'
import './style.css';

const button = document.querySelector('button')
button.classList.add('tabs')

console.log("hello world")

const img = document.createElement('img');
img.src = Image;
const body = document.querySelector('body');
body.appendChild(img)

const img1 = document.createElement('img');
img1.src = Image;
body.appendChild(img1)

const com = new Component()
console.log(com.render())