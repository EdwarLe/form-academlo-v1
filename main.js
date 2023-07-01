const btnSend = document.querySelector("#btnSend");
const userForm = document.querySelector(".userForm");
const list = document.querySelector(".list");

userForm.addEventListener("submit", (e) => {
  let users = "";
  e.preventDefault();

  const userName = e.target.userName.value.trim().toLowerCase();
  const userMail = e.target.userMail.value.trim().toLowerCase();
  const userPass = e.target.userPass.value.trim();
  const userConfPass = e.target.userConfPass.value.trim();

  if (!userName || !userMail || !userPass || !userConfPass)
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: "<h2>Please fill all the fields</h2>",
    });

  if (userPass !== userConfPass)
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: "<h2>Passwords do not match</h2>",
    });

  users = `<div class="list__user">
                    <h3>Name: ${userName}</h3>
                    <p>Email: ${userMail}</p>
                    <p>Password: ${userPass}</p>
                    </div>`;

  

localStorage.setItem("perfil", JSON.stringify(users))
let perfil = JSON.parse(localStorage.getItem("perfil"))
console.log(perfil);

list.innerHTML += perfil;

  userForm.reset();
});

function saveLocal (array) {

}
