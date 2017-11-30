

var items =[{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];
// 

for (var i=0; i<items.length; i++){
	console.log(items[i].product);
	console.log(items[i].description);
	console.log(items[i].price);

	var itemBox = document.createElement("div");
	itemBox.className = "container";
	document.body.appendChild(itemBox);

	var productBox = document.createElement("div");
	productBox.className = "stuff";
	productBox.innerHTML = items[i].product;
	itemBox.appendChild(productBox);

	var descriptionBox = document.createElement("div");
	descriptionBox.className = "dBox";
	descriptionBox.innerHTML = items[i].description;
	productBox.appendChild(descriptionBox);	

	var priceBox = document.createElement("div");
	priceBox.className = "pBox";
	priceBox.innerHTML = items[i].price;
	itemBox.appendChild(priceBox);
}


var pPro = document.getElementsByClassName("stuff");
console.log(pPro);
for(var i = 0; i<pPro.length; i++){
  pPro[i].addEventListener("click", showDescription);
  
}

function showDescription(){
  console.log("test");
  
  var descriptions = this.querySelectorAll(".dBox")[0];
  if(descriptions.style.display === "none"){
    descriptions.style.display = "block";
  }else{
    descriptions.style.display = "none";
  }
}