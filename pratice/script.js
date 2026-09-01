async function getUser() {

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  const data = await response.json();

  console.log(data);

  document.getElementById("name").innerText =
    "Name: " + data.name;

  document.getElementById("email").innerText =
    "Email: " + data.email;
  document.getElementById("phone").innerText =
    "Phone: " + data.phone;
  document.getElementById("id").innerText =
    "ID: " + data.id;
}