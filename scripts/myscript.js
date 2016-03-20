function answer1(){
			var total = 0;
			var x = document.getElementById("Q1_input").value;
			for(var i = 3; i < x; i++){
				if((i % 3 === 0) || (i % 5 === 0)){
					total += i;
				}
			}
			document.getElementById("Q1_input").value = total;
		}
		
	
		
		function answer2(){
			var a = 0, b = 1, f =1, total = 0;
			var x = document.getElementById("Q2_input").value;
			while(f <= x){
				if(f % 2 == 0){
					total += f;
				}
				f = a + b;
				a = b;
				b = f;
			}
			return total;
		}
		
		function answer3(){
			var x = document.getElementById("Q3_input").value;
			//Divides number until can only be divided by itself, resulting in largest prime
			for(var i = 2; i < x; i++){
				while(x % i === 0){
					x /= i;
				}
			}
			return i;
		}
		
		function reversed_string(string){
			var reversed = "";
			for(var i = string.length-1; i >=0; i--){
				reversed += string[i];
			}
			return reversed;
		}
		
		function answer4(){
			var string = "";
			var string_rev = "";
			var maxi = 0;
			for(var x = 100; x <1000; x++){
				for(var y = 100; y < 1000; y++){
					var multiplied = x*y;
					string = multiplied.toString();
					string_rev = reversed_string(string);
					if(string === string_rev){
						var num = multiplied;
					}
					if(num > maxi){
						maxi = num;
					}
				}
			}
			return maxi;			 
		}
		
		function answer5(){
			var mini = 0;
			for(var k = 2; k < 232000000000; k++){
				if(k%16 === 0 && k%9 === 0 && k%5 === 0 && k%7 === 0 && k%11 === 0 && k%13 === 0 && k%17 === 0 && k%19 === 0){
					return k;
				}
			}
		}
				
		document.getElementById("Q1Button").onclick = function(){
			answer1(); 
		}
		
		document.getElementById("Q2Button").onclick = function(){
			document.getElementById("Q2_input").value = answer2();
		}
		
		document.getElementById("Q3Button").onclick = function(){
			document.getElementById("Q3_input").value = answer3();
		}
		document.getElementById("Q4Button").onclick = function(){
			document.getElementById("Q4_input").value = answer4();
		}
		document.getElementById("Q5Button").onclick = function(){
			document.getElementById("Q5_input").value = answer5();
		}