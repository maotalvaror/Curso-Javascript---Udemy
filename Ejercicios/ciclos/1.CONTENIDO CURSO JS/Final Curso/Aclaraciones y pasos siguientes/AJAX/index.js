const btn = document.getElementById('btnRandom');
btn.addEventListener('click', fetchDogImageAndShow);

function fetchDogImageAndShow() {
  axios.get('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
      const urlImage = response.data.message;
      const URLIMAGE = document.getElementById('URLIMAGE');
      URLIMAGE.innerHTML = `<p>"${urlImage}"></p>`;
      const content = document.getElementById('content');
      content.innerHTML = `<img src="${urlImage}" width="400" height="460">`;
    })
    .catch((error) => {
      console.log(error)
    })
  }
  fetchDogImageAndShow();