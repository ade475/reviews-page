// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Dayo Adeniji',
    job: 'Software Developer',
    img: 'images/dayo-02.JPG',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, nihil repellat? Voluptas corrupti vel dolore culpa quo quos saepe voluptatibus cumque sint quisquam doloremque qui dolor obcaecati, labore eaque necessitatibus, laboriosam libero, unde ab consectetur!',
  },
  {
    id: 2,
    name: 'John Jones',
    job: 'Web Developer',
    img: 'images/model-cust-2-1.jpg',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, nihil repellat? Voluptas corrupti vel dolore culpa quo quos saepe voluptatibus cumque sint quisquam doloremque qui dolor obcaecati, labore eaque necessitatibus, laboriosam libero, unde ab consectetur!',
  },
  {
    id: 3,
    name: 'Paul Knesty',
    job: 'Intern',
    img: 'images/Long-Hairstyle-For-Men-Beard.jpg',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, nihil repellat? Voluptas corrupti vel dolore culpa quo quos saepe voluptatibus cumque sint quisquam doloremque qui dolor obcaecati, labore eaque necessitatibus, laboriosam libero, unde ab consectetur!',
  },
  {
    id: 4,
    name: 'William Sanderboen',
    job: 'Dentist',
    img: 'images/medium-side-swept-hairstyle.jpg',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, nihil repellat? Voluptas corrupti vel dolore culpa quo quos saepe voluptatibus cumque sint quisquam doloremque qui dolor obcaecati, labore eaque necessitatibus, laboriosam libero, unde ab consectetur!',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
