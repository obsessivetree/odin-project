export function contact(main){
    const contactElement           = document.createElement("div");



    contactElement.innerHTML = "<h2>Contact Us! <p style='font-size:1rem'>(Unless it's a complaint)</p></h2><h3>Phone:</h3><h4><a href='tel:+15555555555'>+1 (555) 555-5555</a></h4><h3>Email:</h3><h4><a href='mailto:email@emailyemail.mail'>email@emailyemail.mail</a></h4>";
    main.innerHTML           = "";
    main.appendChild(contactElement);
}