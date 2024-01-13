import React from 'react';
import "../styles/Pieces.css";
import Sweater1 from '../product-sweaters/sweater1.png';
import Sweater2 from '../product-sweaters/sweater2.png';
import Sweater3 from '../product-sweaters/sweater3.png';
import Sweater4 from '../product-sweaters/sweater04.png';
import Sweater5 from '../product-sweaters/sweater5.png';
import Sweater6 from '../product-sweaters/sweater6.png';
import Sweater7 from '../product-sweaters/sweater7.png';
import Sweater8 from '../product-sweaters/sweater008.png';
import Sweater9 from '../product-sweaters/sweater9.png';
import Sweater10 from '../product-sweaters/sweater10.png';
import Sweater11 from '../product-sweaters/sweater11.png';
import Sweater12 from '../product-sweaters/sweater12.png';


function Pieces() {
    return (
<>
<main>
  <div className="grid">
    <div className="product">
      <img src={Sweater1} alt="sweater1" />
      <h6>Warm White Sweater </h6>
      <p>
        Wool cableknit turtleneck <br />
        sweater with adjacent stitching{" "}
      </p>
      <p>$39.99</p>
    </div>
    <div className="product">
      <img src={Sweater2} alt="sweater2" />
      <h6>Auburn Brown Sweater</h6>
      <p>
        Knit-made crocheted <br />
        rustic geometric cropped sweater
      </p>
      <p>$24.99</p>
    </div>
    <div className="product">
      <img src={Sweater3} alt="sweater3" />


      <h6>Emerald Green Sweater</h6>
      <p>
        Chunky loose-knit sweater <br /> with ribbed neckline and cuffs
      </p>
      <p>$44.95</p>
    </div>
    <div className="product">
      <img src={Sweater4} alt="sweater4" />
      <h6>Speckled Blue &amp; Orange Sweater</h6>
      <p>
        Upcycled and natural handspun
        <br /> wool geometric pattern thick sweater
      </p>
      <p>$79.95</p>
    </div>
    <div className="product">
      <img src={Sweater5} alt="sweater5" />
      <h6>Taupe Tan Sweater </h6>
      <p>
        Cotton-soft wool blend with <br />
        an intricate cable knit stitch sweater
      </p>
      <p>$39.99</p>
    </div>
    <div className="product">
      <img src={Sweater6} alt="sweater6" />
      <h6>Burnt Umber Brown &amp; Black Sweater</h6>
      <p>
        Rounded Crew neck adorned in vintage <br />
        geometric pattern oversized cable sweater
      </p>
      <p>$64.99</p>
    </div>
    <div className="product">
      <img src={Sweater7} alt="sweater7" />
      <h6>Periwinkle Purple Sweater</h6>
      <p>
        Cottonlightweight multi-stripe, <br />
        space-dyed colorful sweater{" "}
      </p>
      <p>$24.95</p>
    </div>
    <div className="product">
      <img src={Sweater8} alt="sweater8" />
      <h6>Maroon Red Sweater</h6>
      <p>
        Chunky weaved-pattern,
        <br /> ribbed oversized turtleneck sweater{" "}
      </p>
      <p>$36.99</p>
    </div>
    <div className="product">
      <img src={Sweater9} alt="sweater9" />
      <h6>Dusty Grey Sweater</h6>
      <p>Vintage multicolor geometric sweater </p>
      <p>$29.95</p>
    </div>
    <div className="product">
      <img src={Sweater10} alt="sweater10" />
      <h6>Crimson Red Jumper Sweater</h6>
      <p>
        Vintage 90's coogi holiday style <br />
        vibrant verticle stripe coloured sweater
      </p>
      <p>$59.99</p>
    </div>
    <div className="product">
      <img src={Sweater11} alt="sweater11" />
      <h6>Ash White Sweater</h6>
      <p>
        Asymmetrical hemline
        <br /> cropped turtleneck sweater{" "}
      </p>
      <p>$32.99</p>
    </div>
    <div className="product">
      <img src={Sweater12} alt="sweater12" />
      <h6>Speckled Purple &amp; yellow Sweater</h6>
      <p>
        Upcycled and natural handspun wool <br />
        with diamond-pattern design sweater
      </p>
      <p>$79.95</p>
    </div>
  </div>
</main>
</>
    );
};

export default Pieces;

// import React from 'react';
// import '../styles/Pieces.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Sweater1 from '../product-sweaters/sweater1.png';
// import Sweater2 from '../product-sweaters/sweater2.png';
// import Sweater3 from '../product-sweaters/sweater3.png';
// import Sweater4 from '../product-sweaters/sweater04.png';
// import Sweater5 from '../product-sweaters/sweater5.png';
// import Sweater6 from '../product-sweaters/sweater6.png';
// import Sweater7 from '../product-sweaters/sweater7.png';
// import Sweater8 from '../product-sweaters/sweater008.png';
// import Sweater9 from '../product-sweaters/sweater9.png';
// import Sweater10 from '../product-sweaters/sweater10.png';
// import Sweater11 from '../product-sweaters/sweater11.png';
// import Sweater12 from '../product-sweaters/sweater12.png';

// function Pieces() {
//   const products = [
//     { id: 1, title: 'Warm White Sweater', description: 'Wool cableknit turtleneck sweater with adjacent stitching', price: '$39.99', image: Sweater1 },
//     { id: 2, title: 'Auburn Brown Sweater', description: 'Knit-made crocheted rustic geometric cropped sweater', price: '$24.99', image: Sweater2 },
//     { id: 3, title: 'Emerald Green Sweater', description: 'Chunky loose-knit sweater with ribbed neckline and cuffs', price: '$44.95', image: Sweater3 },
//     { id: 4, title: 'Speckled Blue & Orange Sweater', description: 'Upcycled and natural handspun wool geometric pattern thick sweater', price: '$79.95', image: Sweater4 },
//     { id: 5, title: 'Taupe Tan Sweater', description: 'Cotton-soft wool blend with an intricate cable knit stitch sweater', price: '$39.99', image: Sweater5 },
//     { id: 6, title: 'Burnt Umber Brown & Black Sweater', description: 'Rounded Crew neck adorned in vintage geometric pattern oversized cable sweater', price: '$64.99', image: Sweater6 },
//     { id: 7, title: 'Periwinkle Purple Sweater', description: 'Cottonlightweight multi-stripe, space-dyed colorful sweater', price: '$24.95', image: Sweater7 },
//     { id: 8, title: 'Maroon Red Sweater', description: 'Chunky weaved-pattern, ribbed oversized turtleneck sweater', price: '$36.99', image: Sweater8 },
//     { id: 9, title: 'Dusty Grey Sweater', description: 'Vintage multicolor geometric sweater', price: '$29.95', image: Sweater9 },
//     { id: 10, title: 'Crimson Red Jumper Sweater', description: 'Vintage 90\'s coogi holiday style vibrant verticle stripe coloured sweater', price: '$59.99', image: Sweater10 },
//     { id: 11, title: 'Ash White Sweater', description: 'Asymmetrical hemline cropped turtleneck sweater', price: '$32.99', image: Sweater11 },
//     { id: 12, title: 'Speckled Purple & Yellow Sweater', description: 'Upcycled and natural handspun wool with diamond-pattern design sweater', price: '$79.95', image: Sweater12 },
//   ];

//   return (
//     <>
//       <main>
//         <div className="container">
//           <div className="row">
//             {products.map((product) => (
//               <div key={product.id} className="col-md-4">
//                 <div className="thumbnail card">
//                   <div className="img-event">
//                     <img className="group list-group-image img-fluid" src={product.image} alt={product.title} />
//                   </div>
//                   <div className="caption card-body">
//                     <h4 className="group card-title inner list-group-item-heading">
//                       {product.title}
//                     </h4>
//                     <p className="group inner list-group-item-text">
//                       {product.description}
//                     </p>
//                     <div className="row">
//                       <div className="col-6">
//                         <p className="lead">
//                           {product.price}
//                         </p>
//                       </div>
//                       <div className="col-6">
//                         <a className="btn btn-success" href="/">
//                           Add to cart
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

// export default Pieces;

