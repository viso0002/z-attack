


document.addEventListener("DOMContentLoaded"), function () {
    document.querySelector("#submitBtn").addEventListener("click", function (event) {
      event.preventDefault();

      document.querySelector("#sumName").textContent = "Navn: " + document.querySelector("#name").value;
      document.querySelector("#sumAge").textContent = "Alder: " + document.querySelector("#alder").value;
      document.querySelector("#sumEmail").textContent = "E-mail: " + document.querySelector("#e-mail").value;
      document.querySelector("#sumGender").textContent = "Køn: " + document.querySelector("#gender").value;
      document.querySelector("#sumType").textContent = "Rejsetype: " + document.querySelector("#travelType").value;
      document.querySelector("#sumDestination").textContent = "Destination: " + document.querySelector("#destination").value;
      document.querySelector("#sumDeparture").textContent = "Udrejse: " + document.querySelector("#departure").value;
      document.querySelector("#sumReturn").textContent = "Hjemrejse: " + document.querySelector("#return").value;
    });
 }