const item=[`1.French Toast with Blueberry and Cream Cheese <br>
			 2.Garlic Butter Baked Salmon <br>
			 3.Butter Chicken Pizza<br>
			 4.Banana Pancakes<br>
			 5.Kathi Roll<br>
			 6.Parsi Egg Bhurji<br>
			 7.Hot Chocolate Coffee`, `1.Caesar Salad<br>
			 				 2.Chicken Tikka Pizza<br>
			 				 3.French Toast with Blueberry and Cream Cheese<br>
			 				 4.Honey BBQ Chicken Wings<br>
			 				 5.Chocolate Pudding<br>
			 				 6.Caesar Salad<br>
			 				 7.Latte`, `1.Lemon Chicken<br>
			 				                     2.Salmon Pasta in Parmesan Sauce<br>
			 				                     3.Lemin Chicken<br>
			 				                     4.Banana Pancakes<br>
			 				                     5.French Toast with Blueberry<br>
			 				                     6.Caesar Salad<br>
			 				                     7.Chocolate and Date Mousse<br>`,`1.Butter Chicken Pizza<br>
			 				                                             2. Salmon Pasta in Parmesan Sauce<br>
			 				                                             3.Lemon Chicken<br>
			 				                                             4.Honey BBQ Chicken Wings<br>
			 				                                             5.Parsi Egg Bhurji<br>
			 				                                             6.Chocolate and Date Mousse<br>
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