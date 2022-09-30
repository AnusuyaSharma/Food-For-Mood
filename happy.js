const item=[`1.Veg Farmhouse Pizza <br>
			 2.Date and Walnut Cake <br>
			 3.Egg Noodles<br>
			 4.Mac-n-Cheese Macroni<br>
			 5.Potato and Mushroom Kebabs<br>
			 6.Honey Chilli Potato<br>
			 7.Cappuccino`, `1.Crispy Egg Fingers<br>
			 				 2.Egg Noodles <br>
			 				 3.French Toast with Blueberry<br>
			 				 4.Fruit Custard<br>
			 				 5.Hawaiin Pizza<br>
			 				 6.Penne Alfredo Pasta<br>
			 				 7.Ginger Dum Chai`, `1.Honey Chilli Potato<br>
			 				                     2.Mac-n-Cheese<br>
			 				                     3.Fruit Custard<br>
			 				                     4.Egg Tortilla Roll with Coriander Mint Mayo<br>
			 				                     5.Honey Chilli Potato<br>
			 				                     6.Potato and Mushroom Kebabs<br>
			 				                     7.Green Lemon Tea<br>`,`1.Crispy Egg Fingers<br>
			 				                                             2. Veg Farmhouse Pizza<br>
			 				                                             3.French Toast with Blueberry<br>
			 				                                             4.Honey Chilli Potato<br>
			 				                                             5.Egg Noodles<br>
			 				                                             6.Penne Alfredo Pasta<br>
			 				                                             7. Latte`];


document.querySelector(".button1").addEventListener("click",function(){
	var randomItem=random();
	document.querySelector(".text").innerHTML=item[randomItem];
})

function random(){
	return Math.floor(Math.random()*item.length);
}

document.querySelector(".button").addEventListener("click",function(){
	confetti.toggle();
})