window.onload = () => {
  const menuContainer = document.getElementById('mob-container');
  const menu = document.querySelectorAll('.mob-click');
  menu.forEach((el) => {
    el.addEventListener('click', () => {
      menuContainer.classList.toggle('disapear');
    });
  });

  const speakersList = [
    {
      name: 'Bizimungu Pascal',
      title: 'Scratch programming trainer and web developer',
      image: './img/pascal.jpeg',
      shortDetails: 'Bacon ipsum dolor amet prosciutto ball tip swine, shank andouille ham hock short loin',
    },
    {
      name: 'Bizimungu Pascal',
      title: 'Scratch programming trainer and web developer',
      image: './img/speaker6.jpg',
      shortDetails: 'Bacon ipsum dolor amet prosciutto ball tip swine, shank andouille ham hock short loin',
    },
    {
      name: 'Bizimungu Pascal',
      title: 'Scratch programming trainer and web developer',
      image: './img/speaker3.jpg',
      shortDetails: 'Bacon ipsum dolor amet prosciutto ball tip swine, shank andouille ham hock short loin',
    },
    {
      name: 'Bizimungu Pascal',
      title: 'Scratch programming trainer and web developer',
      image: './img/speaker2.jpg',
      shortDetails: 'Bacon ipsum dolor amet prosciutto ball tip swine, shank andouille ham hock short loin',
    },
    {
      name: 'Bizimungu Pascal',
      title: 'Scratch programming trainer and web developer',
      image: './img/speacher1.jpg',
      shortDetails: 'Bacon ipsum dolor amet prosciutto ball tip swine, shank andouille ham hock short loin',
    },
    {
      name: 'Bizimungu Pascal',
      title: 'Scratch programming trainer and web developer',
      image: './img/pascal.jpeg',
      shortDetails: 'Bacon ipsum dolor amet prosciutto ball tip swine, shank andouille ham hock short loin',
    },
  ];

  const getSpeakers = document.getElementById('speaker-container');
  getSpeakers.innerHTML = speakersList.map((el) => `
  <div class="speaker-card">
  <div class="images">
      <img src="${el.image}" alt="specker">
  </div>
  <div class="speaker-details">
      <div class="info-header">
          <h3>${el.name}</h3>
          <p>${el.title}</p>
          <p class="line-below"></p>
      </div>
      <div class="info-detail">
          <p> ${el.shortDetails}</p>
      </div>
  </div>
</div>`).join('');
};
