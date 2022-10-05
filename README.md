# Happily

Happily is a full-stack e-commerce clone of [Etsy](https://www.etsy.com/), focused on handmade and craft supplies for all things related to weddings! Users can browse through wedding items by category as well as list their own wedding related products to sell. Seller can edit or delete their products through the shop manager and users can purchase items using the cart feature. Users can also cancel purchases and leave reviews on products they've purchased.

Live Site: [Happily](https://happily-app-etsy-clone.herokuapp.com/)

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
![LandingPage](https://user-images.githubusercontent.com/98368183/189550448-10137151-3df0-47c6-91c0-237eb8a89c05.png)

## Profile Menu
![Profile](https://user-images.githubusercontent.com/98368183/189198767-d2446ccd-fc7c-4da2-865c-287f4b55a7ca.png)

## Shop by Category
![Category](https://user-images.githubusercontent.com/98368183/189550512-e4117b64-8af4-4acc-8dff-acc11bf0ab23.png)

## Search Products by Keywords
![Keyword](https://user-images.githubusercontent.com/98368183/189196791-a7d8ef82-496f-4397-acd6-24cfb1b4c179.png)
![Search](https://user-images.githubusercontent.com/98368183/189550552-d7db556b-6e4e-4ab9-aa15-c49b3220ea77.png)

## View Product Details
![Product](https://user-images.githubusercontent.com/98368183/189035269-5fc21528-128c-4f03-915d-495e0fc9a6d1.png)

## Add New Products and Upload Images
![Shop](https://user-images.githubusercontent.com/98368183/189037556-5e7a4281-7a92-4b96-9866-bf7343804544.png)
![Images](https://user-images.githubusercontent.com/98368183/189039129-51ef2d27-9f05-4b52-a941-37d56b1bff61.png)

## Shop Manager
![Shop Manager](https://user-images.githubusercontent.com/98368183/189198578-61fdbe5c-1eb2-494f-ada6-c05524a50b2a.png)

## View Products by Shop and Edit Shop Details
![](https://user-images.githubusercontent.com/98368183/194156585-f0db8ee9-503e-48e7-9df4-145fb9d6832a.png)

## Cart
![Cart](https://user-images.githubusercontent.com/98368183/189198556-3c060b3f-59cb-428d-97d7-6baa319e4252.png)

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

