let checkbox = document.getElementById("menu-btn");
const navClickables = document.querySelectorAll(".navClickables");
const unCheck = document.querySelector(".menu");

for (let dropDownOptions = 0; dropDownOptions < navClickables.length; dropDownOptions++) {
        navClickables[dropDownOptions].addEventListener("click", () => {
            checkbox.click();
        })
}