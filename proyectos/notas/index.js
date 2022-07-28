const root = document.getElementById("root");
const menu_add = document.getElementById("menu_add");
const msg = document.getElementById("cancel");

let btn = document.getElementById("btn");
    btn_add = document.getElementById("an"),
    fx = document.getElementById("fx"),
    btn_cb = document.getElementById("btn_cb");

let imputs_C = document.querySelectorAll('input');

let imputs_C2 = document.querySelectorAll('textarea');

  


    
    

var divs = 0


btn_cb.addEventListener("click", function(){


    menu_add.classList.remove("open");
    fx.classList.remove("open2")
    msg.style.opacity = "0%";
    imputs_C.forEach(input => input.value = '');
    imputs_C2.forEach(textarea => textarea.value = '');
    
    const checkBox = document.getElementById('check1')
    checkBox.checked = false

})




btn_add.addEventListener("click", function(){

    menu_add.classList.add("open");
    fx.classList.add("open2")
    


})








btn.addEventListener("click" , function(){

    

    add()


})


function add() {

    let cont1 = document.getElementById('fname1').value
    let cont2 = document.getElementById('fname2').value
    


    if (cont1 != "" && cont2 != ""){

        let rotacion = getRandomArbitrary(-3,3)
        let carta = document.createElement("div");
        let btn_x = document.createElement("div");
        carta.classList.add("block");
        carta.style.transform = "rotate("+rotacion+"deg)";
        carta.setAttribute("id", divs);

        btn_x.classList.add("btn_x")

        btn_x.innerHTML = "x"

        btn_x.id = divs

        let titulo = document.createElement("h4")
        titulo.innerHTML = cont1

        let desc = document.createElement("p")
        desc.innerHTML = cont2

        

        if (getChecked() == true){

            console.log("esto es v")
            carta.style.backgroundColor = "rgb(255, 91, 91)"

        }

        else {

            console.log("esto es f")
            


        }

        btn.addEventListener("click" , function(){

            console.log(carta)


        })


        btn_x.addEventListener("click",function(e){
            root.removeChild(carta)
            
        })


        



        root.appendChild(carta);

        carta.appendChild(btn_x);

        carta.appendChild(titulo);
        
        carta.appendChild(desc);

        console.log(rotacion)

        divs = divs + 1

        menu_add.classList.remove("open");
        fx.classList.remove("open2")
        msg.style.opacity = "0%";

        imputs_C.forEach(input => input.value = '');
        imputs_C2.forEach(textarea => textarea.value = '');

        const checkBox = document.getElementById('check1')

        checkBox.checked = false

        
    }

    else {

        msg.style.opacity = "100%";




    }


    
  
    

}


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }




function getChecked() {
    const checkBox = document.getElementById('check1').checked;
    if (checkBox === true) {
      return checkBox
      } else {
        return checkBox
    }
  }
