fetch("https://valorant-api.com/v1/maps")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    // displaymaps(data)
    maps_names(data);
    maps_images(data)

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


    function maps_names(data){
        for (let i = 0;i < data.data.length-1 ; i++ ){

            const maps = data.data[i];
             

            function maps_h1(p){
                
                const h1=document.createElement("h1");
                h1.innerHTML=p
                
              
                return h1
            }

            function maps_div(p){
                const div =document.createElement("div");
                div.classList.add("item1-1");
                div.appendChild(maps_h1(p));
                return div

            }

            const affichage = document.querySelector("#maps_name");
            affichage.appendChild(maps_div(maps.displayName))
            
           
        }
    }

    function maps_images(data){
        for (let i = 0;i < data.data.length-1 ; i++ ){

            const maps = data.data[i];

            function maps_src(img){
                const src=document.createTextNode(img);
                return src
            }
            
            function maps_span(image,style){
            
                const span = document.createElement("span");
            
                span.appendChild(maps_src(image));
            
                span.classList.add(style)
                
                return span 
            }
            
            function maps_div (p){
                const div = document.createElement("div");
                
                // const mapsPicture = maps.shopData.newImage;
                div.appendChild(maps_span(p,'item1'));
            
                return div
            }

            function maps_image (p){

                const img = document.createElement("img");
                
                img.src = maps.shopData.newImage

                img.appendChild(maps_div(p));
            
                return img
            }
            
            
            
            const maps_name = document.querySelector("#maps_image");
            
            
            maps_name.appendChild(maps_image(data.data))
            
        }
    }