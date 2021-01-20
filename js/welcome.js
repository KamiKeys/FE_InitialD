$(document).ready(function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const nombreURL = urlParams.get('username');
  document.getElementById("nombre").innerHTML = nombreURL;
  $.ajax({
    url: "https://localhost:44362/vehiculo",
    dataType: "json",
    type: "get",
    contentType: "application/json",
    success: function (data, status) {
      $.each(data, function (i, item) {
        var $tr = $("<tr>").append($("<td>").text(item.matricula))
        .append($("<td>").text(item.marca))
        .append($("<td>").text(item.modelo))
        .append($("<td>").text(item.precio))
        .append($("<td>").text(item.usuarioNickUsuario))
        .append($("<td>").text(item.fechaVenta));
        console.log($tr.wrap("<p>").html());
        $("#results").append($tr);
      });
    },
  });
});

function todos() {
  $.ajax({
    url: "https://localhost:44362/vehiculo",
    dataType: "json",
    type: "get",
    contentType: "application/json",
    success: function (data, status) {
      $("#results").find("tr:gt(0)").remove();
      $.each(data, function (i, item) {
        var $tr = $("<tr>").append($("<td>").text(item.matricula))
        .append($("<td>").text(item.marca))
        .append($("<td>").text(item.modelo))
        .append($("<td>").text(item.precio))
        .append($("<td>").text(item.usuarioNickUsuario))
        .append($("<td>").text(item.fechaVenta));
        console.log($tr.wrap("<p>").html());
        $("#results").append($tr);
      });
    },
  });
}

function porFecha() {
  $.ajax({
    url: "https://localhost:44362/vehiculo",
    dataType: "json",
    type: "get",
    contentType: "application/json",
    success: function (data, status) {
      $("#results").find("tr:gt(0)").remove();
      $.each(data, function (i, item) {
        var $tr = $("<tr>").append($("<td>").text(item.matricula))
        .append($("<td>").text(item.marca))
        .append($("<td>").text(item.modelo))
        .append($("<td>").text(item.precio))
        .append($("<td>").text(item.usuarioNickUsuario))
        .append($("<td>").text(item.fechaVenta));
        console.log($tr.wrap("<p>").html());
        $("#results").append($tr);
      });
    },
  });
}

function porConcesionario() {
  $.ajax({
    url: "https://localhost:44362/vehiculo",
    dataType: "json",
    type: "get",
    contentType: "application/json",
    success: function (data, status) {
      $("#results").find("tr:gt(0)").remove();
      $.each(data, function (i, item) {
        var $tr = $("<tr>").append($("<td>").text(item.matricula))
        .append($("<td>").text(item.marca))
        .append($("<td>").text(item.modelo))
        .append($("<td>").text(item.precio))
        .append($("<td>").text(item.usuarioNickUsuario))
        .append($("<td>").text(item.fechaVenta));
        console.log($tr.wrap("<p>").html());
        $("#results").append($tr);
      });
    },
  });
}

function porPrecio() {
  $.ajax({
    url: "https://localhost:44362/vehiculo",
    dataType: "json",
    type: "get",
    contentType: "application/json",
    success: function (data, status) {
      $("#results").find("tr:gt(0)").remove();
      $.each(data, function (i, item) {
        var $tr = $("<tr>").append($("<td>").text(item.matricula))
        .append($("<td>").text(item.marca))
        .append($("<td>").text(item.modelo))
        .append($("<td>").text(item.precio))
        .append($("<td>").text(item.usuarioNickUsuario))
        .append($("<td>").text(item.fechaVenta));
        console.log($tr.wrap("<p>").html());
        $("#results").append($tr);
      });
    },
  });
}

function porMarca() {
  $.ajax({
    url: "https://localhost:44362/vehiculo",
    dataType: "json",
    type: "get",
    contentType: "application/json",
    success: function (data, status) {
      $("#results").find("tr:gt(0)").remove();
      $.each(data, function (i, item) {
        var $tr = $("<tr>").append($("<td>").text(item.matricula))
        .append($("<td>").text(item.marca))
        .append($("<td>").text(item.modelo))
        .append($("<td>").text(item.precio))
        .append($("<td>").text(item.usuarioNickUsuario))
        .append($("<td>").text(item.fechaVenta));
        console.log($tr.wrap("<p>").html());
        $("#results").append($tr);
      });
    },
  });
}

function shwDashboard() {
  $('#dashboard').show();
  $('#btnDashboard').css("background-color", "var(--naranja)");
  $('#resumenVentas').hide();
  $('#btnResumenVentas').css("background-color", "transparent");
  $('#totalRecaudado').hide();
  $('#btnTotalRecaudado').css("background-color", "transparent");
  $('#registrarUsuario').hide();
  $('#btnRegistrarUsuario').css("background-color", "transparent");
}

function shwResumenVentas() {
  $('#dashboard').hide();
  $('#btnDashboard').css("background-color", "transparent");
  $('#resumenVentas').show();
  $('#btnResumenVentas').css("background-color", "var(--naranja)");
  $('#totalRecaudado').hide();
  $('#btnTotalRecaudado').css("background-color", "transparent");
  $('#registrarUsuario').hide();
  $('#btnRegistrarUsuario').css("background-color", "transparent");
}

function shwTotalRecaudado() {
  $('#dashboard').hide();
  $('#btnDashboard').css("background-color", "transparent");
  $('#resumenVentas').hide();
  $('#btnResumenVentas').css("background-color", "transparent");
  $('#totalRecaudado').show();
  $('#btnTotalRecaudado').css("background-color", "var(--naranja)");
  $('#registrarUsuario').hide();
  $('#btnRegistrarUsuario').css("background-color", "transparent");
}

function shwRegistrarUsuario() {
  $('#dashboard').hide();
  $('#btnDashboard').css("background-color", "transparent");
  $('#resumenVentas').hide();
  $('#btnResumenVentas').css("background-color", "transparent");
  $('#totalRecaudado').hide();
  $('#btnTotalRecaudado').css("background-color", "transparent");
  $('#registrarUsuario').show();
  $('#btnRegistrarUsuario').css("background-color", "var(--naranja)");
}

function logout() {
  window.location.replace("/");
}
