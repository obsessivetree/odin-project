
    const main = document.querySelector("main");
    
    // div.textContent = "hello";
    function makeGrid(n=50){
        if (main.firstChild){
            while (main.firstChild){
                main.removeChild(main.lastChild)
            }
        }
        main.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
        main.style.gridTemplateRows = `repeat(${n}, 1fr)`;
        for (let i = 0; i < n**2; i++){
            const div = document.createElement('div');
            div.addEventListener('mouseover', (e) => {e.target.classList.add("active")} )
            main.appendChild(div);
        }
    }
    makeGrid();
    
    const colorBtn = document.querySelector("#color-btn");
    const resetBtn = document.querySelector("#reset-btn");
    const randomBtn = document.querySelector("#random-btn");
    const fadeBtn = document.querySelector("#fade-btn");
    

    resetBtn.addEventListener('click', ()=> {
        do{
            var dimensions = parseInt(prompt("Dimensions (1-100): ", "50"));
        } while (isNaN(dimensions) || dimensions > 100 || dimensions < 1);
        makeGrid(dimensions)
    })

    const black = 'rgb(0, 0, 0)';
    const red = 'rgb(255, 0, 0)';
    const green = 'rgb(0, 255, 0)';
    const blue = 'rgb(0, 0, 255)';
    const magenta = 'rgb(255, 0, 255)';
    const cyan = 'rgb(0, 255, 255)';
    const yellow = 'rgb(255, 255, 0)';

    const colors = [black, red, green, blue, magenta, cyan, yellow];


    // colorBtn.addEventListener('click', function changeColor(e){
    //     colors.forEach(()=>{
    //         if ()
    //     })
    // })