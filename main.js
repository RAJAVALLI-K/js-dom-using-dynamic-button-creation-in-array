let containerDiv = document.querySelector(".container");
let array = ['red', 'yellow', 'blue', 'green', 'pink', 'skyblue', 'purple', 'black', 'white'];
array.forEach(function (arrayElement, index) {
    let buttons = document.createElement('button');
    buttons.className = array[index];
    buttons.innerText = arrayElement;
    buttons.style.color = "grey";
    buttons.style.padding = "10px";
    buttons.style.margin = "10px";
    containerDiv.append(buttons);
});
