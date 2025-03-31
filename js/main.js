document.querySelector("#circle_1").addEventListener("mouseover",head_highligt)
document.querySelector("#circle_1").addEventListener("mouseout",head_unhighligt)
document.querySelector("#circle_1").addEventListener("click",head_info)
// document.querySelector("#circle_1").addEventListener("click",head_infobox)
// document.querySelector("#hover_1").addEventListener("click",info_box)
// document.querySelector("#hover_1").addEventListener("mouseover",info_boxH)

// document.querySelector("#hover_1").addEventListener("mouseover",head_highligt)
// document.querySelector("#hover_1").addEventListener("mouseout",head_unhighligt)

function head_highligt () {
    console.log("head_highlight");
    document.querySelector("#circle_1").style.opacity = "0";
}
function head_unhighligt () {
    console.log("head_unhighlight");
    document.querySelector("#circle_1").style.opacity = "1";
}

function head_info() {
    console.log("info_box");
    document.querySelector(".info-text > h2").textContent = "Hvorfor lave en lynliste?";
    document.querySelector(".info-text > article > p").textContent = "Når man står midt i pakkekrisen og føler, at hjernen koger over af “hvad nu hvis”-tanker, er det en rigtig god idé at lave en lynliste. En lynliste hjælper dig med at tømme hovedet for tanker og skabe overblik. I stedet for at jonglere med tusind ting i tankerne, får du dem skrevet ned, og det giver en øjeblikkelig følelse af ro. Du begynder automatisk at prioritere det vigtigste, så du ikke ender med at overpakke i panik.";

    document.querySelector("#efficiency").textContent = "Lav en lynliste, når pakkepanikken rammer – det giver ro i hovedet og styr på det vigtigste på få minutter.";
    document.querySelector("#requirement").textContent = "En lynliste redder dig fra pakkekaos. Skriv det vigtigste ned, og få ro på i stedet for at stresse.";
}


// function head_infobox() {
//     console.log("head_infobox");
//     document.querySelector(".info-box yellow > aside > p").textContent = "Hvorfor lave en lynliste?"; 
// }

