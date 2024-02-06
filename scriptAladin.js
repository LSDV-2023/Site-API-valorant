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
    weapon_images(data);
    weapon_names(data);
    console.log(weapon_names(data));
    console.log(weapon_images(data))

    // weapon_name_image(data);
    // console.log(weapon_name_image(data))

  })
  .catch((error) => console.error("FETCH ERROR:", error));


    function weapon_names(data){
        for (let i = 0;i < data.data.length-1 ; i++ ){

            const weapon = data.data[i];
             

            function weapon_h1(p){
                
                const h1=document.createElement("h1");
                h1.appendChild(document.createTextNode(p));
                h1.classList.add("item1-1");
                return h1
            }

            function weapon_div(p){
                const div =document.createElement("div");
                
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
              const div2 = document.createElement("div");
              div2.classList.add("item1");
              div2.appendChild(weapon_div(p));

              return div2
            }

            const imagerie = document.querySelector("#weapon_image");
            imagerie.appendChild(weapon_div2(weapon.shopData.newImage))
            
        }
    }

  //   function weapon_name_image(data){
  //     for (let i = 0;i < data.data.length-1 ; i++ ){
  
  //         const weapon = data.data[i];
    
    
  //       function weapon_image (a){
  //         const img = document.createElement("img");
  //         img.src = a;
  //         img.classList.add("image-grid")
  //         return img
  //       }
    
  //       function weapon_div_image (a){
  //         const div = document.createElement("div");
  //         div.appendChild(weapon_image(a));
    
  //         return div
  //       }
    
  //       function weapon_div_image2(a){
  //       const div = document.createElement("div");
  //       div.classList.add("item1");
  //       div.appendChild(weapon_div_image(a));
    
  //       return div
  //       }  
        
    
  //       function weapon_h1(b){
                
  //         const h2=document.createElement("h2");
  //         h2.appendChild(document.createTextNode(b));
          
    
  //         return h2
  //       }
    
  //       function weapon_div_nom(b){
  //           const div =document.createElement("div");
  //           div.appendChild(weapon_h1(b));
  //           div.classList.add("item1-1");
  //           return div
    
  //       }
    
  //       const affichage = document.querySelector("#weapon_name_image");
  //       affichage.appendChild(weapon_div_nom(weapon.displayName),weapon_div_image2(weapon.shopData.newImage))
  //     }
  // }