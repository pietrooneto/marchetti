
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
    console.log(window.scrollY);
});






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



