const item=[`1.Spinach Cheese and Corn Roll <br>
			 2.Beetroot Salad <br>
			 3.Crispy Egg Fingers<br>
			 4.Garlic Butter Baked Salmon<br>
			 5.Dahi ke  Kebabs<br>
			 6.Honey BBQ Chicken Wings<br>
			 7.Mexican  Vanilla Milkshake`, `1.Crispy Egg Fingers<br>
			 				 2.Egg Tortilla Roll with Coriander Mint<br>
			 				 3.Spinach Cheese and Corn Roll<br>
			 				 4.Peri Peri Burger<br>
			 				 5.Lemon Chicken<br>
			 				 6.French Toast with Blueberry<br>
			 				 7.Chocolate and Date Mousse`, `1.Honey BBQ Chicken Wings<br>
			 				                     2.Spinach Cheese and Corn Roll<br>
			 				                     3.Peri Peri Burger<br>
			 				                     4.Crispy Egg Fingers<br>
			 				                     5.Caesar Salad<br>
			 				                     6.Dahi ke Kebabs<br>
			 				                     7.Boozy Banana Milkshake<br>`,`1.Lemon Chicken<br>
			 				                                             2. Caesar Salad<br>
			 				                                             3.French Toast with Blueberry and Cream Cheese<br>
			 				                                             4.Honey BBQ Chicken Wings<br>
			 				                                             5.Crispy Egg Fingers<br>
			 				                                             6.Soya Malai Chaap<br>
			 				                                             7. Gajar Ka Halwa`];


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