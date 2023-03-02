// @ts-nocheck
const cardData = [
  {
    id: 0,
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ef3i0k1ilhdsistcykog",
  },
  {
    id: 1,
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3",
  },
];

const cards = document.getElementById("card-container");

let card = "";

cardData.forEach((carditem) => {
  card =
    card +
    `
    <div class='cards'>
  <div class="card">
    <img
      src=${carditem.img}
      alt="images"
    />
  </div>
  </div>
    `;
});

cards.innerHTML = card;
