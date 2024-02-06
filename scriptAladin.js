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
    // displayWeapon(data)
    weapon_images(data);
    weapon_names(data);
    weapon_name_image(data)
    
    // weapon_name_image(data);
    // console.log(weapon_names(data))

  })
  .catch((error) => console.error("FETCH ERROR:", error));

//   function displayWeapon(data) {
//     for (let i = 0;i < data.data.length-1 ; i++ ){
//       const weapon = data.data[i];
//       const weaponDiv = document.getElementById("weapon"); 
//       // weapon name
//       const weaponName = weapon.displayName;
//       const heading = document.createElement("h1");
//       heading.innerHTML = weaponName;
//       weaponDiv.appendChild(heading);
      

//       // weapon image
//       const weaponImg = document.createElement("img");
//       weaponImg.src = weapon.shopData.newImage;
//       weaponImg.classList.add("image-grid");
//       weaponDiv.appendChild(weaponImg);
      
//       // arrierre plan de la page
//       // document.body.style.backgroundImage = "url('" + weapon.shopData.newImage + "')";
//     }  
//   }


    function weapon_names(data){
        for (let i = 0;i < data.data.length-1 ; i++ ){

            const weapon = data.data[i];
             

            function weapon_h1(p){
                
                const h1=document.createElement("h1");
                h1.appendChild(document.createTextNode(p))
                
                return h1
            }

            function weapon_div(p){
                const div =document.createElement("div");
                div.classList.add("item1-1");
                div.appendChild(weapon_h1(p));
                return div

            }

            const affichage = document.querySelector("#weapon_name");
            affichage.appendChild(weapon_div(weapon.displayName))
            
           
        }
    }

    function weapon_images(data){
        for (let i = 0;i < data.data.length-1 ; i++ ){

            const weapon = data.data[i];

            function weapon_image (p){
               const img = document.createElement("img");
               img.src = p;
               img.classList.add("image-grid")
               return img
             }

            function weapon_div (p){
                const div = document.createElement("div");
                
                div.appendChild(weapon_image(p));

                return div
            }

            function weapon_div2(p){
              const div = document.createElement("div");
              div.classList.add("item1");
              div.appendChild(weapon_div(p));

              return div
            }

            const imagerie = document.querySelector("#weapon_image");
            imagerie.appendChild(weapon_div2(weapon.shopData.newImage))
            
        }
    }

  //   function weapon_name_image(data){
  //     for (let i = 0;i < data.data.length-1 ; i++ ){

  //       const weapon = data.data[i];


  //     function weapon_image (p){
  //       const img = document.createElement("img");
  //       img.src = p;
  //       img.classList.add("image-grid")
  //       return img
  //     }

  //    function weapon_div (p){
  //        const div = document.createElement("div");
         
  //        div.appendChild(weapon_image(p));

  //        return div
  //    }

  //    function weapon_div2(p){
  //      const div = document.createElement("div");
  //      div.classList.add("item1");
  //      div.appendChild(weapon_div(p));

  //      return div
  //    }         
  //     }
  // }