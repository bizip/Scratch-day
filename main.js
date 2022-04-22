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
      image: 'img/pascal.jpeg',
      shortDetails: 'Bacon ipsum dolor amet prosciutto ball tip swine, shank andouille ham hock short loin',
    },
    {
      name: 'Jonathan Baker',
      title: 'Educational and early childhood educatin researcher',
      image: 'img/speaker6.jpg',
      shortDetails: 'Bacon ipsum dolor amet prosciutto ball tip swine, shank andouille ham hock short loin',
    },
    {
      name: 'Melisa Delgado',
      title: 'Scratch programming trainer and student at MIT',
      image: 'img/speaker3.jpg',
      shortDetails: 'Bacon ipsum dolor amet prosciutto ball tip swine, shank andouille ham hock short loin',
    },
    {
      name: 'Geovany Champlin',
      title: 'Punching Machine Setters at media Lab MIT',
      image: 'img/speaker2.jpg',
      shortDetails: 'Bacon ipsum dolor amet prosciutto ball tip swine, shank andouille ham hock short loin',
    },
    {
      name: 'Mrs. Dorothea Conn',
      title: 'Mrs. Dorothea Conn at Master card faundation',
      image: 'img/speacher1.jpg',
      shortDetails: 'Bacon ipsum dolor amet prosciutto ball tip swine, shank andouille ham hock short loin',
    },
    {
      name: 'Nikita Wilkinson',
      title: 'Central Office Operator',
      image: 'img/pascal.jpeg',
      shortDetails: 'Bacon ipsum dolor amet prosciutto ball tip swine, shank andouille ham hock short loin',
    },
  ];

  const getSpeakers = document.getElementById('speaker-container');
  getSpeakers.innerHTML = speakersList.map((el) => `
  <article class="speaker-card">
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
</article>`).join('');
};
