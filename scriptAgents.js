fetch("https://valorant-api.com/v1/agents")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);


    console.log(agents_descriptions(data))

  })
  .catch((error) => console.error("FETCH ERROR:", error));


      function agents_descriptions(data){
        for (let i = 0;i < data.data.length-1 ; i++ ){
    
          const agents = data.data[i];
    
    
         function agents_I (i){
          const img = document.createElement("img");
          img.src = i;
          img.classList.add("image-grid");
    
          return img
        }

          function agents_N (n){
          const h1=document.createElement("h1");
          h1.appendChild(document.createTextNode(n));
          
          return h1
        }



        const d = agents_description(agents.description);

        function agents_description(d){
          const description=document.createElement("p"); 
          
            //j'ai mis une condition pour afficher un autre texte si un agent n'a pas ssa description
          if (d==null){
            description.appendChild(document.createTextNode("No description for the moment"))
          }

          else{
            description.appendChild(document.createTextNode(d));
          }
    
          return [description]
        }


        //on ajoute toutes les données qu'on veut on vérifiant qu'il correspondent paraport à la fonction
        
    
         function agents_div_NI (n,i){

          const divN = document.createElement("div");
          divN.appendChild(agents_N(n));
          divN.classList.add("title");


          const divI=document.createElement("div");
          divI.classList.add("item1")
          divI.appendChild(agents_I(i))
    
          const container=document.createElement("div");
          container.classList.add("container");
          container.appendChild(divI)
    
          
          const divD= document.createElement("div")
          divD.classList.add("effet")
          
          const div_descr = document.createElement("p1");
          // on utilise le 'for' pour éviter d'écrire tous les nombres et pour que les informations s'ajoute
          //automatiquement après avoir modifié la fonction 'agents_decription()'
          for (let i in d){
            div_descr.appendChild(d[i]);
          } 

          divD.appendChild(div_descr) ;
          container.appendChild(divD)

          return [divN,container]
          
        }
    
        const affichage = document.querySelector("#agents");
        const t = agents_div_NI(agents.displayName,agents.fullPortrait);

        //meme chose que toute à l'heure
        for (let i in t){
        affichage.appendChild(t[i]);
        }
        
      }
    }