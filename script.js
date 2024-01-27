fetch("https://valorant-api.com/v1/weapons")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayWeapon(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayWeapon(data) {
    for (let i = 0;i < data.data.length-1 ; i++ ){
      const weapon = data.data[i];
      const weaponDiv = document.getElementById("weapon"); 
      // weapon name
      const weaponName = weapon.displayName;
      const heading = document.createElement("h1");
      heading.innerHTML = weaponName;
      weaponDiv.appendChild(heading);
      // weapon image
      const weaponImg = document.createElement("img");
      weaponImg.src = weapon.shopData.newImage;
      weaponDiv.appendChild(weaponImg);
      
      // arrierre plan de la page
      // document.body.style.backgroundImage = "url('" + weapon.shopData.newImage + "')";
    }
  }