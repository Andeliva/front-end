
# Documentacion phonebook.css

Esta seccion contiene la documentacion del codigo .css del elemento phonebook de la pagina web. Dentro de su estructura visual posee: 
* Barra de bsusqueda: Cuadro donde se escribe el texto para realizar la busca de un contacto que lo contenga o así como un botón con el icono de busqueda
* Lista de contactos: se muestra una lista de contactos ya sea los axistentes aí como los ingresados en la barra de busqueda, en el queb cada uno muestra su titulo así como una  lista de sus números de telefono. Al dar click a un contacto muestra un Modal con la información completa del contacto
* Modal de información: muestra el título, la descripción, el horario, un enlace al lugar, un enlace al sitio web y una lista de los numeros de telegono del contacto. Al final sale un botón para cerrar
* Botón para ir arriba: este se puede clikear y presenta la parte superior de la página, es descrito en el componente fab
* Footer:  muestra los detalles descritos en el componente footer


### Codigo

En cualquier atributo del home que tenga la clase  container tendrá un ancho de 40%, magenes de un 10vh y atomatico, tamaño de letra de 1 rem y un padding de 0 y 5vm.
``` css
.container{
    width: 40%;
    margin: 10vh auto;
    font-size: 1rem;
    padding: 0 5vw;
}
```

En cualquier atributo del home que tenga la clase contact 
``` css
.contact{
    border-bottom: 1px solid var(--font-1);
    width: 100%;
    padding: 2vh 0;
}
```

``` css
.phone-list{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
}
```

``` css
.contact:hover{
    color: var(--font-3);
    cursor: pointer;
}
```
``` css
.contact-title{
    font-size: 1.3rem;
}
```

``` css
.search-container{
    height: 30px;
}
```

``` css
.search-form{
    position:relative; left: 17vw;
}
```

``` css
.search-input{
    border: 1px solid rgb(175, 175, 175);  
    font-size: 16px;
    width: 200px;
    height: 30px;
    background-color:transparent;
    margin-top: 0.2rem;
    margin-right: 0.2rem;
    border-radius: 20px;
    outline: none !important;
    box-sizing: border-box;
    padding: 0 1rem;

    color: var(--font1);
    vertical-align: middle;
}
```

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

``` css
.initial-letter{
    font-size: 3rem;
}
```

``` css
a {
    color: var(--warning-01);
    text-decoration: underline;
    margin:0 1%;
}
```

``` css
#instructions{
   padding-right: 40%; margin: 5vh 0;
}
```

``` css
.modal-title{
    font-size: 1.6rem;
}
```

``` css
@media (max-width: 1024px) {
    .container{
        width: 60%;
    }
    .search-form{
        position:relative; left: 30vw;
    }
}
```

``` css
@media (max-width: 800px) {
    .container{
        width: 70%;
    }
    .search-form{
        position:relative; left: 35vw;
    }
}
```

``` css
@media (max-width: 420px) {
    .container{
        width: 95%;
    }
    .search-form{
        /* position:relative; left: 0vw; */
        position: static;
        margin: 0 auto;
    }
    #instructions{
        padding: 0; margin: 5vh 0;
     }
     .contact-title{
         font-size: 1.2rem;
     }
     .initial-letter{
         text-align: center;
     }
}
```