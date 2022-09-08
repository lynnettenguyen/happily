# Happily

Happily is a full-stack e-commerce clone of [Etsy](https://www.etsy.com/), focused on handmade and craft supplies for all things related to weddings! Users can browse through wedding items by category as well as list their own wedding related products to sell. Seller can edit or delete their products through the shop manager and users can purchase items using the cart feature. Users can also cancel purchases and leave reviews on products they've purchased.

Live Site: [happily](https://happily-app-etsy-clone.herokuapp.com/)

## Languages, Frameworks, Platforms and Libraries

### Languages
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 

### Backend
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-100000?style=for-the-badge&logo=sql&logoColor=BA1212&labelColor=AD0000&color=A90000) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Hosting
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## Wiki Links:
* [Happily Wiki](https://github.com/lynnettenguyen/happily/wiki)
* [Database Schema](https://github.com/lynnettenguyen/happily/wiki/Database-Schema)
* [Features List](https://github.com/lynnettenguyen/happily/wiki/Features)
* [User Stories](https://github.com/lynnettenguyen/happily/wiki/User-Stories)
* [Wireframes](https://github.com/lynnettenguyen/happily/wiki/Wireframes)

## Landing Page
![LandingPage](https://user-images.githubusercontent.com/98368183/189165832-a80c9893-8f63-4eb0-bbae-508d91c5b831.png)

## Profile Navigation
![Profile](https://user-images.githubusercontent.com/98368183/189041311-706083b4-d86d-4bac-927d-4d46c8db151b.png)

## Shop by Category
![Category](https://user-images.githubusercontent.com/98368183/189034876-b7592329-7c69-499e-96ce-106cebea4c45.png)

## Search by Keywords
![Search](https://user-images.githubusercontent.com/98368183/189196125-8f82b0b7-9bc1-41c3-9aff-938d0b755e65.png)

## View Product Details
![Product](https://user-images.githubusercontent.com/98368183/189035269-5fc21528-128c-4f03-915d-495e0fc9a6d1.png)

## Add New Products and Upload Images
![Shop](https://user-images.githubusercontent.com/98368183/189037556-5e7a4281-7a92-4b96-9866-bf7343804544.png)
![Images](https://user-images.githubusercontent.com/98368183/189039129-51ef2d27-9f05-4b52-a941-37d56b1bff61.png)

## Shop Manager
![Shop Manager](https://user-images.githubusercontent.com/98368183/189034934-c9756ef5-9fd4-450c-8aa0-59dc27193b30.png)

## Cart
![Cart](https://user-images.githubusercontent.com/98368183/189035094-43a6f6fc-9226-4cfe-b0e1-b968bfa5f7e0.png)

## Purchases
![Purchases](https://user-images.githubusercontent.com/98368183/189035869-5703e2ca-434c-4aff-a76a-bff31172da4d.png)

## Add Reviews
![Reviews](https://user-images.githubusercontent.com/98368183/189035780-7664e7e8-b2e2-40f7-af8a-b27f9d3f57b3.png)


## Steps to clone locally:
1. Clone this repository:
```bash
git clone https://github.com/lynnettenguyen/happily.git
```

2. Install backend dependencies:

```bash
pipenv install -r requirements.txt
```

3. Create a `.env` file based on the example with proper settings for development environment:
```
SECRET_KEY=INSERT_SECRET_KEY_HERE
DATABASE_URL=sqlite:///dev.db
```

4. Start pipenv, migrate database, seed database, and run Flask app:

```bash
pipenv shell
flask db upgrade
flask seed all
flask run
```

5. Install frontend dependencies: 

```bash
cd react-app/
npm install
npm start
```

6. Navigate to [localhost:3000](http://localhost:3000)

