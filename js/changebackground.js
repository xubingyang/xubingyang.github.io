contents.addEventListener('click', (e) => {
  e.preventDefault();
  let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  let imageURL = '';
  if (width > 768) {
    imageURL = 'https://source.unsplash.com/random/1920x1080';
  } else {
    imageURL = 'https://source.unsplash.com/random/600x480';
  }
  fetch(imageURL).then((response) => {
    document.body.style.backgroundImage = `url(${response.url})`;
  });
});