class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown .dropdown-button");
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(".dropdown-content");
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      event.stopPropagation();
      this.toggleContent()
    })
  }

  toggleContent() {
    console.log("working")
    // Toggle the ".dropdown-hidden" class off and on
    this.content.style.left = "-300px";
    this.content.classList.toggle("dropdown-hidden");
    if (this.content.classList.contains("dropdown-hidden")) TweenLite.to(this.content, 1, { left: "-100px" });
    else TweenLite.to(this.content, 1, { left: 0 });

    const page = document.querySelector("body");
    page.addEventListener("click", () => {
        console.log("Event Listener")
        TweenLite.to(this.content, 1, { left: "-300px" });
  })
}
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
const dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));



