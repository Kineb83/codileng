var servicios = document.getElementById("servicios");
var campana = document.getElementById("campana");
var w = document.getElementById("web");
var android = document.getElementById("android");
var sales = document.getElementById("salesforce");
var lin = document.getElementById("linux");
var tutos = document.getElementById("tutoriales");

function mostrarServicios() {
  if (servicios.style.display === "none") {
    servicios.style.display = "block";
    campana.style.display = "none";
  }
}
function esconderServicios() {
  if (campana.style.display === "none") {
    servicios.style.display = "none";
    campana.style.display = "block";
  }
}

function mostrarWeb() {
  if (w.style.display === "none") {
    servicios.style.display = "none"
    w.style.display = "block";
    android.style.display = "none";
    sales.style.display = "none";
    lin.style.display = "none";
    tutos.style.display = "none";
  }
}

function mostrarAndroid() {
  if (android.style.display === "none") {
    servicios.style.display = "none"
    w.style.display = "none";
    android.style.display = "block";
    sales.style.display = "none";
    lin.style.display = "none";
    tutos.style.display = "none";
  }
}

function mostrarSalesforce() {
  if (sales.style.display === "none") {
    servicios.style.display = "none"
    w.style.display = "none";
    android.style.display = "none";
    sales.style.display = "block";
    lin.style.display = "none";
    tutos.style.display = "none";
  }
}

function mostrarLinux() {
  if (lin.style.display === "none") {
    servicios.style.display = "none"
    w.style.display = "none";
    android.style.display = "none";
    sales.style.display = "none";
    lin.style.display = "block";
    tutos.style.display = "none";
  }
}

function mostrarTutoriales() {
  if (tutos.style.display === "none") {
    servicios.style.display = "none"
    w.style.display = "none";
    android.style.display = "none";
    sales.style.display = "none";
    lin.style.display = "none";
    tutos.style.display = "block";
  }
}