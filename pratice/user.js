async function getUser() {
    const response= await fetch("users.json")
    const data=await response.json();

    console.log(data);

    document.getElementById("name").innerText=data[0].name;
    document.getElementById("age").innerText=data[0].age;
    document.getElementById("address").innerText=data[0].address;
    document.getElementById("name").innerText=data[1].name;
    document.getElementById("age").innerText=data[1].age;
    document.getElementById("address").innerText=data[1].address;
    
}