//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'


//resolve // QUESTION 1 here
let newDiv = document.createElement('div');
let newId = document.getElementById('a-1');
newId.appendChild(newDiv);
newDiv.classList.add('square');

newDiv.addEventListener('click', () => {
    if (newDiv.innerText === 'x') {
        newDiv.innerText = 'o'
    } else {
        newDiv.innerText = 'x'
    }
})



//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];
let dropDown = document.createElement('select');
for (let i = 0; i < colors.length; i++){
    let option = document.createElement('option');
    option.value = colors[i];
    option.innerText = colors[i];
    dropDown.appendChild(option)
}
//console.log(dropDown);

let button = document.createElement('button');
button.innerText = ('Remove Selected Option');

button.addEventListener ('click', () =>{
    let select = document.querySelector('select');
    let options = select.children;

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === select.value) {
            select.removeChild(options[i])
        }
    }
})

document.getElementById('a-2').appendChild(dropDown);
document.getElementById('a-2').appendChild(button);


//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculate_sphere = () =>{
    let radius = document.getElementById('radius').value;
    radius = Math.abs(radius); 

let volume = Math.pow(radius, 3) * Math.PI * (4/3);
let area = Math.pow(radius, 2) * Math.PI * 4;

volume = volume.toFixed(4);
document.getElementById('volume').value = volume;
document.getElementById('area').value = area;
return false; 
 }

window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 
for (let i = 0; i < 3; i++) {
    let button = document.createElement('button');
    button.innerText = `Hide/Display Question ${i + 1}`;
    button.addEventListener('click', () => {
        if (document.getElementById(`a-${i + 1}`).display === 'none') {
            document.getElementById(`a-${i + 1}`).style.display = 'block'
        } else {
            document.getElementById(`a-${i + 1}`).style.display = 'none'
        }
     })

    document.getElementById('a-4').appendChild(button)
}
//resolve // QUESTION 4 here
