
/*selettori*/

let els = document.querySelectorAll('.item-colored');
//el[0].innerHTML = "nuovo testo";



for (var el of els) {
    console.log(el.innerText);
}

let btn = document.querySelector('button');
let list = document.querySelector('ul');

btn.addEventListener('click', function(){
    console.log("ho cliccato!");
    list.classList.toggle("red");
});





let body = document.querySelector('body');

document.addEventListener('scroll', function(e){
    if(window.scrollY > 200){

        body.classList.add("scrolled");

    } else {
        body.classList.remove("scrolled")
    }
});


let items = document.querySelectorAll('li');

for (let item of items) {
    item.addEventListener('click', function(){
        this.classList.toggle("red");
        console.log(this)
    });
}














let obj = {
    name: "andrea",   //proprietà e valore
    age: 36,
    married: false,
    cardiomax: function(){       //metodo
        console.log(220 - this.age);
    }
}

obj.cardiomax();
console.log(obj.name);

let objs = [{
    name: "andrea",   //proprietà e valore
    age: 36,
    married: false,
    cardiomax: function(){       //metodo
        console.log(220 - this.age);
    }
},
{
    name: "giovanni",   //proprietà e valore
    age: 26,
    married: false,
    cardiomax: function(){       //metodo
        console.log(220 - this.age);
    }
}];






/*  -----------------------------------------------------------------------------------------------
  Scroll to
--------------------------------------------------------------------------------------------------- */
let links = document.querySelectorAll('.menu li a');

links.forEach((link, i) => {
    
    link.addEventListener('click', function(event){
        event.preventDefault();

        let selector = this.getAttribute("href");
        console.log(selector);

        let selectorElement = document.querySelectorAll(selector);
        console.log(selectorElement[0].offsetTop);

        window.scroll({
            top: selectorElement[0].offsetTop,
            behavior: "smooth"
        })

    });

});