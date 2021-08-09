const container = document.getElementById('container');

const redP = document.createElement('p');
redP.textContent = "Hey I'm red!";
redP.style = 'color:red;';
container.appendChild(redP)

const blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3!";
blueH3.style = 'color: blue;';
container.appendChild(blueH3);

const div =  document.createElement('div');
div.style = "background-color : pink; border : black 1px solid;";

const innerH1 = document.createElement('h1');
const innerP = document. createElement('p');
innerH1.textContent = "I'm in a div!";
innerP.textContent = 'Me too!';
div.appendChild(innerH1);
div.appendChild(innerP);
container.appendChild(div);

const button = document.createElement('button');
button.setAttribute('id', 'btn')
button.textContent = "button";
container.appendChild(button);
const btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {e.target.style.backgroundColor = 'blue'})