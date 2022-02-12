import './style.css';
import {welcome} from './welcome.js'
import {menu} from './menu.js';
import {contact} from './contact.js';

const app = (() => {

    const content    = document.getElementById("content");
    const header     = document.createElement("header");
    const nav        = document.createElement("nav");
    const navHome    = document.createElement("a");
    const navMenu    = document.createElement("a");
    const navContact = document.createElement("a");
    const main       = document.createElement("main");
    const footer     = document.createElement("footer");
        
    header.innerHTML     = "<h1>Awesome Taco Restaurant</h1>";
    navHome.innerHTML    = "Home";
    navMenu.innerHTML    = "Menu";
    navContact.innerHTML = "Contact";
    footer.innerHTML     = "Footer with some stuff in it."

    nav.appendChild(navHome);
    nav.appendChild(navMenu);
    nav.appendChild(navContact);
    header.appendChild(nav);
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);

    welcome(main);
    // menu(main);
    // contact(main)

    navHome.addEventListener("click", () => welcome(main))

    navMenu.addEventListener("click", () => menu(main))

    navContact.addEventListener("click", () => contact(main))
})();