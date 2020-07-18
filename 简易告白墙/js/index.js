let viewName = document.getElementById("TA");
let  name = document.getElementById("toWho").value;
viewName.innerHTML = '';
setInterval(()=>{
    name = document.getElementById("toWho").value;
    if(name!='' && name != undefined){
        viewName.innerHTML = name;
    }
}
,100);