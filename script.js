let chekboxLeft = document.querySelectorAll(".checkbox-left");

chekboxLeft.forEach(checkbox => {
    checkbox.addEventListener("click", (e) => {
        checkbox.classList.toggle("checked");
    })
})