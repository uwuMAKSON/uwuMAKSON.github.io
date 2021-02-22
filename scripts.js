let button = document.querySelector('#button')
let input1 = document.querySelector('#input1')
let massege = document.querySelector('#message')
let color = document.querySelector('#color')
let chat = document.querySelector('#chat')


button.style.padding = "10px 20px"
button.style.margin = "10px 10px"
input1.style.padding = "10px 20px"
input1.style.margin = "10px 10px"
message.style.margin = "10px 10px"
message.style.padding = "10px 20px"
color.style.margin = "10px 10px"
message.style.color = "red"

button.addEventListener("mousedown", function () {
    let div = document.createElement('div')
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    div.append(span1)
    div.append(span2)
    chat.append(div)
    span1.innerText = input1.value + ": "
    span2.innerText = message.value + ": "
    span1.style.color = color.value
})











































fetch("https://it-academy1-default-rtdb.firebaseio.com/chat.json", {
    method: "POST",
    body: JSON.stringify({
        input1: input1.value,
        message: message.value,
        color: color.value
    })
});