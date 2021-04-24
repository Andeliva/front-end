# Documentacion blog.css

 Esta seccion contiene la documentacion del codigo .css del elemento blog de la pagina web. Dentro de su estructura visual posee: 
*  Barra de busqueda: se posciona en el margen derecho, filtra las busquedas del usuario de forma activa por lo que no requiere recargar la pagina y se encuentra anclada por lo cual no se movera al deslizar la pagina
*  Barra de navegacion: conformada por cuatro botones con sus respectivas etiquetas, el primero lleva a la pagina principal, el segundo es el corresponde al boton que redirige al mismo blog, el tercer boton redirige a la pagina de nosotros, y el cuarto al area de directorio.
*  Boton superior de modo oscuro/claro: el boton se situa en el margen superior izquierdo, dicho boton es delizable y se encuentra anclado, su funcion es intercalar el modo oscuro claro y es capaz de recordar su ultima eleccion.
*  Boton superior Inicio: un boton ubicado en el margen superior izquierdo debajo del boton de modo oscuro claro, su funcion consiste en volver a la pagina inicio.
*  Boton logo UCR: un boton anclado en el margen superior derecho, su funcion es redirigir a la pagina de la Universidad de Costa Rica.
*  Boton filtrar: un boton anclado en el margen izquierdo, posee una barra deslegable que revela algunos botones los cuales al hacer click filtran los resultados mostrados en el curso de la pagina por las categorias seleccionadas.
*  Boton de regreso a la parte superior: un boton ubicado en el margen inferior derecho, se mueve junto con el scroll por lo cual no desaparece de la pantalla, su funcion es volver a la parte superior de la pagina al hacer click.
*  Cuerpo de la pagina: comprende el centro de la pagina web en esta seccion se despliegan los distintos posts que se agregan a la pagina, posee la propiedad de scroll infinito lo cual hace que al bajar a la pagina se carguen los demas posts con forme se deciende en la lista.

### Codigo

Modifica las propiedades del contenedor de los posts de la pagina, particularmente su posicion y margenes.
``` css
.custom-container {
    margin-top: 1.5vw;
    margin-left: 1vw;
    margin-right: 1vw;
    display: grid;
    grid-gap: 1rem;
    padding: 0;
    grid-template-columns: 23vw 23vw 23vw 23vw;
    justify-content: center;
    padding-bottom: 11vh;
    height: 80%;
}
```

Ajusta las propiedades de divisor row, corresponde al contenedor del filtro de busqueda y al boton de busqueda
``` css
.row{
    display: flex;
    justify-content: space-between;
}
```

Ajusta las propiedad altura del divisor que contiene las propiedades del boton de busqueda.
``` css
.search-container{
    height: 30px;
}
```

Ajusta las propiedades especificas del boton de busqueda
``` css
.search-button{
    display: inline;
    z-index: 99;
    position: relative;
    top: 1.5px;
    right: 2.2rem; 
    background: transparent;
    border: none;
    outline: none;
    color: var(--font1);
}
```

Ajusta el divisor que contiene los post para tamaño de pantalla de 900 pixeles.
``` css
@media (max-width: 900px) {
    .custom-container {
        grid-template-columns: auto auto auto;
        padding-bottom: 9vh;
    }
}
```
Ajusta el divisor que contiene los post para tamaño de pantalla de 750 pixeles.
``` css
@media (max-width: 750px) {
    .custom-container {
        grid-template-columns: auto auto;
        padding-bottom: 9vh;
    }
}
```
Ajusta el divisor que contiene los post para tamaño de pantalla de 500 pixeles.
``` css
@media (max-width: 500px) {
    .custom-container {
        grid-template-columns: auto;
        padding-bottom: 9vh;
    }
}
```
Ajusta las propiedades de las listas de forma global en la pagina actual.
``` css
ul {
    list-style-type: none;
    margin-top: 4px;
}
```

Ajsta las prpiedades del divisor tools que contiene el filtro de busqueda y el boton de busqueda.
``` css
.tools{
      margin: 7vh 2vh 5vh;
}
```

Ajusta el tamaño de la pagina para tamaño de pantalla de 1024 pixeles.
``` css
@media (max-width: 1024px) {
}
```

Ajusta el tamaño de la pagina para tamaño de pantalla de 400 pixeles.
``` css
@media (max-width: 400px) {
    .row{
        justify-content: center;
    }
    .tools{
        margin: 5vh 2vh 5vh;
    }
    .search-container{
        margin-left: 2rem;
    }
}
```

Ajusta las propiedad color de fondo del boton desplegable de filtro de busqueda.
``` css
.dropdown-menu{
    background-color:var(--filter);
}
```

Modifica el color de fondo del boton desplegable de filtro de categorias, especificamente el fondo que se despleiga al presionar el boton
``` css
.dropdown-item:hover{
    background-color: var(--filter-hover);
}
```

Modifica el valor de los espacios de check en el boton de filtro de categorias
``` css
.dropdown-item:hover .category-checkbox-label{
    color: var(--font-1);
}
```

Modifica el color de fondo del los objetos que se encuentrar en el boton de filtro de categorias
``` css
.dropdown-item:active{
    background-color: transparent;
} 
```

Modifica el color de botones de check que se encuentrar en el filtro de categorias.
``` css
.category-checkbox{
    color: var(--background-02);
}
```

Modifica los valores de las variables de las etiquetas que se encuentran dentro del filtro de categorias
``` css
.category-checkbox-label{
 color: var(--font-2);
}
```

Modifica los margenes del divisor que contiene el filtro de categorias.
``` css
.dropdown{
    margin-left: 1vw;
}
```

Define una altura minima para la propiedad infinite scroll de la pagina
``` css
.infinite-scroll{
    min-height: 90vh;
}
```

Modifica los colores del boton de filtro de categoria indentificado por su ID (al boton sin desplegarse aun)
``` css
#dropdownMenuButton{
    background-color:transparent; 
    color: var(--font-1); 
    border:none; 
    outline:none;
}
```