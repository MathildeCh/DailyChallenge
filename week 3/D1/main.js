var container = document.getElementById("root");

var h1 = document.createElement("H1");
h1.innerHTML = "My shopping list";                   
container.appendChild(h1);  

var h3 = document.createElement("H3");
h3.innerHTML = "What do you need to buy?";                   
container.appendChild(h3);

var input = document.createElement("INPUT");
input.innerHTML = "add items";                   
container.appendChild(input);  

var list = document.createElement("UL");              
container.appendChild(list);  

var btn = document.createElement("BUTTON");   
btn.innerHTML = "ADD";                   
container.appendChild(btn);  

var btn2 = document.createElement("BUTTON");   
btn2.innerHTML = "Clear All";                   
container.appendChild(btn2);  

btn.addEventListener("click", function(){
	let item = input.value

	if (item == "") {
		return;
	}

	
	let list_item = document.createElement("li");
	list_item.innerText = item;
	list.appendChild(list_item);
	input.value = "";
});

btn2.addEventListener("click", function (){
	location.reload();
});

function done() {
  var container = document.getElementById("root");
  if (x.innerHTML === "Hello") {
    x.innerHTML = "Swapped text!";
  } else {
    x.innerHTML = item;
  }
}

var done = document.querySelector("ul");
done.addEventListener("click", function(done) {
  if (done.tagName === "LI") {
    done.classList.toggle('checked');
  }
});