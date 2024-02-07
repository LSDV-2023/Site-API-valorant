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
      h1.classList.add("item1-1");

      return h1
    }

    function weapon_div_NI (n,i){
       const divI=document.createElement("div");
       divI.appendChild(weapon_I(i))

       const divI2=document.createElement("div");
       divI2.classList.add("item1");
       divI2.appendChild(divI)

       const divN = document.createElement("div");
       divN.appendChild(weapon_N(n));

       return divN,divI2
    }

    const affichage = document.querySelector("#weapon_name_image");
    affichage.appendChild(weapon_div_NI(weapon.displayName,weapon.shopData.newImage))
  }
}