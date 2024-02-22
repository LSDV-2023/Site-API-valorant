fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);

    for (let i = 0; i < data.data.length; i++) {
      const agent = data.data[i];
      const affichage = document.querySelector("#agents");

      // Création de l'image de l'agent
      const img = document.createElement("img");
      img.src = agent.fullPortrait;
      img.classList.add("image-grid");

      // Création du titre de l'agent
      const h1 = document.createElement("h1");
      h1.appendChild(document.createTextNode(agent.displayName));

      // Création de la description de l'agent
      const description = document.createElement("p");
      description.appendChild(document.createTextNode(agent.description || "No description for the moment"));

      // Création du conteneur pour l'agent
      const container = document.createElement("div");
      container.classList.add("container");
      container.appendChild(img);
      container.appendChild(h1);
      container.appendChild(description);

      // Ajout du conteneur à la page
      affichage.appendChild(container);
    }
  })
  .catch((error) => console.error("FETCH ERROR:", error));
