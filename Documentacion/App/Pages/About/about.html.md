# Documentacion about.html

 Esta seccion contiene la documentacion del codigo .html del elemento about de la pagina web. Dentro de su estructura visual posee: 
*  Barra de navegacion: conformada por cuatro botones con sus respectivas etiquetas, el primero lleva a la pagina principal, el segundo es el corresponde al boton que redirige al mismo blog, el tercer boton redirige a la pagina de nosotros, y el cuarto al area de directorio.
*  Boton superior de modo oscuro/claro: el boton se situa en el margen superior izquierdo, dicho boton es delizable y se encuentra anclado, su funcion es intercalar el modo oscuro claro y es capaz de recordar su ultima eleccion.
*  Boton superior Inicio: un boton ubicado en el margen superior izquierdo debajo del boton de modo oscuro claro, su funcion consiste en volver a la pagina inicio.
*  Boton logo UCR: un boton anclado en el margen superior derecho, su funcion es redirigir a la pagina de la Universidad de Costa Rica.
*  Cuerpo de la pagina: comprende el centro de la pagina web en esta seccion contiene notas sobre la agrupacion que llevo acabo el proyecto y alguna informacion extra.

### Codigo

Divisor de clase que contiene todos los subelementos de la pagina, el formato que se aplique a este divisor afecta a toda la pagina.
``` html
<div class="container-fluid px-md-5 custom-container" >   
</div>
```

Divisor de clase para las notas que estan contenidas dentro del cuerpo de la pagina
``` html
<div class="row custom-row justify-content-center" >   
</div>
```
Divisors de clase para la imagen de la nota posteada en la pagina, dentro del divisor se brinda la ruta source a la imagen .jpg y mediante una declaracion inline se asigna ancho y altura.
``` html
<div class="image-container mx-auto" >
    <img alt="" class="offset negative-offset-y negative-offset-x" src="../../../assets/images/ab1.jpg" width="500" height="335">
</div>
```
Divisor de clase que contiene el texto que se situa en el centro de la pagina y que se despliega junto a las imagenes
``` html
<div class="col-xl custom-col">
    <p>Esse anim sunt ad labore commodo laborum qui. Adipisicing Lorem dolor non culpa nisi quis deserunt qui nisi aliquip adipisicing. In duis aliqua laboris aliquip nostrud.</p>
    <p>Esse anim sunt ad labore commodo laborum qui. Adipisicing Lorem dolor non culpa nisi quis deserunt qui nisi aliquip adipisicing. In duis aliqua laboris aliquip nostrud.</p>
</div>
```

El objetivo del componenete About es mostrar informacion valiosa del proyecto y de las personas que lo desarrollaron, por este motivo estos post son estaticos y se situan en el codigo fuente dado que su objetivo es que perdure en la pagina y no esta pensado para ser modificados de forma activa. Por este motivo en la pagina se incluyeron con codigo de forma homóloga para los distintos post, por lo que si se desease agregar otro se deberá agregar el codigo un nuevo bloque de codigo debajo del ultimo agregado. 