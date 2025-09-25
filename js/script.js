// Example: simple form validation
function validateForm(event) {
  const inputs = document.querySelectorAll("form input");
  for (let input of inputs) {
    if (input.value.trim() === "") {
      alert("Please fill out all fields!");
      event.preventDefault();
      return false;
    }
  }
  return true;
}
