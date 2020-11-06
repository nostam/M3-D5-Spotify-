window.onload = function () {
  let loginBtn = document.querySelector(".login-spotify");
  let email = document.querySelectorAll(".input-group input")[0];
  let pwd = document.querySelectorAll(".input-group input")[1];
  loginBtn.addEventListener("click", function (event) {
    if (email.value === "demo" && pwd.value === "demo") {
      window.location.href = "./albums/albums.html";
    } else if (
      (email.value !== "" && pwd.value === "") ||
      (email.value !== "demo" && pwd.value !== "demo") ||
      (email.value = "" && pwd.value !== "demo")
    ) {
      let inputGrp = document.getElementsByClassName("input-group")[0];
      let alert = document.createElement("p");
      alert.innerText = "Username or password is invalid";
      alert.style.width = "100%";
      alert.style.marginTop = "1rem";
      // alert.style.color = "tomato";
      alert.className = "alert alert-danger";
      if (
        inputGrp.firstElementChild.innerText === "Email address or Username"
      ) {
        inputGrp.insertBefore(alert, inputGrp.firstElementChild);
      }
    }
  });
};
