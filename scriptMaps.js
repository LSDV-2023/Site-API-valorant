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


    console.log(maps_descriptions(data))

  })
  .catch((error) => console.error("FETCH ERROR:", error));


      function maps_descriptions(data){
        for (let i = 0;i < data.data.length-1 ; i++ ){
    
          const map = data.data[i];
    
    
         function map_I (i){
          const img = document.createElement("img");
          img.src = i;
          img.classList.add("image-grid");
    
          return img
        }

          function map_N (n){
          const h1=document.createElement("h1");
          h1.appendChild(document.createTextNode(n));
          
          return h1
        }



        const d = map_description(map.narrativeDescription);

        function map_description(d){
          const description=document.createElement("p"); 
          
            //j'ai mis une condition pour afficher un autre texte si une map n'a pas ssa description
          if (d==null){
            description.appendChild(document.createTextNode("No description fro the moment"))
          }

          else{
            description.appendChild(document.createTextNode(d));
          }
    
          return [description]
        }


        //on ajoute toutes les données qu'on veut on vérifiant qu'il correspondent paraport à la fonction
        
    
         function map_div_NI (n,i){

          

          const divI=document.createElement("span1");
          divI.appendChild(map_I(i))
    
          const divI2=document.createElement("span1");
          divI2.classList.add("item1");
          divI2.appendChild(divI)
    
          const divN = document.createElement("div");
          divN.appendChild(map_N(n));
          divN.classList.add("title");

          const divD= document.createElement("div")
          divD.classList.add("item1-1")
          
          const div_descr = document.createElement("p1");
          // on utilise le 'for' pour éviter d'écrire tous les nombres et pour que les informations s'ajoute
          //automatiquement après avoir modifié la fonction 'weapon_decription()'
          for (let i in d){
            div_descr.appendChild(d[i]);
          } 

          divD.appendChild(div_descr) ;

          return [divN,divI2,divD]
          
        }
    
        const affichage = document.querySelector("#maps");
        const t = map_div_NI(map.displayName,map.splash);

        //meme chose que toute à l'heure
        for (let i in t){
        affichage.appendChild(t[i]);
        }
        
      }
    }