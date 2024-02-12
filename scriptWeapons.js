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
    // weapon_images(data);
    // weapon_names(data);
    // console.log(weapon_names(data));
    // console.log(weapon_images(data))

    weapon_name_image(data);
    console.log(weapon_name_image(data))

  })
  .catch((error) => console.error("FETCH ERROR:", error));


      function weapon_name_image(data){
        for (let i = 0;i < data.data.length-1 ; i++ ){
    
          const weapon = data.data[i];
    
    
         function weapon_I (i){
          const img = document.createElement("img");
          img.src = i;
          img.classList.add("image-grid");
    
          return img
        }

          function weapon_N (n){
          const h1=document.createElement("h1");
          h1.appendChild(document.createTextNode(n));
          
          return h1
        }

        function weapon_description(){
          const description=document.createElement("p");
          //weapon.category.substr ==>commencer ver un point précis
          description.appendChild(document.createTextNode("Category:"));
          description.appendChild(document.createTextNode(weapon.category.substr(21,weapon.category.length)));
          //comment faire un saut de ligne?
          description.appendChild(document.createTextNode(",Fire Rate:"));
          description.appendChild(document.createTextNode(weapon.weaponStats.fireRate));
          
          description.appendChild(document.createTextNode(",Magasine size:"));
          description.appendChild(document.createTextNode(weapon.weaponStats.magazineSize));
          
          description.appendChild(document.createTextNode(",Reload time:"));
          description.appendChild(document.createTextNode(weapon.weaponStats.reloadTimeSeconds));
          description.appendChild(document.createTextNode(" secondes"));
          
          description.appendChild(document.createTextNode(",Wall penetration:"));
          description.appendChild(document.createTextNode(weapon.weaponStats.wallPenetration.substr(29,weapon.weaponStats.wallPenetration.length)));
          
          
        
          return description
        }
    
         function weapon_div_NI (n,i){
          const divI=document.createElement("span");
          divI.appendChild(weapon_I(i))
    
          const divI2=document.createElement("span");
          divI2.classList.add("item1");
          divI2.appendChild(divI)
    
          const divN = document.createElement("div");
          divN.appendChild(weapon_N(n));
          divN.classList.add("item1-1");

          const divS = document.createElement("p1");
          divS.appendChild(weapon_description());
          divS.classList.add("p1");
          divN.appendChild(divS)
          

          return [divI2,divN]
          
        }
    
        const affichage = document.querySelector("#weapon_name_image");
        const t = weapon_div_NI(weapon.displayName,weapon.shopData.newImage);
        affichage.appendChild(t[0]);
        affichage.appendChild(t[1]);
        
        
      }
    }