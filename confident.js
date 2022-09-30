const item=[`1.Penne Alfredo Pasta <br>
			 2.Veg Farmhouse Pizza <br>
			 3.Egg Tortilla Roll<br>
			 4.Garlic Butter Baked Salmon<br>
			 5.Greek Spinach Pie<br>
			 6.Honey Mustard Salmon<br>
			 7.Latte`, `1.Pizza Quesdilla<br>
			 				 2.Salmon Patties<br>
			 				 3.Penne Alfredo Pasta<br>
			 				 4.Classic Deviled Egg<br>
			 				 5.Hoeny Mustard Salmon<br>
			 				 6.Veggie Burger<br>
			 				 7.Ginger Dum Chai`, `1.Garlic Butter Baked Salmon<br>
			 				                     2.Mac-n-Cheese Macroni<br>
			 				                     3.Veg Farmhouse Pizza<br>
			 				                     4.Egg Tortilla Roll<br>
			 				                     5.Pizza Quesdilla<br>
			 				                     6.Beef and Noodle Stir Fry<br>
			 				                     7.Hot Chocolate Coffee<br>`,`1.Salmon Pasta With Parmesan Sauce<br>
			 				                                             2. Veggie Burger<br>
			 				                                             3.Classic Deviled Egg<br>
			 				                                             4.Potato and Mushroom Kebabs<br>
			 				                                             5.Penne Alfredo Pasta<br>
			 				                                             6.Greek Spinach Pie<br>
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