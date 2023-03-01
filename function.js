let info = document.getElementById("info");
let person = document.getElementById("person");
let mail = document.getElementById("mail");
let phone = document.getElementById("phone");
let address = document.getElementById("address");

mail.addEventListener("mouseover", function () {
	info.innerText = "crisfgom@gmail.com";
	info.style.scale = "1.5";
	mail.addEventListener("mouseout", function (){
		info.innerText = "Cristian Gómez";
		info.style.scale = "1";
	})
});

person.addEventListener("mouseover", function () {
	info.innerText = "Cristian Gómez";
	info.style.scale = "1.5";
	person.addEventListener("mouseout", function (){
		info.innerText = "Cristian Gómez";
		info.style.scale = "1";
	})
});

phone.addEventListener("mouseover", function () {
	info.innerText = "3704-455464";
	info.style.scale = "1.5";
	phone.addEventListener("mouseout", function (){
		info.innerText = "Cristian Gómez";
		info.style.scale = "1";
	})
});

address.addEventListener("mouseover", function () {
	info.innerText = "San Michael 2345";
	info.style.scale = "1.5";
	address.addEventListener("mouseout", function (){
		info.innerText = "Cristian Gómez";
		info.style.scale = "1";
	})
});
