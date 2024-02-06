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
    weapon_names(data);
    weapon_images(data)

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
                h1.innerHTML=p
                
              
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

            function weapon_src(img){
                const src=document.createTextNode(img);
                return src
            }
            
            function weapon_span(image,style){
            
                const span = document.createElement("span");
            
                span.appendChild(weapon_src(image));
            
                span.classList.add(style)
                
                return span 
            }
            
            function weapon_div (p){
                const div = document.createElement("div");
                
                // const weaponPicture = weapon.shopData.newImage;
                div.appendChild(weapon_span(p,'item1'));
            
                return div
            }

            function weapon_image (p){

                const img = document.createElement("img");
                
                img.src = weapon.shopData.newImage

                img.appendChild(weapon_div(p));
            
                return img
            }
            
            
            
            const weapon_name = document.querySelector("#weapon_image");
            
            
            weapon_name.appendChild(weapon_image(data.data))
            
        }
    }