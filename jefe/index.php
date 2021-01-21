<!DOCTYPE html>
<html>
  <head>
    <title>InitialD · Jefe</title>
    <?php include $_SERVER["DOCUMENT_ROOT"].'/common/head.html';?>
    <link rel="stylesheet" href="/css/jefe.css" />
  </head>
  <body>
    <?php include $_SERVER["DOCUMENT_ROOT"].'/common/navBars.html';?>
    <div id="contenido">
      <div id="dashboard">
        <span class="mensaje">DASHBOARD</span>
      </div>
      <div id="resumenVentas">
        <div class="loader">
          <span class="cargando"
            ><center>
              <img src="/images/loading.gif" /><br />Cargando datos...
            </center></span
          >
        </div>
        <div class="topBar">
          <label
            ><input type="radio" name="filtro" onclick="todos()" checked /> Ver
            todas las ventas</label
          >
          <label
            ><input type="radio" name="filtro" onclick="porFecha()" /> Por
            fecha</label
          >
          <label
            ><input type="radio" name="filtro" onclick="porConcesionario()" />
            Por concesionario</label
          >
          <label
            ><input type="radio" name="filtro" onclick="porVendedor()" /> Por
            Vendedor</label
          >
          <label
            ><input type="radio" name="filtro" onclick="porMarca()" /> Por
            marca</label
          >
        </div>
        <table id="results"></table>
      </div>
      <div id="totalRecaudado">
        <span class="mensaje">TOTAL RECAUDADO</span>
      </div>
      <div id="registrarUsuario">
        <span class="mensaje">REGISTRAR USUARIO</span>
      </div>
    </div>
    <script src="/js/welcome.js"></script>
  </body>
</html>
