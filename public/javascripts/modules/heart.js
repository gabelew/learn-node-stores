import axios from 'axios';
import { $ } from './bling';

function ajaxHeart(e) {
  e.preventDefault();
  axios
    .post(this.action)
    .then(res => {
      const isHearted = this.heart.classList.toggle('heart__button--hearted'); // this.heart is any element with the name heart in form
      $('.heart-count').textContent = res.data.hearts.length;
      if (isHearted) {
        const heartFloatAnimationClass = 'heart__button--float';
        this.heart.classList.add(heartFloatAnimationClass);
        setTimeout(() => this.heart.classList.remove(heartFloatAnimationClass), 2500);
      }
    })
    .catch(console.error);
}

export default ajaxHeart;