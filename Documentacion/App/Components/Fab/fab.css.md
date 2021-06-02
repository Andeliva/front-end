
# Documentacion fab.css

 Esta seccion contiene la documentacion del codigo .css del componente fab de la pagina web. Dentro de su estructura visual posee: 
*  Boton de forma circular con una flecha: Visualmente es un boton ubicado en la parte inferior derecha de las paginas este boton permite al usuario volver al incio de la pagina, dicho boton posee forma circular con una flecha en direccion superior, se puede encontrar en las paginas de Directorio y Blog, además puede cambiar sus colores al alternar entre modo claro y modo oscuro para mejorar la legibilidad del mismo. 

### Codigo

Corresponde al relleno del boton este se define como una propiedades CSS que se utilizan para generar espacio alrededor del contenido de un elemento, dentro de los bordes definidos, ademas se le asigna el valor de 24px como base.
``` css
padding: 20px;
```

Corresponde a la propiedad de relleno del boton esta establece el ancho de un elemento, el ancho de un elemento no incluye relleno, bordes ni márgenes, el ancho para este boton se asigna como 100% que corresponde al tamaño base de la figura.

``` css
width: 100%;
```

Corresponde a la propiedad de display la cual especifica el comportamiento de visualización (el tipo de cuadro de representación) de un elemento. El valor predeterminado en XML es en línea, incluidos los elementos SVG. Para este caso se le asigna el valor de flex que corresponde a un elemento como un contenedor flexible a nivel de bloque

``` css
display: flex;
```

Corresponde a la propiedad de del texto en el divisor, la justify-content alinea los elementos del contenedor flexible cuando los elementos no utilizan todo el espacio disponible en el eje principal (horizontalmente).
``` css
justify-content: flex-end;
```

Corresponde a la propiedad de posicion especifica el tipo de método de posicionamiento utilizado para un elemento. La posicion Fixed está posicionada en relación con la ventana gráfica, lo que significa que siempre permanece en el mismo lugar incluso si se desplaza la página. Las propiedades superior, derecha, inferior e izquierda se utilizan para colocar el elemento.
``` css
position: fixed;
```

Corresponde a la propiedad de tamaño del boton, esta se le asgino el valor de 10px de forma base.
``` css
bottom: 10px;
```

Corresponde a la propiedad z-index que indica el orden de un elemento posicionado y sus descendientes. Cuando varios elementos se superponen, los elementos con mayor valor z-index cubren aquellos con menor valor.
``` css
z-index: 2;
```
