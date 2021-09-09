import Image from './kiwi.jpg';
import './kiwi-image.css'

class KiwiImage {
  render() {
    const img = document.createElement('img')
    img.src = Image
    img.alt = "kiwi image"
    img.classList.add('kiwi-image')
    const body = document.querySelector('body')
    body.appendChild(img)
  }
}

export default KiwiImage