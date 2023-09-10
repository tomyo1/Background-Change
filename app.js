// function --> dahij ashiglah bolomjtoi code tsugluulga
function restart(){
    console.log("game restarted");
    console.log("hellO");
}
restart();
restart();
restart();

function hello(name, age){
console.log("Snu, minii neriig " + name);
console.log("minii nas " + age)
}
hello("Tomyo" ,16);
hello("Emujin",16);
function sum (a, b){
    console.log(a+b);
}
sum(15, 20);
sum(133, 43);

// ihiig oloh:
function ih(c, d){
    if(c>d){
        console.log(c);
    }
    if(d>c){
        console.log(d);
    }
}
ih(66, 32);
ih(66, 388);

//project ehlej bn
var body = document.getElementsByTagName('body')[0];
console.log(body);
var colors= ['pink', 'blueviolet', 'plum', 'violet',  'palevioletred'];
var btn = document.getElementsByTagName('button')[0];
//random = Math.floor(Math.random()*10); random too songogdoh
var i = -1;
function color(){ 
    random = Math.floor(Math.random()* (colors.length-1));
    i++ ;
    body.style.backgroundColor=colors[random] ;
    btn.innerText = colors[random];
    if(i >= colors.length-1){
        i = -1;
    }
}