import $ from 'jquery';

let url = 'https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

let info = $.getJSON(url);
info.then(function(res){
  console.log(res);
});



let items = $('.items');
