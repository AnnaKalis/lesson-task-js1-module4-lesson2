const url = "https://api.noroff.dev/api/v1/old-games/2";

const resultsContainer = document.querySelector(".details");

async function makeApiCall() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    resultsContainer.innerHTML = "";

    const newHtml = document.createElement("div");
    newHtml.innerHTML = `
    <h2 class="name">${json.name}</h2>
    <p class="status">${json.description}</p> 
    <img class="image" src="${json.image}" alt="${json.name}" />`;
    resultsContainer.appendChild(newHtml);
  } catch (error) {
    console.log(error);
  }
}

makeApiCall();
