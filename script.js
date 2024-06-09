// on crée une référence de l'écran et celle du bouton permettant de supprimer des chiffres  sur l'écran ;

let ecran = document.getElementById('écran');
// par défaut la de l'écran est 0
ecran.value = 0
// On stock le résultat de l'opération ici
let solution;
let btnSupprimerChiffre = document.querySelector("#btn-supprimer-chiffre");


btnSupprimerChiffre.addEventListener("click",()=>{
    let valeurActuelle = ecran.value;
    if(valeurActuelle.length==1){
      ecran.value=0
    }else{
      let nouvelleValeur = ecran.value.slice(0,-1);
      ecran.value = nouvelleValeur
    }
})

// ici on récupère le pavé numérique : 

  for(let i=0;i<=9;i++){
    let num = document.getElementsByClassName('num')[i]
    
  num.addEventListener('click', () => {

    if(ecran.value==0 || ecran.value == solution){
      ecran.value = num.value 
    }else{
      ecran.value +=num.value ;
    }
   })
    
  };
  // réinitialise l'écran 
  let effacer = document.getElementById('btn-effacer');
    effacer.addEventListener('click',()=>{
      ecran.value="0";
    })
    
// on récupère et affiche les signes d'opérateur 
for(let i=0;i<4;i++){
let opérateur = document.getElementsByClassName('operateur')[i]
  opérateur.addEventListener('click',()=>{
    if(ecran.value != "Opération impossible") ecran.value += opérateur.value;
  })

}

let virgule = document.querySelector("#virgule");
virgule.onclick = ()=>{
  if(!ecran.value.includes(',')){
  ecran.value +=virgule.value;
  }
}
let pourCent = document.querySelector("#pourCent");
pourCent.onclick = ()=>{
  if(!ecran.value.includes('%')){
  ecran.value += pourCent.value;
    
  }
}
// Changements de signe : 

let changerSigne = document.getElementById('changeSigne');
changerSigne.onclick = ()=>{
  if (ecran.value!=0) {
    
  
  if(!ecran.value.includes('-')){
    var avecSigneNegatif = "-"+ ecran.value;
  ecran.value = avecSigneNegatif
  }else{
    var avecSignePositif = ecran.value.replace("-","")
    ecran.value = avecSignePositif;
  }
  }
  
}

// ici on calcule le résultat de l'opération 

let résultatOperation = document.querySelector("#résultat-opération");

résultatOperation.addEventListener("click",faireOperation);

function faireOperation(){
  let expression = ecran.value.replace('×','*').replace('÷','/').replace('%','*0.01').replace(',','.');
  try {
    solution=eval(expression);
    ecran.value =solution.toString().replace('.',',');
  } catch (e) { 
    solution =  'Opération impossible';
    ecran.value = solution;
  }
}
