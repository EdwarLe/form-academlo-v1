// const btnSend = document.querySelector("#btnSend");
// const userForm = document.querySelector(".userForm");
// const list = document.querySelector(".list");

// userForm.addEventListener("submit", (e) => {
//   let users = [];
//   e.preventDefault();

//   const userName = e.target.userName.value.trim().toLowerCase();
//   const userMail = e.target.userMail.value.trim().toLowerCase();
//   const userPass = e.target.userPass.value.trim();
//   const userConfPass = e.target.userConfPass.value.trim();

//   if (!userName || !userMail || !userPass || !userConfPass)
//     return Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Something went wrong!",
//       footer: "<h2>Please fill all the fields</h2>",
//     });

//   if (userPass !== userConfPass)
//     return Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Something went wrong!",
//       footer: "<h2>Passwords do not match</h2>",
//     });

//   users.push(`<div class="list__user">
//                     <h3>Name: ${userName}</h3>
//                     <p>Email: ${userMail}</p>
//                     <p>Password: ${userPass}</p>
//                     </div>`);

  

// localStorage.setItem("perfil", JSON.stringify(users))
// console.log(users)

// list.innerHTML += users;

//   userForm.reset();
// });

// let perfil = JSON.parse(localStorage.getItem("perfil"))

// console.log(perfil);

document.querySelector("#btnSend").addEventListener("click", saveUser)
printUsers ()

function saveUser(event) {
  const userForm = document.querySelector(".userForm")
event.preventDefault()
  let sName = document.querySelector("#userName").value.trim().toLowerCase();
      sMail = document.querySelector("#userMail").value.trim().toLowerCase();
      sPass = document.querySelector("#userPass").value;
      sConfPass = document.querySelector("#userConfPass").value;
  addUserToSystem(sName, sMail, sPass, sConfPass)
  printUsers ()
  userForm.reset()
}

function printUsers () {
  let listUser = getUserList();
  let list = document.querySelector(".list");

  list.innerHTML = ""

  for(let i = 0; i < listUser.length; i++) {
    list.innerHTML += `<div class="list__user">
                         <h3>Name: ${listUser[i].name}</h3>
                         <p>Email: ${listUser[i].email}</p>
                         <p>Password: ${listUser[i].password}</p>
                         </div>`
  }
}
