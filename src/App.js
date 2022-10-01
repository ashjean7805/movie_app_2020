import React from 'react';

// function Food(props) {
//   return <h1>I like {props.fav}</h1>;
// }

// destructing assignment : 구조분해 할당
function Food({ name, picture }) {
  return (
    <div>
      <h2>I like { name }</h2>
      <img src = {picture } />
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkelliesfoodtoglow.com%2Fwp-content%2Fuploads%2F2016%2F10%2Fkimchi1.jpg&f=1&nofb=1&ipt=7f1ffce187e48934b05b73373f5369bb57928522c8df41f866ff8b1557a5e519&ipo=images',
  },
  {
    name: 'Samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.gildedgingerbread.com%2Fwp-content%2Fuploads%2F2017%2F08%2FSamgyeopsal-1.jpg%3Fresize%3D750%252C600%26ssl%3D1&f=1&nofb=1&ipt=4bd0437d0c2465784ea0b4ae3680670c83473458213a863b856fa9dcca5d15ca&ipo=images',
  },
  {
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.od4YprzuR0ZOmv851wA0OAHaEx%26pid%3DApi&f=1&ipt=7ee4bc03b25b914bc337d513b090baf105159d9b7e98c0a640e41a4a6c15a2dc&ipo=images',
  },
  {
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.p6TZ345mvtQw9x1ZOVau7AEsDh%26pid%3DApi&f=1&ipt=bb5558c2957f953464d2c0742e719f451e151954d79922c70d7e3dd54cc272b3&ipo=images',
  },
  {
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.uv9awZBt7wINr4j-kGIeJgHaHa%26pid%3DApi&f=1&ipt=44c6c7dcd378e61bea5bbc206da398d0c26e706a9409b265e6ebbdda217ad645&ipo=images',
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food name = {dish.name} picture = {dish.image} />))}
    </div>
  );
}

export default App;
