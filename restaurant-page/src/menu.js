export function menu(main){
    const menuElement = document.createElement("div");
    const APPS        = document.createElement("div");
    const ENTREES     = document.createElement("div");
    const DESSERTS    = document.createElement("div");
    const MENU = {
        appetizers: {
            eloteApp: "<h4>Elotes - <em>$5</em></h4><p>Best version of corn.</p>",
            guacApp : "<h4>Chips N Guac - <em>$9</em></h4><p>Need I say more?</p>",
        },
        entrees: {
            tacosEntree  : "<h4>Tres Tacos - <em>$15</em></h4><p>The most awesomest tacos in the freaking world.</p>",
            burritoEntree: "<h4>Burrito Grande - <em>$14</em></h4><p>Our signature burrito with choice of: Asada, Carnitas, Al Pastor, or Pollo.</p>",
        },
        desserts: {
            flanDessert: "<h4>Flan - <em>$5</em></h4><p>Yummy bread jello, basically.</p>",
        },
    };

    APPS.innerHTML     = "<hr><h3>APPS</h3><hr>" + Object.values(MENU.appetizers).join('');
    ENTREES.innerHTML  = "<hr><h3>ENTREES</h3><hr>" + Object.values(MENU.entrees).join('');
    DESSERTS.innerHTML = "<hr><h3>DESSERTS</h3><hr>" + Object.values(MENU.desserts).join('');



    menuElement.innerHTML = "<h2>Menu!</h2>";
    menuElement.appendChild(APPS)
    menuElement.appendChild(ENTREES)
    menuElement.appendChild(DESSERTS)

    main.innerHTML = "";
    main.appendChild(menuElement);
}
