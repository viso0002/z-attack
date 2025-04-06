document.querySelector("#circle_1").addEventListener("mouseover",head_highligt)
document.querySelector("#circle_1").addEventListener("mouseout",head_unhighligt)
document.querySelector("#circle_1").addEventListener("click",head_info)

document.querySelector("#circle_2").addEventListener("mouseover",head_highligt)
document.querySelector("#circle_2").addEventListener("mouseout",head_unhighligt)
document.querySelector("#circle_2").addEventListener("click",head_info2)

document.querySelector("#circle_3").addEventListener("mouseover",head_highligt)
document.querySelector("#circle_3").addEventListener("mouseout",head_unhighligt)
document.querySelector("#circle_3").addEventListener("click",head_info3)

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
    document.querySelector("#efficiency").classList.remove ("hide");
    document.querySelector("#efficiency").classList.add ("fadeIn");
    document.querySelector("#requirement").classList.remove ("hide");
    document.querySelector("#requirement").classList.add ("fadeIn");

    document.querySelector("#requirement").addEventListener("animationend", cleanup);

    document.querySelector(".info-text > h2").textContent = "Hvorfor lave en lynliste?";
    document.querySelector(".info-text > article > p").textContent = "Når man står midt i pakkekrisen og føler, at hjernen koger over af “hvad nu hvis”-tanker, er det en rigtig god idé at lave en lynliste. En lynliste hjælper dig med at tømme hovedet for tanker og skabe overblik. I stedet for at jonglere med tusind ting i tankerne, får du dem skrevet ned, og det giver en øjeblikkelig følelse af ro. Du begynder automatisk at prioritere det vigtigste, så du ikke ender med at overpakke i panik.";

    document.querySelector("#efficiency").textContent = "Lav en lynliste, når pakkepanikken rammer – det giver ro i hovedet og styr på det vigtigste på få minutter.";
    document.querySelector("#requirement").textContent = "En lynliste redder dig fra pakkekaos. Skriv det vigtigste ned, og få ro på i stedet for at stresse.";
}

// function head_highligt2 () {
//     console.log("head_highlight2");
//     document.querySelector("#circle_1").style.opacity = "0";
// }
// function head_unhighligt () {
//     console.log("head_unhighlight");
//     document.querySelector("#circle_1").style.opacity = "1";
// }

function head_info2() {
    console.log("info_box");
    document.querySelector("#efficiency").classList.remove ("hide");
    document.querySelector("#efficiency").classList.add ("fadeIn");
    document.querySelector("#requirement").classList.remove ("hide");
    document.querySelector("#requirement").classList.add ("fadeIn");

    document.querySelector("#requirement").addEventListener("animationend", cleanup);

    document.querySelector(".info-text > h2").textContent = "3 vigtigeste ting";
    document.querySelector(".info-text > article > p").textContent = "Når du skal ud at rejse, er der tre ting, du ikke må glemme: Pas og rejsedokumenter, så du overhovedet kan komme afsted. Mobil og oplader, fordi din telefon er din rejsemakker til alt fra billetter til GPS. Og pung med kort eller kontanter, så du kan betale, spise og komme rundt. Har du styr på de tre ting, skal resten nok gå.";

    document.querySelector("#efficiency").textContent = "Lav en lynliste, når pakkepanikken rammer – det giver ro i hovedet og styr på det vigtigste på få minutter.";
    document.querySelector("#requirement").textContent = "En lynliste redder dig fra pakkekaos. Skriv det vigtigste ned, og få ro på i stedet for at stresse.";
}

function head_info3() {
    console.log("info_box");

    
    document.querySelector("#efficiency").classList.remove ("hide");
    document.querySelector("#efficiency").classList.add ("fadeIn");
    document.querySelector("#requirement").classList.remove ("hide");
    document.querySelector("#requirement").classList.add ("fadeIn");

    document.querySelector("#requirement").addEventListener("animationend", cleanup);

    document.querySelector(".info-text > h2").textContent = "Træk vejret";
    document.querySelector(".info-text > article > p").textContent = "Glemte tandbørsten? Sokker? Solcreme? Det kan alt sammen købes. Fokusér på det uundværlige – og træk vejret.";

    document.querySelector("#efficiency").textContent = "Din hjerne virker bedre, når du ikke stresser. Tænk: “Det værste der kan ske er… at jeg må købe en tandbørste i lufthavnen.";
    document.querySelector("#requirement").textContent = "En lynliste redder dig fra pakkekaos. Skriv det vigtigste ned, og få ro på i stedet for at stresse.";
}

function cleanup () {
    console.log("cleanup");
    document.querySelector("#requirement").addEventListener("animationend", cleanup);
    document.querySelector("#efficiency").addEventListener("animationend", cleanup);
    document.querySelector("#efficiency").classList.remove ("fadeIn");
    document.querySelector("#requirement").classList.remove ("fadeIn");
}

function head_highlight() {
    console.log("head_highlight");
    console.log(this);
    this.style.fill = "transparent";
}

function head_unhighlight() {
    console.log("head_unhighlight");
    console.log(this);
    this.style.fill = "transparent";
}




