# Documentacion about.css

 Esta seccion contiene la documentacion del codigo .html del elemento about de la pagina web. Dentro de su estructura visual posee: 
*  Barra de navegacion: conformada por cuatro botones con sus respectivas etiquetas, el primero lleva a la pagina principal, el segundo es el corresponde al boton que redirige al mismo blog, el tercer boton redirige a la pagina de nosotros, y el cuarto al area de directorio.
*  Boton superior de modo oscuro/claro: el boton se situa en el margen superior izquierdo, dicho boton es delizable y se encuentra anclado, su funcion es intercalar el modo oscuro claro y es capaz de recordar su ultima eleccion.
*  Boton superior Inicio: un boton ubicado en el margen superior izquierdo debajo del boton de modo oscuro claro, su funcion consiste en volver a la pagina inicio.
*  Boton logo UCR: un boton anclado en el margen superior derecho, su funcion es redirigir a la pagina de la Universidad de Costa Rica.
*  Cuerpo de la pagina: comprende el centro de la pagina web en esta seccion contiene notas sobre la agrupacion que llevo acabo el proyecto y alguna informacion extra.

### Codigo

Asigna atributos a los margenes superior e inferior del divisor por defecto del HTML y asigna la altura maxima por defecto.
``` css
.custom-container{    
    margin-top: 150px;
    margin-bottom: 150px;
    min-height: 90vh;
}
```

Asigna atributos al margen inferior de las filas por defecto en la pagina
``` css
.custom-row{
    margin-bottom: 15vh;
}
```
Asigna atributos de anchura y altura maxima a las columnas, ademas agrega tamaños por defecto de altura, ancho y margenes. 
``` css
.custom-col{
    max-width: 500px;
    max-height: 335px;
    width: 500px;
    height: 335px;
    margin: 45px 45px;
}
```
Agrega tamaño a la fuente de todos los 'p' parrafos que se encuenta en la pagina actual.
``` css
p{
    font-size: 1.3rem;
}
```
Asigna valores a los atributos de los divisores de imagenes que estan contenidos en la clase declarada, les asigna un color de fondo y un valor de color mediante un llamado a una propiedad personalizada, asigna un valor de anchura y altura y define un valor maximo para altura y anchura.
``` css
.image-container{
    background-color: var(--background-02);
    color: var(--font-4);
    width: 500px;
    height: 335px;
    max-width: 500px;
    max-height: 335px;    
}
```

Reasigna un valor predefinido para cuando el ancho de la pantalla es de solo 600px, dentro de este metodo esta contenido los ajustes para que el tamaño de dicha pantalla sea acorde.
``` css
@media (max-width: 600px){

}
```

Reasigna un valor de margen al contenedor por defecto de 70px para cuando el tamaño corresponde a 600px
``` css
.custom-container{
        margin-top: 70px
    }
```

Reasigna valores de altura, tamaño y margen al divisor que contiene las imagenes, para tamaños de pantalla de 600px
``` css
.image-container{
        width: 350px;
        height: 235px;
        margin: 0 auto;
    }
```
Reasigna valores de altura y ancho al elemento imagen contenido en el divisisor que contiene las imagenes (reescribe la instruccion anterior), para tamaños de pantalla de 600px
``` css
.image-container img{
        width: 350px;
        height: 235px;
    }
```
Reasigna valores de altura y ancho al divisor que contiene el divisor de columna para tamaños de pantalla de 600px
``` css
 .custom-col{
        width: 350px;
        height: 235px;
    }
```

Reasigna valores de tamaño de fuente a todos los divisores marcados como parrafo para tamaños de pantalla de 600px
``` css
 p{
        font-size: 1rem;
    }
```
Reasigna el valor de margen de columnas para tamaños de pantalla de 600px
``` css
.custom-col{
        margin: 0px 20px;
    }
```
Reasigna el valor de margen de filas para tamaños de pantalla de 600px
``` css
.custom-row{
        margin: 0 auto;
    }
```
Reasigna el valor de margen de columnas para tamaños de pantalla de 600px
``` css
.custom-col{
        margin: 30px 20px;
    }
```
Reasigna el valor de margen de filas para tamaños de pantalla de 600px
``` css
.custom-row{
        margin: 20 auto;
    }
```
Reasigna un valor predefinido para cuando el ancho de la pantalla es de solo 420px, dentro de este metodo esta contenido los ajustes para que el tamaño de dicha pantalla sea acorde.
``` css
@media(max-width: 420px){

}
```

Reasigna valores de altura, tamaño y margen al divisor que contiene las imagenes, para tamaños de pantalla de 420px
``` css
.image-container{
        width: 270px;
        height: 180px;
        margin: 0 auto;
    }
```
Reasigna valores de altura y ancho al elemento imagen contenido en el divisisor que contiene las imagenes (reescribe la instruccion anterior), para tamaños de pantalla de 420px
``` css
.image-container img{
        width: 270px;
        height: 180px;
    }
```

Reasigna el valor de margen de columnas para tamaños de pantalla de 420px
``` css
.custom-col{
        width: 300px;
        height: 200px;
    }
```

Reasigna el valor de margen de columnas para tamaños de pantalla de 420px
``` css
.custom-col{
        margin: 20px 10px;
    }
```

Reasigna el valor de margen de filas para tamaños de pantalla de 420px
``` css
.custom-row{
        margin: 0 auto;
        margin-bottom: 20vh;
    }
```

Reasigna un valor predefinido para cuando el ancho de la pantalla es de solo 320px, dentro de este metodo esta contenido los ajustes para que el tamaño de dicha pantalla sea acorde.
``` css
@media(max-width: 320px){

}
```
Reasigna valores de altura, ancho y margen al divisor que contiene las imagenes, para tamaños de pantalla de 320px
``` css
.image-container{
        width: 240px;
        height: 160px;
        margin: 0 auto;
    }
```
Reasigna valores de altura y ancho al elemento imagen contenido en el divisisor que contiene las imagenes (reescribe la instruccion anterior), para tamaños de pantalla de 320px
``` css
.image-container img{
        width: 240px;
        height: 160px;
    }
```
Reasigna el valor de margen de columnas para tamaños de pantalla de 320px
``` css
.custom-col{
        margin: 20px 10px;
    }
```

Reasigna valores de tamaño de fuente a todos los divisores marcados como parrafo para tamaños de pantalla de 320px
``` css
p{
        font-size: 0.8rem;
    }
```