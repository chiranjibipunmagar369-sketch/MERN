
async function animal() {
    const response=await fetch("https://random-animal-api.vercel.app/api/random-animal");
    const data=await response.json();

    console.log(data);

    document.getElementById("animal").innerText=data.city;

}