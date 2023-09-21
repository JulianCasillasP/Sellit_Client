# Sellit_Client

# Proyecto de Venta de Artículos Usados

Bienvenido al repositorio del Proyecto de Venta de Artículos Usados. Esta aplicación web permite a los usuarios comprar y vender artículos usados de manera sencilla y eficiente. 
Bienvenido al repositorio del Proyecto de Venta de Artículos Usados. Esta aplicación web permite a los usuarios comprar y vender artículos usados de manera sencilla y eficiente. 

## Repositorios

Este proyecto se divide en dos repositorios separados:

 https://github.com/JulianCasillasP/Sellit_Client

 https://github.com/JulianCasillasP/Sellit_Server


Este frontend se encuentra en un repositorio independiente al backend para facilitar el desarrollo. 

## Despliegue

Puedes ver la aplicación completamente desplegada aquí.

## Guía de instalación

- Hacer un fork de este repositorio
- Clonar este repositorio

```shell
$ cd Sellit_Client
$ npm install
$ npm start
```


## Funcionalidades

El frontend del Proyecto de Venta de Artículos Usados ofrece las siguientes funcionalidades:

Explorar Artículos: Los usuarios pueden navegar y explorar la lista de artículos disponibles para la compra.

Ver Detalles del Artículo: Los usuarios pueden ver detalles completos de un artículo específico, incluyendo su nombre, fotografía, descripción, precio y condición.

Crear un Nuevo Artículo: Los usuarios registrados pueden crear nuevos anuncios para vender sus artículos usados.

Editar y Eliminar Anuncios: Los usuarios registrados pueden editar y eliminar sus propios anuncios.

Registro y Autenticación: Los usuarios pueden registrarse como nuevos usuarios y autenticarse para acceder a funciones exclusivas.

## Rutas

| Route                               | Privacy          | Renders                   |
| ----------------------------------- | :--------------: | --------------------------|
| /                                   | Public           | Home Page                 |
| /categories                         | Public           | Categories Page           |
| /categories/:category               | Public           | Articles List Page        |
| /categories/:category/:id           | Public           | Article Details Page      |
| /post-article                       | Private (user)   | Post Article Form         |
| /login                              | Public           | Login Page                |
| /signup                             | Public           | Signup Page               |
| /profile                            | Private (user)   | User Profile Page         |
| /my-articles                        | Private (user)   | My Articles List Page     |
| /my-purchases                       | Private (user)   | My Purchases List Page    |
| /admin                              | Private (admin)  | Admin Panel Page          |
| /admin/article/:id                  | Private (admin)  | Edit Article Page         |


## Uso de Componentes y Estilos
En el desarrollo de este frontend, hemos utilizado una variedad de componentes de React y estilos CSS para lograr una interfaz de usuario atractiva y fácil de usar. Estos componentes y estilos se han organizado de manera modular y se pueden reutilizar en todo el proyecto.

## Componentes
- Navigation Bar (Navbar)
- Article Form (ArticleForm)
- Article List (ArticleList)
- Article Details (ArticleDetails)
- Login Form (LoginForm)
- Signup Form (SignupForm)
- User Profile (UserProfile)
- My Articles List (MyArticlesList)
- My Purchases List (MyPurchasesList)
