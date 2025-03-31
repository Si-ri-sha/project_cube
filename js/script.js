
document.getElementById('search').addEventListener('click', function () {
  let searchBox = document.getElementById('search-bar');
  if (searchBox) {
    searchBox.classList.toggle('show'); 
  } else {
    let newSearchBox = document.createElement('input');
    newSearchBox.id = 'search-bar';
    newSearchBox.type = 'text';
    newSearchBox.placeholder = 'Search For Products...';
    newSearchBox.classList.add('search-bar');
    document.querySelector('header').appendChild(newSearchBox);
  }
});

const galleryImages = document.querySelectorAll('.thumbnail');
galleryImages.forEach((thumbnail) => {
  thumbnail.addEventListener('click', function () {
    const newImageSrc = this.querySelector('img').src; 
    document.querySelector('.product-preview img').src = newImageSrc;
  });
});

const radioButtons = document.querySelectorAll('.radio-input');
const addToCartButton = document.getElementById('add-to-cart');

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('change', function () {
    const selectedFlavor = document.querySelector('input[name="custom-radio"]:checked');
    const selectedPurchaseType = document.querySelector('input[name="purchase-type"]:checked');

    const baseUrl = 'https://dummyurl.com/product';
    const flavor = selectedFlavor ? selectedFlavor.id : 'default-flavor';
    const purchaseType = selectedPurchaseType ? selectedPurchaseType.id : 'default-type';

    addToCartButton.querySelector('span').textContent = `Add ${flavor} - ${purchaseType} to Cart`;
    addToCartButton.setAttribute('href', `${baseUrl}?flavor=${flavor}&type=${purchaseType}`);
  });
});

const percentageSection = document.querySelector('.percentage-section');
const percentageElements = document.querySelectorAll('.percentage');
const countUp = (element) => {
  const target = parseInt(element.textContent);
  let current = 0;
  const interval = setInterval(() => {
    current += 1;
    element.textContent = `${current}%`;
    if (current >= target) clearInterval(interval);
  }, 10);
};

const handleScroll = () => {
  if (percentageSection.getBoundingClientRect().top <= window.innerHeight) {
    percentageElements.forEach(countUp);
    window.removeEventListener('scroll', handleScroll); 
  }
};

window.addEventListener('scroll', handleScroll);

const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((question) => {
  question.addEventListener('click', function () {
    const answer = this.nextElementSibling;
    answer.classList.toggle('show'); 
  });
});
