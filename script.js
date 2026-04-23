const button = document.querySelector("button");

button.addEventListener("click", () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("error-border");
      input.placeholder = "";
      input.nextElementSibling.style.display = "block";
    } else {
      if (input.type === "email") {
        emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        if (!input.value.match(emailPattern)) {
          input.classList.add("error-border-red");
          input.nextElementSibling.textContent =
            "Looks like this is not an email";
          input.nextElementSibling.style.display = "block";
        } else {
          input.classList.remove("error-border");
          input.nextElementSibling.style.display = "none";
        }
      } else {
        input.classList.remove("error-border");
        input.nextElementSibling.style.display = "none";
      }
    }
  });
});
