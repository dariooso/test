//Esta línea es un comentario
//Variables, almacenan el valor de lo que es necesario escribir.
var direccionURL1 = <a href=\"http:\/\/norfipc.com\/index.html\">NombreDelVinculo<\/a>'; 
var iframe1 = <iframe scrolling=\"no\" height=\"60\" frameborder=\"0\" width=\"430\" 
src=\"http:\/\/norfipc.com\/test\/direccion-ip.php\"><\/iframe>; 




 
//Funciones que identifican el lugar en la página y escriben el valor de la variable. 
function escribirlinks(){ 
document.getElementById('link1').innerHTML=direccionURL1; 
} 
 
function escribiriframe(){ 
document.getElementById('iframe1').innerHTML=iframe1; 
} 

//Ejecuta las funciones después que la pagina termine de cargar.
window.onload=function(){ 
escribirlinks(); 
escribiriframe(); 
} 
