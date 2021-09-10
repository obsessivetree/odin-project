
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

    function gridColor(color='black', random=false, fade=false){
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

                // if (fade === true) {
                //     let currentOpacity = e.target.style.opacity;
                //     console.log(currentOpacity);
                //     if (currentOpacity !== ""){
                //         e.target.style = `opacity: ${parseInt(currentOpacity) + 0.1};`;
                //         console.log(e.target.style)
                //     } else {
                //         e.target.style = 'opacity: 0.1;';
                //         console.log(e.target.style.opacity)

                //     }
                // } else {
                //     e.target.style.opacity = '';
                // }
            });
            // console.log(color);
            currentColor = color;
            colorBtn.textContent = `Color: ${color}`;
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
            var dimensions = parseInt(prompt("Dimensions (1-75): ", "25"));
        } while (isNaN(dimensions) || dimensions > 75 || dimensions < 1);
        makeGrid(dimensions)
        gridColor()
        randomBtn.textContent = "Random: off"
        fadeBtn.textContent = "Fade: off"
    })


    randomBtn.addEventListener('click', () => {
        
        if (randomBtn.textContent === "Random: off"){
            gridColor('black', random=true, fade=false);
            randomBtn.textContent = "Random: on"
        } else {
            randomBtn.textContent = "Random: off"
            gridColor(currentColor, random=false, fade=false)
        }
        fadeBtn.textContent = "Fade: off"
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
        if (fadeBtn.textContent === "Fade: on"){
            gridColor(color, random=false, fade=true)
           
        } else {
            gridColor(color, random=false, fade=false);
        }
        currentColor = color;
        // console.log(randColor)
    });



    fadeBtn.addEventListener('click', function(){
        if (fadeBtn.textContent === "Fade: off"){
            randomBtn.textContent = "Random: off";
            fadeBtn.textContent = "Fade: on";
            gridColor(currentColor, random=false, fade=true);


            let divs = document.querySelectorAll("div");
            divs.forEach(div => {div.addEventListener('mouseover', (e) => {
                
                let currentOpacity = getComputedStyle(e.target).getPropertyValue("opacity");
                console.log(currentOpacity);
                if (currentOpacity < "1"){
                    let newOpacity = parseInt(currentOpacity) + 0.1;
                    e.target.style = `opacity: ${newOpacity};`
                    console.log(currentOpacity)
                    console.log(getComputedStyle(e.target).getPropertyValue("opacity"))
                } else {
                    console.log(`It's seeing ${currentOpacity}`)
                    e.target.style = 'opacity: 0.1;';
                    console.log(e.target.style.opacity)

                }
            
        })})
        } else if (fadeBtn.textContent === "Fade: on"){
            fadeBtn.textContent = "Fade: off"
            gridColor(currentColor, random=false, fade=false)
        }
        

    });