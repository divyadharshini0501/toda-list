var input=document.getElementById("one")
var ul=document.getElementById("list")

function add()
{
    var list=document.createElement("li")
    list.innerHTML=input.value+"<button onclick='del(event)'>Delete</button>"
    ul.append(list)
    input.value=""
}
function del(event)
{
    event.target.parentElement.remove()
}
