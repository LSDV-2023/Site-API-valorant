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
        //préparer le texte et l'emplacement qui va avec chaque information qu'on va ajouté
        function weapon_description(c,fr,ms,rt,wp){
          const category=document.createElement("p");
          //weapon.category.substr ==>commencer ver un point précis
          category.appendChild(document.createTextNode("Category: "));
          category.appendChild(document.createTextNode(c.substr(21,c.length)));
          //comment faire un saut de ligne?
          //il faut créer à chaque fois un nouveau élément p et mettre dedans les informations qu'on veut
          const FireRate=document.createElement("p");
          FireRate.appendChild(document.createTextNode("Fire Rate: "));
          FireRate.appendChild(document.createTextNode(fr));

          const MagasineSize=document.createElement("p");
          MagasineSize.appendChild(document.createTextNode("Magasine size: "));
          MagasineSize.appendChild(document.createTextNode(ms));

          const ReloadTime=document.createElement("p");
          ReloadTime.appendChild(document.createTextNode("Reload time: "));
          ReloadTime.appendChild(document.createTextNode(rt));
          ReloadTime.appendChild(document.createTextNode(" secondes"));

          const WallPenetration=document.createElement("p");
          WallPenetration.appendChild(document.createTextNode("Wall penetration: "));
          WallPenetration.appendChild(document.createTextNode(wp.substr(29,wp.length)));
          
          
        
          return [category,FireRate,MagasineSize,ReloadTime,WallPenetration]
        }
        //on ajoute toutes les données qu'on veut on vérifiant qu'il correspondent paraport à la fonction
        const d = weapon_description(weapon.category,weapon.weaponStats.fireRate,weapon.weaponStats.magazineSize,
          weapon.weaponStats.reloadTimeSeconds,weapon.weaponStats.wallPenetration);
    
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
          // on utilise le 'for' pour éviter d'écrire tous les nombres et pour que les informations s'ajoute
          //automatiquement après avoir modifié la fonction 'weapon_decription()'
          for (let i in d){
            divS.appendChild(d[i]);
          } 
          divS.classList.add("p1");
          divN.appendChild(divS)
          

          return [divI2,divN]
          
        }
    
        const affichage = document.querySelector("#weapon_name_image");
        const t = weapon_div_NI(weapon.displayName,weapon.shopData.newImage);

        //meme chose que toute à l'heure
        for (let i in t){
        affichage.appendChild(t[i]);
        }
        
      }
    }