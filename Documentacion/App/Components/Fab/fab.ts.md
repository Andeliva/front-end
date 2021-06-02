
# Documentacion fab.ts

 Esta seccion contiene la documentacion del codigo .ts del componente fab de la pagina web. Dentro de su estructura visual posee: 
*  Boton de forma circular con una flecha: Visualmente es un boton ubicado en la parte inferior derecha de las paginas este boton permite al usuario volver al incio de la pagina, dicho boton posee forma circular con una flecha en direccion superior, se puede encontrar en las paginas de Directorio y Blog, además puede cambiar sus colores al alternar entre modo claro y modo oscuro para mejorar la legibilidad del mismo. 

### Codigo

Importa los componentes Component y OnInit desde la API Core de Angular

``` ts
import { Component, OnInit } from '@angular/core';
```

Agrega un componente selector de CSS llamado app-blog que identifica esta directiva en una plantilla y activa la instanciación de la directiva.  
``` ts
@Component({
  selector: 'app-blog'
})
```
Agrega un componente templeteUrl que brinda la ruta relativa de un archivo de plantilla para un componente angular.
``` ts
@Component({
  templateUrl: './blog.component.html'
})
```
Agrega un componente styleUrls que brinda la ruta relativa a un archivo que contienen hojas de estilo CSS para usar en este componente.
``` ts
@Component({
  styleUrls: ['./blog.component.css']
})
```

Exporta la clase para ser usada en otras instancias
``` ts
export class FabComponent implements OnInit {

}
```

Asigna como valor de entrada la variable color la cual se recibe como un string que va a contener el valor para dicha variable, esta se podra modificar desde otras instancias. Esta hace referencia al color interno del boton del fab
``` ts
@Input() color: string;
```

Asigna como valor de entrada la variable backgroundColor la cual se recibe como un string que va a contener el valor para dicha variable, esta se podra modificar desde otras instancias. Esta hace referencia al color del fondo del boton del fab
``` ts
@Input() backgroundColor: string;
```

Inicializa el constructor del componente fab
``` ts
constructor() {
    
}
```

Asigna a la variable color el valor ingresado por parametro y se lo asigna como string de color a dicha variable.
``` ts
this.color = 'var(--fab-color)';
```

Asigna a la variable backgroundColor el valor ingresado por parametro y se lo asigna como string de color a dicha variable.
``` ts
this.backgroundColor = 'var(--fab-background-color)';
```

Metodo void que que opera a la clase fab, en particular vacio debido a que este no maneja instrucciones internas para sus procesos. 
``` ts
ngOnInit(): void {
}
```
