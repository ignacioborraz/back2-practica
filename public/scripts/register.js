document.querySelector("#register").addEventListener("click", async () => {
  try {
    const data = {
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    };
    const nickname = document.querySelector("#nickname");
    const avatar = document.querySelector("#avatar");
    if (nickname.value) {
      data.nickname = nickname.value;
    }
    if (avatar.value) {
      data.avatar = avatar.value;
    }
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    let response = await fetch("/api/users/register", opts);
    response = await response.json();
    //console.log(response);
    if (response.error) {
      alert(response.error);
    } else {
      location.replace("/login");
    }
  } catch (error) {
    alert(error.error);
  }
});
