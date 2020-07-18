let viewName = document.getElementById("TA");
let  name = document.getElementById("toWho").value;
viewName.innerHTML = '';
setInterval(()=>{
    name = document.getElementById("toWho").value;
    if(name){
        viewName.innerHTML = name;
    }else{
        viewName.innerHTML = '';
    }
}
,100);