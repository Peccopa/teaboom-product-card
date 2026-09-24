import { packages } from './packages';
import './style.css';

const packageButtons = document.querySelectorAll('.product__package');
const article = document.querySelector('#product-article');
const price = document.querySelector('#product-price');
const oldPrice = document.querySelector('#product-old-price');

packageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedPackage = packages[button.dataset.package];

    packageButtons.forEach((item) => {
      item.classList.remove('is-active');
    });

    button.classList.add('is-active');

    article.textContent = selectedPackage.article;
    price.textContent = selectedPackage.price;
    oldPrice.textContent = selectedPackage.oldPrice;
  });
});
