
    const main = document.querySelector("main");
    
    // div.textContent = "hello";
    function makeGrid(n=25){
        if (main.firstChild){
            while (main.firstChild){
                main.removeChild(main.lastChild)
            }
        }
        main.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
        main.style.gridTemplateRows = `repeat(${n}, 1fr)`;
        for (let i = 0; i < n**2; i++){
            const div = document.createElement('div');
            main.appendChild(div);
        }
    }
    
    
    function randomColor() {
        return (colors[Math.floor(Math.random()*colors.length)])
    }

    function gridColor(color='black', random=false){
        let divs = document.querySelectorAll("div");
        divs.forEach(div => {
            // div.classList.remove(currentColor);
            div.addEventListener('mouseover', (e) => {
                // e.target.classList.remove(currentColor);
                // console.log(e.target.classList)
                // console.log(currentColor);
                if (random === false) {
                    e.target.className = color
                } else {
                    e.target.className = randomColor();
                }
            });
            // console.log(color);
            currentColor = color;
            colorBtn.textContent = `Color: ${color}`
    })};

    const colorBtn = document.querySelector("#color-btn");
    const resetBtn = document.querySelector("#reset-btn");
    const randomBtn = document.querySelector("#random-btn");
    const fadeBtn = document.querySelector("#fade-btn");
    
    const colors = ['black', 'red', 'green', 'blue', 'magenta', 'cyan', 'yellow'];

    var currentColor;

    makeGrid();
    gridColor();

    resetBtn.addEventListener('click', ()=> {
        do{
            var dimensions = parseInt(prompt("Dimensions (1-100): ", "25"));
        } while (isNaN(dimensions) || dimensions > 100 || dimensions < 1);
        makeGrid(dimensions)
        gridColor()
        randomBtn.textContent = "Random: off"
    })

    randomBtn.addEventListener('click', () => {
        if (randomBtn.textContent === "Random: off"){
            gridColor('black', random=true);
            randomBtn.textContent = "Random: on"
        } else {
            randomBtn.textContent = "Random: off"
            gridColor(currentColor, random=false)
        }
    });

    colorBtn.addEventListener('click', () => {
        randomBtn.textContent = "Random: off"
        for (let i = 0; i < colors.length; i++){
            if (colors[i] === currentColor) {
                if (i+1 < colors.length){
                    var color = colors[i+1];
                    break
                }
            } else {
                color = colors[0]
            }
        }

        gridColor(color);
        currentColor = color;
        // console.log(randColor)
        
    });