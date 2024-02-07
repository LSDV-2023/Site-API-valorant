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


    // function weapon_names(data){
    //     for (let i = 0;i < data.data.length-1 ; i++ ){

    //         const weapon = data.data[i];
             

    //         function weapon_h1(p){
                
    //             const h1=document.createElement("h1");
    //             h1.appendChild(document.createTextNode(p));
    //             h1.classList.add("item1-1");
    //             return h1
    //         }

    //         function weapon_div(p){
    //             const div =document.createElement("div");
                
    //             div.appendChild(weapon_h1(p));
    //             return div

    //         }

    //         const affichage = document.querySelector("#weapon_name");
    //         affichage.appendChild(weapon_div(weapon.displayName))
            
           
    //     }
    // }

    // function weapon_images(data){
    //     for (let i = 0;i < data.data.length-1 ; i++ ){

    //         const weapon = data.data[i];

    //         function weapon_image (p){
    //            const img = document.createElement("img");
    //            img.src = p;
    //            img.classList.add("image-grid")
    //            return img
    //          }

    //         function weapon_div (p){
    //             const div = document.createElement("div");
                
    //             div.appendChild(weapon_image(p));

    //             return div
    //         }

    //         function weapon_div2(p){
    //           const div2 = document.createElement("div");
    //           div2.classList.add("item1");
    //           div2.appendChild(weapon_div(p));

    //           return div2
    //         }

    //         const imagerie = document.querySelector("#weapon_image");
    //         imagerie.appendChild(weapon_div2(weapon.shopData.newImage))
            
    //     }
    // }
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
    
        function weapon_div_NI (n,i){
          const divI=document.createElement("span");
          divI.appendChild(weapon_I(i))
    
          const divI2=document.createElement("span");
          divI2.classList.add("item1");
          divI2.appendChild(divI)
    
          const divN = document.createElement("div");
          divN.appendChild(weapon_N(n));
          divN.classList.add("item1-1");
    
          return [divI2,divN]
          
        }
    
        const affichage = document.querySelector("#weapon_name_image");
        const t = weapon_div_NI(weapon.displayName,weapon.shopData.newImage);
        affichage.appendChild(t[0]);
        affichage.appendChild(t[1]);
      }
    }