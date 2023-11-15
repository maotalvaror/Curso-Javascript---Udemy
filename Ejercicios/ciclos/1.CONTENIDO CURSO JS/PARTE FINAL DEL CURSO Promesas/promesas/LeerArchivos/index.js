fetch('data.json', {
  mode: 'same-origin',
  credentials: 'include'
})
  .then(console.log)
  .then(console.log)
  .catch(console.log); 