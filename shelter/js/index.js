let burger = document.querySelector(".burger")
let burgerDark = document.querySelector(".burger-dark")
let menu = document.querySelector(".nav-menu")
let burgerBlackout = document.querySelector(".burger-blackout")
if(burger){
    burger.addEventListener("click", function (){
        if(burger.className === "burger burger_active"){
            burger.className = "burger"
            menu.className = "nav-menu"
            burgerBlackout.className = "burger-blackout"
        }else{
            burger.className = "burger burger_active"
            menu.className = "nav-menu nav-menu_burger"
            burgerBlackout.className = "burger-blackout_active"
        }
    })
}else{
    burgerDark.addEventListener("click", function (){
        if(burgerDark.className === "burger-dark burger-dark_active"){
            burgerDark.className = "burger-dark"
            menu.className = "nav-menu"
            burgerBlackout.className = "burger-blackout"
        }else{
            burgerDark.className = "burger-dark burger-dark_active"
            menu.className = "nav-menu nav-menu_burger"
            burgerBlackout.className = "burger-blackout_active"
        }
    })
}
