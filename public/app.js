const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => submitForm(e));

function submitForm(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    email,
    password,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      // window.location.href = data;
      console.log("data", data);
    })
    .catch((err) => console.log("err", err));

  console.log("email and password", email, password);
}
