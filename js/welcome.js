$(document).ready(function(){
	//Según se cargue el HTML, consume un servicio GET para obtener
	//Todos los usuarios y los rellena en la tabla vacía results.
	$.ajax({
        url: 'https://localhost:44362/usuario',
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        success: function(data, status){
            //Por cada elemento dentro del array data, construye una fila (tr)
            //y añade celdas con los campos de cada elemento del array.
		    $.each(data, function(i, item) {
		        var $tr = $('<tr>').append(
		            $('<td>').text(item.username)
		        ); //.appendTo('#records_table');
		        console.log($tr.wrap('<p>').html());
		        $('#results').append($tr);
		    });
			
      	}
    });
});

//Función para volver a login
function logout(){
	window.location.replace("/test/APIWebFE/views/login.html");
}
