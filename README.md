# Sellit_Client

## Used Items Sales Project

Welcome to the repository of the Used Items Sales Project. This web application allows users to buy and sell used items easily and efficiently.

## Repositories

This project is divided into two separate repositories:

- [Frontend Repository](https://github.com/JulianCasillasP/Sellit_Client)
- [Backend Repository](https://github.com/JulianCasillasP/Sellit_Server)

The frontend is in a separate repository from the backend to facilitate development.

## Deployment

You can view the fully deployed application [here](https://selliit.netlify.app/).

## Installation Guide

- Fork this repository.
- Clone this repository

```shell
$ cd Sellit_Client
$ npm install
$ npm start
```


## Funcionalidades

The frontend of the Used Items Sales Project offers the following features:

* Explore Items: Users can browse and explore the list of items available for purchase.

* View Item Details: Users can view complete details of a specific item, including its name, photo, description, price, and condition.

* Create a New Item: Registered users can create new listings to sell their used items.

* Edit and Delete Listings: Registered users can edit and delete their own listings.

* Registration and Authentication: Users can register as new users and authenticate to access exclusive features.

## Routes

| Route                               | Privacy          | Renders                   |
| ----------------------------------- | :--------------: | --------------------------|
| /                                   | Public           | Home Page                 |
| /categories                         | Public           | Categories Page           |
| /categories/:category               | Public           | Articles List Page        |
| /categories/:category/:id           | private (user)   | Article Details Page      |
| /post-article                       | Private (user)   | Post Article Form         |
| /login                              | Public           | Login Page                |
| /signup                             | Public           | Signup Page               |
| /profile                            | Private (user)   | User Profile Page         |
| /my-articles                        | Private (user)   | My Articles List Page     |
| /admin                              | Private (admin)  | Admin Panel Page          |
| /admin/article/:id                  | Private (admin)  | Edit Article Page         |


## Use of Components and Styles.

In the development of this frontend, we have used a variety of React components and CSS styles to achieve an attractive and user-friendly user interface. These components and styles have been organized in a modular fashion and can be reused throughout the project.

## Components
- Navigation Bar (Navbar)
- Article Form (ArticleForm)
- Article List (ArticleList)
- Article Details (ArticleDetails)
- Login Form (LoginForm)
- Signup Form (SignupForm)
- User Profile (UserProfile)
- My Articles List (MyArticlesList)
