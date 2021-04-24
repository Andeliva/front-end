# Documentacion blog.html

 Esta seccion contiene la documentacion del codigo .html del elemento blog de la pagina web. Dentro de su estructura visual posee: 
*  Barra de busqueda: se posciona en el margen derecho, filtra las busquedas del usuario de forma activa por lo que no requiere recargar la pagina y se encuentra anclada por lo cual no se movera al deslizar la pagina
*  Barra de navegacion: conformada por cuatro botones con sus respectivas etiquetas, el primero lleva a la pagina principal, el segundo es el corresponde al boton que redirige al mismo blog, el tercer boton redirige a la pagina de nosotros, y el cuarto al area de directorio.
*  Boton superior de modo oscuro/claro: el boton se situa en el margen superior izquierdo, dicho boton es delizable y se encuentra anclado, su funcion es intercalar el modo oscuro claro y es capaz de recordar su ultima eleccion.
*  Boton superior Inicio: un boton ubicado en el margen superior izquierdo debajo del boton de modo oscuro claro, su funcion consiste en volver a la pagina inicio.
*  Boton logo UCR: un boton anclado en el margen superior derecho, su funcion es redirigir a la pagina de la Universidad de Costa Rica.
*  Boton filtrar: un boton anclado en el margen izquierdo, posee una barra deslegable que revela algunos botones los cuales al hacer click filtran los resultados mostrados en el curso de la pagina por las categorias seleccionadas.
*  Boton de regreso a la parte superior: un boton ubicado en el margen inferior derecho, se mueve junto con el scroll por lo cual no desaparece de la pantalla, su funcion es volver a la parte superior de la pagina al hacer click.
*  Cuerpo de la pagina: comprende el centro de la pagina web en esta seccion se despliegan los distintos posts que se agregan a la pagina, posee la propiedad de scroll infinito lo cual hace que al bajar a la pagina se carguen los demas posts con forme se deciende en la lista.


### Codigo
 Hace un llamado a la funcion de scroll infinito, permite que la pagina conforme se baja siga cargando de forma activa las entradas.

``` html
 <div class="infinite-scroll" infiniteScroll [infiniteScrollDistance]="2" (scrolled)="onScroll()"> 
``` 
<br/>

 Crea divisores de html, el primero es un contenedor con los demas contenedores dentro. Todos los contenedores estan señalados por clase.

``` html
  <div class="tools">
    <div class="row">
      <div class="dropdown">
      </div>
    </div>
  </div>
```

 Crea un boton en html que corresponde al boton de categorias desplegables. Posee atributos de nombres de clase y id.

``` html
<button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button"
          id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
          Filtrar por categorías
</button>
```

 Crea una etiqueta que enlaza a un componente de angular, esta se encarga de llamar a las categorias que van en el boton de filtro por categorias, mediante un ciclo (ngfor) recorre el arreglo de categorias para desplegarlas al presionar el boton.
``` html
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" *ngIf="categoriesList.length">
          <a class="dropdown-item" *ngFor="let category of categoriesList" onclick="event.stopPropagation()">
            <mat-checkbox class="category-checkbox" [(ngModel)]="category.value" (change)="valueChanged(category)"><span
                class="category-checkbox-label">{{category.name}}</span></mat-checkbox>
          </a>
</div>
```

 Crea un divisor que contienen el boton de busqueda en la pagina, dentro permite que cada vez que se haga una escritura en el cuadro de busqueda se haga un llamado al metodo de typescript para refrescar los post que se muestran. Por ultimo en la linea 21 hace una modificacion a la imagen que es la que se muestra como boton de busqueda.
``` html
      <div class="search-container">
        <div class="search-form">
          <input type="text" placeholder="Buscar" class="search-input" [(ngModel)]="searchQuery"
            (ngModelChange)="loadPostListSearch()">
          <img alt="menu" class="search-button" src="assets/icons/search.svg" width="24px" heigth="24px">
```

 Boton para ir a la parte superior de la pagina indistintamente de la posicion actual, si ya se encuentra en la aprte superior quedara en el mismo lugar.
``` html
<app-fab (click)="goTop()"></app-fab>
```

 Llamada al metodo que permite cargar los posts de la pagina.
``` html
<div class="custom-container" *ngIf="postsList.length">
    <app-post-card *ngFor="let post of postsList" [post]="post"></app-post-card>
  </div>
```