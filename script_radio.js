//Code JS
// Create constants here
// =====================================
// recherche de la date du jour actuel
 
//let Son = $('#audioPlayer');
let Son=document.getElementById('audioPlayer');
//let Son = document.getElementById('MonPlayer');
let RTL = "http://icecast.rtl.fr/rtl-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg";
  let RMC =" http://audio.bfmtv.com/rmcradio_128.mp3/s";
  let France_Info="http://icecast.radiofrance.fr/franceinfo-hifi.aac";
  let Europe_1 ="http://europe1.lmn.fm/europe1.aac/s";
  let M_Radio ="http://mfm.ice.infomaniak.ch/mfm-64.aac";
  let France_Inter="http://direct.franceinter.fr/live/franceinter-hifi.aac";
  let Radio_Classique="http://radioclassique.ice.infomaniak.ch/radioclassique-high.aac";
  let France_Musique ="http://icecast.radiofrance.fr/francemusique-hifi.aac"
  let FIP ="http://direct.fipradio.fr/live/fip-hifi.aac";
  let France_culture="http://direct.franceculture.fr/live/franceculture-hifi.aac";
  
  let Chérie_FM="http://streaming.nrjaudio.fm/ouuku85n3nje?origine=fluxradios";
 let BFM_r=" http://audio.bfmtv.com/bfmbusiness_128.mp3";
 let OTTO_Baroque="https://strmreg.1.fm/baroque_mobile_mp3";
 let ANCIEN_FM=src="https://mediaserv73.live-streams.nl:18058/stream";
 let CROONER=scr="http://croonerradio.ice.infomaniak.ch/croonerradio-hifi.aac";
 let Radio_Jazz="http://jazzradio.ice.infomaniak.ch/jazzradio-high.aac";
 let Sanef_107_7="http://sanef.ice.infomaniak.ch/sanef1077-idf.mp3";
 let Jazz_fip="http://direct.fipradio.fr/live/fipjazz-hifi.aac";
 let radio_suisse_classic="http://stream.srg-ssr.ch/m/rsc_fr/aacp_96";

// recherche de la date du jour actuel


let Tabmois = ["Janvier", "Février", "Mars", "Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];
let Nbjour_mois=[31, 28, 31, 30,31,30,31,31,30,31,30,31];
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');       // Date actuelle
var js= String(today.getDay()).padStart(2, '0')// jour de la semaine
var mm = String(today.getMonth() + 1).padStart(2, '0'); //Mois actuel January is 0!
var yyyy = today.getFullYear();                         // Année actuelle
 var hh=0;
 var mn=0;
 var ss=0;
//---------------------------- declaration boutons volume----------------
 

const dayInput = document.querySelector('#Nbday-input');
const calculateButton = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

var Date_du_Jour = document.querySelector('#Date_du_jour');
var HeureActuelle=document.querySelector('#HeureActuelle');
let Anniversaire=document.getElementById("anni")
// =====================================
// Gestion du son

const Vol_son =document.getElementById("Vol_son");

const range = document.getElementById('slider');
range.value=3;
Son.volume=0.3;
Vol_son.innerText=4;
const Btn_Pause=document.getElementById('Pause');
const Lecture_bt=document.getElementById('lecture');
const Icon_HP=document.getElementById('hautparleur');
Vol_son.innerText=parseInt(Son.volume*10);
const Image_Radio_Live=document.getElementById("ImgRadioEcoute")
const RTL_r=document.getElementById('RTL');
RTL_r.addEventListener('click', () => {
  Durée_S_sleep=50;
            let Station= RTL;
            initAudio(Station);
            
            document.getElementById("Nom_Radio").innerText="Vous écoutez";
            Image_Radio_Live.src="./images_radio/RTL.png";
});
const RMC_r=document.getElementById('RMC');
RMC_r.addEventListener('click', () => {
  Durée_S_sleep=50;
            let Station=RMC;
            initAudio(Station);
            document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images_radio/RMC.png";
             

});

const FINFO_r=document.getElementById('France_Info');
 
FINFO_r.addEventListener('click', () => {
  Durée_S_sleep=50;
            let Station= France_Info;
            initAudio(Station);
            document.getElementById("Nom_Radio").innerText="Vous écoutez";
            Image_Radio_Live.src="./images_radio/France_Info.png";
             

});
const EUROPE1_r=document.getElementById('Europe_1');
 
EUROPE1_r.addEventListener('click', () => {
  Durée_S_sleep=50;
            let Station= Europe_1;
	    initAudio(Station);
            document.getElementById("Nom_Radio").innerText="Vous écoutez";
            Image_Radio_Live.src="./images_radio/Europe_1.png";
             

});

const MRADIO_r=document.getElementById('M_RADIO');
 
MRADIO_r.addEventListener('click', () => {
 Durée_S_sleep=50; 
            let Station= M_Radio;
            initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images_radio/MRadio.png";
             // Son.play();

});
 
const FINTER_r=document.getElementById('France_Inter');
 
FINTER_r.addEventListener('click', () => {
Durée_S_sleep=50;  
            let Station= France_Inter;
             initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images_radio/franceinter.png";

});
const Rclassique_r=document.getElementById('Radio_Classique');
 
Rclassique_r.addEventListener('click', () => {
Durée_S_sleep=50;  
            let Station= Radio_Classique;
            initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images_radio/Radio_Classique.png";
});
const FMusique_r=document.getElementById('France_Musique');
 
FMusique_r.addEventListener('click', () => {
Durée_S_sleep=50;  
            let Station= France_Musique;
            initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
            Image_Radio_Live.src="./images_radio/France musique.jpg";

});
const R_Suisse_classic_r=document.getElementById('R_Suisse_classic');
 
R_Suisse_classic_r.addEventListener('click', () => {
Durée_S_sleep=50;  
            let Station= radio_suisse_classic;
            initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
            Image_Radio_Live.src="./images_radio/radio_suisse_classic.png";

});

const FIP_r=document.getElementById('FIP');
 
FIP_r.addEventListener('click', () => {
Durée_S_sleep=50;  
            let Station= FIP;
            initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images_radio/fip.png";

});
const FIP_jazz_r=document.getElementById('Fip_jazz');
FIP_jazz_r.addEventListener('click', () => {
Durée_S_sleep=50;  
            let Station= Jazz_fip;
            initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images_radio/FIP_JAZZ.png";

});
const FCulture_r=document.getElementById('France_culture');
 
Durée_S_sleep=50;FCulture_r.addEventListener('click', () => {
  
            let Station= France_culture;
          initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images_radio/France culture.png";
});


const OTTOBAROQUE_r=document.getElementById('OTTO');
OTTOBAROQUE_r.addEventListener('click', () => {
Durée_S_sleep=50;  
            let Station= OTTO_Baroque;
            initAudio(Station);
             
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images_radio/OTTO_ Baroque.png";

});
const ANCIEN_FM_r=document.getElementById('ANCIEN_FM');
ANCIEN_FM_r.addEventListener('click', () => {
 Durée_S_sleep=50; 
            let Station= ANCIEN_FM;
            initAudio(Station);
           
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
            Image_Radio_Live.src="./images_radio/ancientfm.png";

});
const CROONER_r=document.getElementById('CROONER');
CROONER_r.addEventListener('click', () => {
Durée_S_sleep=50;  
            let Station= CROONER;
           initAudio(Station);
           
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images_radio/LOGO-CROONER-RADIO.png";
});
const JazzRadio_r=document.getElementById('Jazz_Radio');
JazzRadio_r.addEventListener('click', () => {
Durée_S_sleep=50;  
            let Station= Radio_Jazz;
           initAudio(Station);
           
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images_radio/Jazz_radio.png";
});
const Sanef_r=document.getElementById('SANEF');
Sanef_r.addEventListener('click', () => {
Durée_S_sleep=50;  
            let Station= Sanef_107_7;
           initAudio(Station);
           
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images_radio/Sanef.jpg";
});

const BFM_rd=document.getElementById('BFM');
BFM_rd.addEventListener('click', () => {
Durée_S_sleep=50;  
            let Station= BFM_r;
           initAudio(Station);
           
             document.getElementById("Nom_Radio").innerText="Vous écoute";
             Image_Radio_Live.src="./images_radio/BFM.png";
});
// Gestion du volume
 range.addEventListener('change', () => {
        //elem.textContent = range.value;
        
        Son.volume=(range.value*.1)
        console.log("range.value=",range.value,"Son.volume",Son.volume)
        Vol_son.innerText=parseInt(10*Son.volume);
        if (Son.volume==0){
        Icon_HP.className='fa-solid fa-volume-off';
        }
        if (Son.volume>0){
        Icon_HP.className='fa-solid fa-volume-high';
        }
        //Son.volume=5;
    });
 
 
function initAudio (Station) {
   Son.src = Station;
     var playPromise = Son.play();

  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
      Son.load()
      Son.play(); 
      
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
      //Son.pause();
    });
  }
}
function play(MonPlayer, control) {

    if (Son.paused) {
        Son.play();
      //  control.textContent = '||';
       
         Lecture_bt.className='fa-solid fa-pause'
       control.style.backgroundColor = "rgb(60,179,113)";
    } else {
        Son.pause();
        // control.textContent = '>';
         Lecture_bt.className='fa-solid fa-play'
        control.style.backgroundColor = "rgb(255,19,113)";
    }

}


function resume(MonPlayer) {
    Son.currentTime = 0;

    Son.pause();
}
// api cast 

