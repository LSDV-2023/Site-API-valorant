function weapon_name_image(data){
    for (let i = 0;i < data.data.length-1 ; i++ ){

      const weapon = data.data[i];


    function weapon_image (){
      const img = document.createElement("img");
      img.src = weapon.shopData.newImage;
      img.classList.add("image-grid")
      return img
    }

    function weapon_div_image (){
       const div = document.createElement("div");
       div.appendChild(weapon_image());

       return div
    }

    function weapon_div_image(){
     const div2 = document.createElement("div");
     div2.classList.add("item1");
     div2.appendChild(weapon_div());

     return div2
    }  
    

    function weapon_h1(){
            
      const h1=document.createElement("h1");
      h1.appendChild(document.createTextNode(weapon.displayName));
      h1.classList.add("item1-1");

      return h1
    }

    function weapon_div_nom(){
        const div =document.createElement("div");
        div.appendChild(weapon_h1());

        return div

    }

    const affichage = document.querySelector("#weapon_name_image");
    affichage.appendChild(weapon_div_nom(),weapon_div_image())
  }
}