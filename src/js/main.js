import { items } from './vendor';
import $ from 'jquery';




var products = items.results;

// console.log('prod: ', prod);

var html = $('.images');

products.forEach( function (x) {
  var prodTem = `
     <div class='hold'>
       <img class='icon1' src='http://i.imgur.com/mspWLsN.png'>
       <img class='icon2' src='http://i.imgur.com/4U7GDVn.png'>
       <img class='prod' src='${x.Images[0].url_170x135}'>
       <div class='info'>
       <p class='titl'> ${x.title} </p>
       <span class='ln'> ${x.Shop.login_name} </span>
       <span class='price'> $${x.price} </span>
       </div>
     </div>

       `;

       console.log(prodTem);

  html.append(prodTem);
});
