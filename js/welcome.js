var ajaxResult;
var cabeceraTodo =
  "<th>Matrícula</th><th>Marca</th><th>Modelo</th><th>Precio</th><th>Vendedor</th><th>Concesionario</th><th>Fecha de venta</th>";
var cabeceraFecha =
  "<th>Fecha de venta</th><th>Coches vendidos</th><th>Recaudado en ventas</th>";
var cabeceraConcesionario =
  "<th>Concesionario</th><th>Coches vendidos</th><th>Recaudado en ventas</th>";
var cabeceraVendedor =
  "<th>Vendedor</th><th>Coches vendidos</th><th>Recaudado en ventas</th>";
var cabeceraMarca =
  "<th>Marca</th><th>Coches vendidos</th><th>Recaudado en ventas</th>";

/**
 * Al abrir el documento, la página contacta con la API una sola vez
 * y obtiene los datos de todos los coches y los guarda en la variable
 * "ajaxResult"; coge la variable "username" desde la URL para mostrarla 
 * en el menú.
 */
$(document).ready(function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const nombreURL = urlParams.get("username");
  document.getElementsByClassName("nombre")[0].innerHTML = nombreURL;
  document.getElementsByClassName("nombre")[1].innerHTML = nombreURL;
  data = $.ajax({
    url: "https://localhost:44362/vehiculo",
    dataType: "json",
    async: "true",
    type: "get",
    contentType: "application/json",
    success: function (data) {
      ajaxResult = data;
      todos();
      hideLoading();
    },
  });
});

/** Muestra todos los vehículos. */
function todos() {
  $("#results").empty();
  $("#results").append(cabeceraTodo);
  $.each(ajaxResult, function (i, item) {
    var $tr = $("<tr>")
      .append($("<td>").text(item.matricula))
      .append($("<td>").text(item.marca))
      .append($("<td>").text(item.modelo))
      .append($("<td>").text(item.precio))
      .append($("<td>").text(item.usuarioNickUsuario))
      .append($("<td>").text(item.concesionarioDireccion))
      .append($("<td>").text(item.fechaVenta.replace("T00:00:00", "")));
    console.log($tr.wrap("<p>").html());
    $("#results").append($tr);
  });
}

/** Agrupa los vehículos por fecha de venta. */
function porFecha() {
  let result = JSON.parse(JSON.stringify(ajaxResult));
  result = result
    .reduce(
      function (res, obj) {
        obj.contador = 1;
        if (!(obj.fechaVenta in res)) {
          res.__array.push((res[obj.fechaVenta] = obj));
        } else {
          res[obj.fechaVenta].precio += obj.precio;
          res[obj.fechaVenta].contador += 1;
        }
        return res;
      },
      { __array: [] }
    )
    .__array.sort(function (a, b) {
      return b.fechaVenta - a.fechaVenta;
    });
  $("#results").empty();
  $("#results").append(cabeceraFecha);
  $.each(result, function (i, item) {
    var $tr = $("<tr>")
      .append($("<td>").text(item.fechaVenta.replace("T00:00:00", "")))
      .append($("<td>").text(item.contador))
      .append($("<td>").text(item.precio));
    console.log($tr.wrap("<p>").html());
    $("#results").append($tr);
  });
  console.log(ajaxResult);
}

/** Agrupa los vehículos por concesionario. */
function porConcesionario() {
  let result = JSON.parse(JSON.stringify(ajaxResult));
  result = result
    .reduce(
      function (res, obj) {
        obj.contador = 1;
        if (!(obj.concesionarioDireccion in res)) {
          res.__array.push((res[obj.concesionarioDireccion] = obj));
        } else {
          res[obj.concesionarioDireccion].precio += obj.precio;
          res[obj.concesionarioDireccion].contador += 1;
        }
        return res;
      },
      { __array: [] }
    )
    .__array.sort(function (a, b) {
      return b.concesionarioDireccion - a.concesionarioDireccion;
    });
  $("#results").empty();
  $("#results").append(cabeceraConcesionario);
  $.each(result, function (i, item) {
    var $tr = $("<tr>")
      .append($("<td>").text(item.concesionarioDireccion))
      .append($("<td>").text(item.contador))
      .append($("<td>").text(item.precio));
    console.log($tr.wrap("<p>").html());
    $("#results").append($tr);
  });
}

/** Agrupa los vehículos por vendedor. */
function porVendedor() {
  let result = JSON.parse(JSON.stringify(ajaxResult));
  result = result
    .reduce(
      function (res, obj) {
        obj.contador = 1;
        if (!(obj.usuarioNickUsuario in res)) {
          res.__array.push((res[obj.usuarioNickUsuario] = obj));
        } else {
          res[obj.usuarioNickUsuario].precio += obj.precio;
          res[obj.usuarioNickUsuario].contador += 1;
        }
        return res;
      },
      { __array: [] }
    )
    .__array.sort(function (a, b) {
      return b.usuarioNickUsuario - a.usuarioNickUsuario;
    });
  $("#results").empty();
  $("#results").append(cabeceraVendedor);
  $.each(result, function (i, item) {
    var $tr = $("<tr>")
      .append($("<td>").text(item.usuarioNickUsuario))
      .append($("<td>").text(item.contador))
      .append($("<td>").text(item.precio));
    console.log($tr.wrap("<p>").html());
    $("#results").append($tr);
  });
}

/** Agrupa los vehículos por marca. */
function porMarca() {
  let result = JSON.parse(JSON.stringify(ajaxResult));
  result = result
    .reduce(
      function (res, obj) {
        obj.contador = 1;
        if (!(obj.marca in res)) {
          res.__array.push((res[obj.marca] = obj));
        } else {
          res[obj.marca].precio += obj.precio;
          res[obj.marca].contador += 1;
        }
        return res;
      },
      { __array: [] }
    )
    .__array.sort(function (a, b) {
      return b.marca - a.marca;
    });
  $("#results").empty();
  $("#results").append(cabeceraMarca);
  $.each(result, function (i, item) {
    var $tr = $("<tr>")
      .append($("<td>").text(item.marca))
      .append($("<td>").text(item.contador))
      .append($("<td>").text(item.precio));
    console.log($tr.wrap("<p>").html());
    $("#results").append($tr);
  });
}

/** Oculta la pantalla de carga. */
function hideLoading() {
  $(".loader").fadeOut();
}

/** Muestra el menú de navegación en móviles. */
function openNav() {
  $("#navBarOffCanvas").fadeIn();
}

/** Oculta el menú de navegación en móviles. */
function closeNav() {
  $("#navBarOffCanvas").fadeOut();
}

/** Muestra la vista Dashboard. */
function shwDashboard() {
  $("#dashboard").show();
  $(".btnDashboard").css("background-color", "var(--naranja)");
  $("#resumenVentas").hide();
  $(".btnResumenVentas").css("background-color", "transparent");
  $("#totalRecaudado").hide();
  $(".btnTotalRecaudado").css("background-color", "transparent");
  $("#registrarUsuario").hide();
  $(".btnRegistrarUsuario").css("background-color", "transparent");
  closeNav();
}

/** Muestra la vista Resumen de ventas. */
function shwResumenVentas() {
  $("#dashboard").hide();
  $(".btnDashboard").css("background-color", "transparent");
  $("#resumenVentas").show();
  $(".btnResumenVentas").css("background-color", "var(--naranja)");
  $("#totalRecaudado").hide();
  $(".btnTotalRecaudado").css("background-color", "transparent");
  $("#registrarUsuario").hide();
  $(".btnRegistrarUsuario").css("background-color", "transparent");
  closeNav();
}

/** Muestra la vista Total recaudado. */
function shwTotalRecaudado() {
  $("#dashboard").hide();
  $(".btnDashboard").css("background-color", "transparent");
  $("#resumenVentas").hide();
  $(".btnResumenVentas").css("background-color", "transparent");
  $("#totalRecaudado").show();
  $(".btnTotalRecaudado").css("background-color", "var(--naranja)");
  $("#registrarUsuario").hide();
  $(".btnRegistrarUsuario").css("background-color", "transparent");
  closeNav();
}

/** Muestra la vista Registrar usuario. */
function shwRegistrarUsuario() {
  $("#dashboard").hide();
  $(".btnDashboard").css("background-color", "transparent");
  $("#resumenVentas").hide();
  $(".btnResumenVentas").css("background-color", "transparent");
  $("#totalRecaudado").hide();
  $(".btnTotalRecaudado").css("background-color", "transparent");
  $("#registrarUsuario").show();
  $(".btnRegistrarUsuario").css("background-color", "var(--naranja)");
  closeNav();
}

/** Devuelve al usuario a la página inicial. */
function logout() {
  window.location.replace("/");
}
