export function welcome(main) {
    const welcomeElement     = document.createElement("div");
    welcomeElement.innerHTML = "<h2>Welcome!</h2><p>This is a great restaurant</p>";
    main.innerHTML           = "";
    main.appendChild(welcomeElement);    
}