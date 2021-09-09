# Documentación Observatorio de información TCU 652 
## Indice de comentarios del codigo
   * ### [Componentes](Observatorio/src/app/components)
      * #### [Codigo Darktoggle](Observatorio/src/app/components/darktoggle)
        * #### [Documentacion Darktoggle CSS](Documentacion/App/Components/Darktoggle/darktoggle.css.md)
        * #### [Documentacion Darktoggle HTML](Documentacion/App/Components/Darktoggle/darktoggle.html.md)
        * #### [Documentacion Darktoggle TS](Documentacion/App/Components/Darktoggle/darktoggle.ts.md)
      * #### [Codigo Fab](Observatorio/src/app/components/fab)
        * #### [Documentacion Fab CSS](Documentacion/App/Components/Fab/fab.css.md)
        * #### [Documentacion Fab HTML](Documentacion/App/Components/Fab/fab.html.md)
        * #### [Documentacion Fab TS](Documentacion/App/Components/Fab/fab.ts.md)
      * #### [Codigo Footer](Observatorio/src/app/components/footer)
        * #### [Documentacion Footer CSS](Documentacion/App/Components/Footer/footer.css.md)
        * #### [Documentacion Footer HTML](Documentacion/App/Components/Footer/footer.html.md)
        * #### [Documentacion Footer TS](Documentacion/App/Components/Footer/footer.ts.md)
      * #### [Codigo Navbar](Observatorio/src/app/components/navbar)
        * #### [Documentacion Navbar CSS](Documentacion/App/Components/Navbar/navbar.css.md)
        * #### [Documentacion Navbar HTML](Documentacion/App/Components/Navbar/navbar.html.md)
        * #### [Documentacion Navbar TS](Documentacion/App/Components/Navbar/navbar.ts.md)
      * #### [Codigo Post-Card](Observatorio/src/app/components/post-card)
        * #### [Documentacion Post-Card CSS](Documentacion/App/Components/Post-Card/post-card.css.md)
        * #### [Documentacion Post-Card HTML](Documentacion/App/Components/Post-Card/post-card.html.md)
        * #### [Documentacion Post-Card TS](Documentacion/App/Components/Post-Card/post-card.ts.md)
   * ### [Codigo Helpers](Observatorio/src/app/helpers)
      * #### [Documentacion PostStyleConfig TS](Documentacion/App/Helpers/postStyleConfig.ts.md)
      * #### [Documentacion URLparser TS](Documentacion/App/Helpers/URLparser.ts.md)
   * ### [Models](Observatorio/src/app/models)
   * ### [Pages](Observatorio/src/app/pages)
      * #### [Codigo About](Observatorio/src/app/pages/about)
        * #### [Documentacion About CSS](Documentacion/App/Pages/About/about.css.md)
        * #### [Documentacion About HTML](Documentacion/App/Pages/About/about.html.md)
        * #### [Documentacion About TS](Documentacion/App/Pages/About/about.ts.md)
      * #### [Codigo Blog](Observatorio/src/app/pages/blog)
        * #### [Documentacion Blog CSS](Documentacion/App/Pages/Blog/blog.css.md)
        * #### [Documentacion Blog HTML](Documentacion/App/Pages/Blog/blog.html.md)
        * #### [Documentacion Blog TS](Documentacion/App/Pages/Blog/blog.ts.md)
      * #### [Codigo Contact](Observatorio/src/app/pages/contact)
        * #### [Documentacion Contact CSS](Documentacion/App/Pages/Contact/contact.css.md)
        * #### [Documentacion Contact HTML](Documentacion/App/Pages/Contact/contact.html.md)
        * #### [Documentacion Contact TS](Documentacion/App/Pages/Contact/contact.ts.md)
      * #### [Codigo Home](Observatorio/src/app/pages/home)
        * #### [Documentacion Home CSS](Documentacion/App/Pages/Home/home.css.md)
        * #### [Documentacion Home HTML](Documentacion/App/Pages/Home/home.html.md)
        * #### [Documentacion Home TS](Documentacion/App/Pages/Home/home.ts.md)
      * #### [Codigo Phonebook](Observatorio/src/app/pages/phonebook)
        * #### [Documentacion Phonebook CSS](Documentacion/App/Pages/Phonebook/phonebook.css.md)
        * #### [Documentacion Phonebook HTML](Documentacion/App/Pages/Phonebook/phonebook.html.md)
        * #### [Documentacion Phonebook TS](Documentacion/App/Pages/Phonebook/phonebook.ts.md)
      * #### [Codigo Post](Observatorio/src/app/pages/post)
        * #### [Documentacion Post CSS](Documentacion/App/Pages/Post/post.css.md)
        * #### [Documentacion Post HTML](Documentacion/App/Pages/Post/post.html.md)
        * #### [Documentacion Post TS](Documentacion/App/Pages/Post/post.ts.md)
   * ### [Services](Observatorio/src/app/services)
      * #### [Documentacion Contact TS](Documentacion/App/Services/contact.ts.md)
   * ### [Assets](Observatorio/src/assets)
   * ### [Environments](Observatorio/src/environments)

## Definiciones, acronimos y abreviaturas

**Inicio**: pagina principal del sitio web.
**Blog**: pagina que recopila todas las publicaciones que se han realizado en la sitio web.
**Nosotros**: pagina que brinda un apartado informativo sobre los involucrados en el proyecto.
**Directorio**: Apartado ubicado en la pagina inicio que brinda informacion de contacto con algunos entes afines al proyecto de TCU
**Publicaciones**: elementnos informativos publicados en la pagina para ser consultados por los usuarios que visiten el sitio web.  
**Eventos**: Registro de eventos informativos, estos poseen titulo, fecha, enlace y descripcion.
**Categorias**: Clasificaciones que posee la pagina para aplicar a las distintas publicaciones que se registren.
**Contacto**: Informacion especifica sobre algun ente a fin al proyecto
**UCR**: Universidad de Costa Rica

## Introduccion
La función de este documento es explicar y detallar las tecnologías, diseños y funcionalidades de la pagina del Observatorio de Migración, este consiste en un sitio web en el que se realizan publicaciones informativas sobre temas relaciones con migracion. Además, proporciona contactos, eventos y enlaces a material de ayuda para los usuarios de la página.

El documento está compuesto por una portada, introducción, miembros del equipo de desarrollo, descripciones del sistema, artefactos de la base de datos utilizados, decisiones técnicas y bibliografía

## Listado de equipos y miembros de los equipos

* Eduardo
* Jose David
* Jim
* Andrey
* Stephanie


## Descripción General del sistema

Esta es una pagina web creada para el proyecto de TCU 652 de la Universidad de Costa Rica. Este proyecto viene a servir de herramienta para la publicacion de informacion y contenido relacionada con las distintas tematicas del proyecto. La pagina presenta funcionalidades para agregar publicaciones, contcatos y eventos mediante la administracion del backend, su contenido es enfocado a la consulta e informacion por lo que a traves de ella solo pueden realizar consultas.

## Problema que resuelve
Falta de un lugar que brinde información  centralizada sobre los procesos, actividades y recursos acerca de temas para las personas migrantes. 


## Interesados del proyecto y tipos de usuarios

* Personas que atraviecen un proceso migratorio
* Investigadores y estudiantes interesados en los procesos migratorios
* Personas atraviecen un proceso de naturalización

## Solución propuesta

Se busca lograr abarcar, de manera sencilla y fácil de comprender, la mayor cantidad de información posible que sea de utilidad para las personas migrantes y a su vez simplificar los procesos ante los que se podrían encontrar en las instituciones del país.

## Visión del producto


## Requerimientos

## Problema que resuelve