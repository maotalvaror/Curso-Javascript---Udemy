const URL_API_RANDOM_IMAGE = 'https://dog.ceo/api/breeds/image/random';

const btn = document.getElementById('btnRandom');
btn.addEventListener('click', fetchDogImageAndShow);

const content = document.getElementById('content');

async function fetchDogImageAndShow() {
  const response = await fetch(URL_API_RANDOM_IMAGE);
  const data = await response.json();
  
  const urlImage = data.message;
  content.innerHTML = `<img src="${urlImage}">`;
  
  //.catch(error => console.log(error));
}

fetchDogImageAndShow();