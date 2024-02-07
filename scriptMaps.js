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
    maps_name_image(data);
    console.log(maps_name_image(data))

  })

  .catch((error) => console.error("FETCH ERROR:", error));

    //   function maps_name_image(data){
    //     for (let i = 0; i < data.data.length; i++) {
    
    //       const maps = data.data[i];
    
    
    //     function maps_I (i){
    //       const img = document.createElement("img");
    //       img.src = i;
    //       img.classList.add("image-grid");
    
    //       return img
    //     }
    //       function maps_N (n){
    //       const h1=document.createElement("h1");
    //       h1.appendChild(document.createTextNode(n));
          
    
    //       return h1
    //     }
    
    //     function maps_div_NI (n,i){
    //       const divI=document.createElement("span");
    //       divI.appendChild(maps_I(i))
    
    //       const divI2=document.createElement("span");
    //       divI2.classList.add("item1");
    //       divI2.appendChild(divI)
    
    //       const divN = document.createElement("div");
    //       divN.appendChild(maps_N(n));
    //       divN.classList.add("item1-1");
    
    //       return [divI2,divN]
          
    //     }
    
    //     const affichage = document.querySelector("#maps_name_image");
    //     const t = maps_div_NI(maps.displayName,maps.shopData.newImage);
    //     affichage.appendChild(t[0]);
    //     affichage.appendChild(t[1]);
    //   }
    // }
    function maps_name_image(data) {
      for (let i = 0; i < data.data.length; i++) {
          const map = data.data[i];
  
          function map_image(imageUrl) {
              const img = document.createElement("img");
              img.src = imageUrl;
              img.classList.add("image-grid");
              return img;
          }
  
          function map_name(name) {
              const h1 = document.createElement("h1");
              h1.appendChild(document.createTextNode(name));
              return h1;
          }
  
          function map_div(name, imageUrl) {
              const div = document.createElement("div");
              const image = map_image(imageUrl);
              const nameElement = map_name(name);
  
              div.appendChild(nameElement);
              div.appendChild(image);
              div.classList.add("map-item");
  
              return div;
          }
  
          const affichage = document.querySelector("#maps_name_image");
          const mapDiv = map_div(map.displayName, map.splash);
          affichage.appendChild(mapDiv);
      }
  }
  