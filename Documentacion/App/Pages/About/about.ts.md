# Documentacion about.ts

 Esta seccion contiene la documentacion del codigo .ts del elemento about de la pagina web. Dentro de su estructura visual posee: 
*  Barra de navegacion: conformada por cuatro botones con sus respectivas etiquetas, el primero lleva a la pagina principal, el segundo es el corresponde al boton que redirige al mismo blog, el tercer boton redirige a la pagina de nosotros, y el cuarto al area de directorio.
*  Boton superior de modo oscuro/claro: el boton se situa en el margen superior izquierdo, dicho boton es delizable y se encuentra anclado, su funcion es intercalar el modo oscuro claro y es capaz de recordar su ultima eleccion.
*  Boton superior Inicio: un boton ubicado en el margen superior izquierdo debajo del boton de modo oscuro claro, su funcion consiste en volver a la pagina inicio.
*  Boton logo UCR: un boton anclado en el margen superior derecho, su funcion es redirigir a la pagina de la Universidad de Costa Rica.
*  Cuerpo de la pagina: comprende el centro de la pagina web en esta seccion contiene notas sobre la agrupacion que llevo acabo el proyecto y alguna informacion extra.

### Codigo

Importa los componentes Component y OnInit desde la API Core de Angular

``` ts
import { Component, OnInit } from '@angular/core';
```
Agrega un componente selector de CSS llamado app-blog que identifica esta directiva en una plantilla y activa la instanciación de la directiva.  
``` ts
@Component({
  selector: 'app-about'
})
```
Agrega un componente templeteUrl que brinda la ruta relativa de un archivo de plantilla para un componente angular.
``` ts
@Component({
  templateUrl: './about.component.html'
})
```
Agrega un componente styleUrls que brinda la ruta relativa a un archivo que contienen hojas de estilo CSS para usar en este componente.
``` ts
@Component({
  styleUrls: ['./about.component.css']
})
```

Exporta la clase para ser usada en otras instancias
``` ts
export class AboutComponent implements OnInit {

}
```

Inicializa el constructor del componente con los atributos privado, en particular este se encuentra vacio debido a que no se pensaron valores en particular para inicializar
``` ts
constructor() { }
```

Unico metodo del ts, hace un llamado al componente y lo inicia, en particular carga los datos generados desde el html y el css.
``` ts
ngOnInit(): void {
  }
```