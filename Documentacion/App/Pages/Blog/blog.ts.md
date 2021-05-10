# Documentacion blog.ts

 Esta seccion contiene la documentacion del codigo .ts del elemento blog de la pagina web. Dentro de su estructura visual posee: 
*  Barra de busqueda: se posciona en el margen derecho, filtra las busquedas del usuario de forma activa por lo que no requiere recargar la pagina y se encuentra anclada por lo cual no se movera al deslizar la pagina
*  Barra de navegacion: conformada por cuatro botones con sus respectivas etiquetas, el primero lleva a la pagina principal, el segundo es el corresponde al boton que redirige al mismo blog, el tercer boton redirige a la pagina de nosotros, y el cuarto al area de directorio.
*  Boton superior de modo oscuro/claro: el boton se situa en el margen superior izquierdo, dicho boton es delizable y se encuentra anclado, su funcion es intercalar el modo oscuro claro y es capaz de recordar su ultima eleccion.
*  Boton superior Inicio: un boton ubicado en el margen superior izquierdo debajo del boton de modo oscuro claro, su funcion consiste en volver a la pagina inicio.
*  Boton logo UCR: un boton anclado en el margen superior derecho, su funcion es redirigir a la pagina de la Universidad de Costa Rica.
*  Boton filtrar: un boton anclado en el margen izquierdo, posee una barra deslegable que revela algunos botones los cuales al hacer click filtran los resultados mostrados en el curso de la pagina por las categorias seleccionadas.
*  Boton de regreso a la parte superior: un boton ubicado en el margen inferior derecho, se mueve junto con el scroll por lo cual no desaparece de la pantalla, su funcion es volver a la parte superior de la pagina al hacer click.
*  Cuerpo de la pagina: comprende el centro de la pagina web en esta seccion se despliegan los distintos posts que se agregan a la pagina, posee la propiedad de scroll infinito lo cual hace que al bajar a la pagina se carguen los demas posts con forme se deciende en la lista.

### Codigo

Importa los componentes Component y OnInit desde la API Core de Angular

``` ts
import { Component, OnInit } from '@angular/core';
```

Importa  ActivatedRoute y Router de la API Router de Angular

``` ts
import { ActivatedRoute, Router } from '@angular/router';
```

Importa CheckBoxData desde Models de la carpeta fuente src local del programa
``` ts
import { CheckBoxData } from 'src/app/models/CheckBoxData';
``` 
Importa Categories y Post de la carpeta fuente src local del programa
``` ts
import { Categoria, Post } from 'src/app/models/Post';
```
Importa Posts desde Services de la carpeta fuente src local del programa
``` ts
import { PostService } from 'src/app/services/post.service';
```
Importa Filter de los modulos Operators de la libreria RxJS de Angular
``` ts
import { filter } from 'rxjs/operators';
```

Importa Subscription de la libreria RxJS de Angular
``` ts
import { Subscription } from 'rxjs';
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
export class BlogComponent implements OnInit {

}
```

Crea el atributo publico postStart de tipo numero, indica cual es el primer post que se debe obtener 
``` ts
public postStart: number;
```

Crea el atributo publico postLimit de tipo numero, indica el limite de post que se puede obtener cada vez que se haga scroll
``` ts
public readonly postLimit: number;
```

Crea el atributo publico categoryFilter de tipo string, filtra los post que se obtienen del backend segun las categorias
``` ts
public categoryFilter: string = '';
```

Crea el atributo publico postListSize de tipo numero, indica el tamaño de los post actuales, puede ser el total, el filtrado por categorias o puede ser el filtrado por la busqueda del usuario.
``` ts
public postListSize: number;
```

Crea el atributo publico postsList de tipo arreglo, contiene la informacion de los posts
``` ts
public postsList: Post[];
```

Crea el atributo publico categoriesList de tipo arreglo (checkBox), almacena los filtros de las categorias
``` ts
public categoriesList: (CheckBoxData)[] = [];
```

Crea el atributo publico searchQuery de tipo string, dato que ingresa el usuario para realizar un busqueda
``` ts
public searchQuery: string = '';
```

Crea el atributo publico searchParams de tipo string, dato que se envia al backend para ser devuelto como resultado
``` ts
public searchParams: string = '';
```

Inicializa el constructor del componente con los atributos privado _postService importado a traves de src/app/services/post.service, _activatedRoute importado a traves de @angular/router y _router importado a traves de @angular/router
``` ts
constructor(private _postService: PostService, private
_activatedRoute:ActivatedRoute, private _router:Router) {
    
  }
```

Inicializa los valores publicos postsList como un arreglo de Post, postListSize con el valor defecto de 0, postLimit con el valor defecto de 4, postStart con el valor defecto 0 y _router con el valor false.
``` ts
this.postsList = new Array<Post>();
this.postListSize = 0;
this.postLimit = 4;
this.postStart = 0;
this._router.routeReuseStrategy.shouldReuseRoute = () => false;
```

Metodo que carga las categorias, toma el tamaño de los posts además dicho tamaño puede estar incluido con un filtro de categorias, con un filtro de busqueda de usuario, o sin filtro y se obtiene la totalidad del tamaño de los post, retorna error si no lo logro, de lo contrario carga los posts.
``` ts
ngOnInit(): void {
    this.loadCategories();
    
    this._postService.getPostsListSize(this.categoryFilter, this.searchParams).subscribe(size => {
      this.postListSize = size;
    }, err => console.error(err));
    this.loadPostList();
  }
```

Metodo que devuelve a la parte superior de la pagina mediante los valores numericos del ScrollTop donde 0 es el incio de la pagina.
``` ts
goTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
```

Metodo encargado de redirigir a traves de la URL a una busqueda por filtro, la varible category recibe el valor del filtro de la seleccion desde el Home, luego toma la lista de categorias y las inicializa en falso para evitar que se muestren y realiza un busqueda de la categoria recibida en primera instancia donde si conincide con la busqueda y el resultado de la busqueda no es null le asigna el valor de true y actualiza el valor que cambio.
``` ts
loadCategoryFilterFromURL(){
    const category = this._activatedRoute.snapshot.paramMap.get('category');
    this.categoriesList.forEach((categ: CheckBoxData) => categ.value = false);
    const result = this.categoriesList.find( (categ:CheckBoxData)=>categ.name === category);
    if(result){
      result.value = true;
      this.valueChanged(result);
    }
  }
```
Recibe a traves del servicio de categorias la lista de categorias desde el backend, luego se toman las categorias y se agregan al filtro de categorias ademas se les asigna al valor checkbox de falso para que por defecto no tenga ningun filtro. En caso que no se cargue la informacion adecudamente se hace un llamado a loadCategoryFilterFromURL que cargara las categorias por defecto. Por ultimo si el proceso se realizo de forma correcta culmina si tuvo un error lo devuleve por consola.
``` ts
loadCategories(): void {
    this._postService.getEnabledCategories().subscribe((res: Categoria[]) => {
        this.categoriesList = res.map((value) => new CheckBoxData(value.nombre || '', false));
        this.loadCategoryFilterFromURL();
      }, err => console.error(err));
  }
```

Toma los valores que fueron asignados como nuevos y les asigna un CheckBoxdata con un valor de filtro vacio, luego se toma la lista de categorias y toma su valor de categoria. Mediante un iterador se recorre la lista del filtro de categorias y si el valor de la categoria es verdadero se asocia a traves del fultro de categorias con su nombre para poderlo filtrar. Por ultimo carga las post mediante el llamado loadPostList(bool) donde si el valor es true se cargan se limpian los posts y se generan o si es false se adiciona a los que ya estaban.
``` ts
async valueChanged(category: CheckBoxData) {
    this.categoryFilter = '';
    for (let category of this.categoriesList) {
      if (category.value) {
        this.categoryFilter += `_where[categorias.nombre]=${category.name}&`;
      }
    }
    await this.loadPostList(true);
```

Elimina la lista de post mediante un llamado a una promesa, esto hace que se espere hasta que el metodo culmine su llamado y los pueda borrar
``` ts
async deletePostsList(): Promise<void>{
    this.postsList = [];
  }
```

Recibe un valor bool el cual respectivamente si es true carga todos los posts o si es false adiciona a los post existente. Mediante el servicio de _postService obtiene el tamaño de la lista el cual esta condicionado por el filtro de categorias y la busqueda del usuario, puede tambien no estar condicionado por ninguno o estar condicionado por ambos al mismo tiempo, este valor se almacena en postListSize. Si debe limpiar post existentes la variable postStart se le asigna 0 ya que esta variable indica el inicio para el scroll infinito. Posteriormente se hac eun llamado a traves del _postService a la lista de posts lo cuales estan codicionados por el filtro de categorias, por la busqueda del usuario, el post actual y el limite de post que debe alojar esto se almacena en un arreglo de post. Posteriormente se condiciona por un if, si hay que limpiar los post se llama al metodo de borrado de post y se le hace push a la lista de posts, caso contrario (else) solo se cargan los post a la lista de post sin borrar. Por ultimo si resultara un error en el proceso se devuelve a la salida el error.
``` ts
async loadPostList(clear:boolean =  false): Promise<void> {
    this._postService.getPostsListSize(this.categoryFilter, this.searchParams).subscribe(
      size => {
        this.postListSize = size;
      })
      if(clear) this.postStart = 0;
      this._postService.getPostList(this.categoryFilter,this.searchParams, this.postStart, this.postLimit).subscribe(
      (posts: Post[]) => {
        if(clear){
          this.deletePostsList().then( ()=> {
            this.postsList.push(...posts);
          })
        }
        else{
          this.postsList.push(...posts);
        }        
      },
      err => {
        console.error(err)
      }
    );
```

Para este metodo se recibe un caracter a traves del searchQuery, si este caracter no viene vacio entonces se hace un solicitud al backend sobre los resultados que emparejen con el contenido del post, el titulo del post, a la descripcion o a los tres anteriores en conjunto, seguidamente se hace la solicitud de cargar los post por medio del loadPostList. Si el caracter de entrada resulta vacio, se limpia el parametro de busqueda searchParams y solicita los post de vuelta en su totalidad.
``` ts 
async loadPostListSearch(): Promise<void> {
    if (this.searchQuery) {
      this.searchParams = '';
      this.searchParams += `_where[_or][0][contenido_contains]=${this.searchQuery}&`;
      this.searchParams += `_where[_or][1][titulo_contains]=${this.searchQuery}&`;
      this.searchParams += `_where[_or][2][descripcion_contains]=${this.searchQuery}&`;
      await this.loadPostList(true);
    }else{
      this.searchParams = '';
      await this.loadPostList(true);
    }
  }
```

Metodo para el llamado al scroll infinito, si la posicion actual aun es inferior a la totalidad de los post indica que aun hay post por cargar, entonces se le adiciona el limite de post establecido por defecto postLimit y se procede a cargar mas post.
``` ts
onScroll() {
    if(this.postStart <= this.postListSize){
      this.postStart += this.postLimit;
      this.loadPostList();
    }
  }
```

