# Cypress Demo 🌟🚀

## 📋 Content of this Project

- [Description](#📝-description)
- [Usage Instructions](#⚙️-usage-instructions)
- [Selected Website for Testing](#🌐-selected-website-for-testing)

### ⭐️ Features

- [Navigation Bar](#🧭-application-feature-navigation-bar)
- [Home Page](#🏠-application-feature-home-page)
- [Account](#📄-application-feature-account)
- [Contact Page](#✉️-application-feature-contact-page)
- [Product Interaction](#🛒-application-feature-product-interaction)
- [Order Placement](#🛒-application-feature-order-placement)

## 📝 Description

This project aims to showcase automated testing using the Cypress framework. The tests are focused on a specially created website designed for automated testing demonstrations. The primary objective of this project is to provide a lively demonstration of automated testing.

## ⚙️ Usage Instructions

To run the automated tests for this project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using your package manager.
   ex:

```bash
    yarn install
```

4. Run the Cypress tests using

```bash
    yarn cypress run
```

For detailed instructions, refer to the [Cypress Documentation](https://docs.cypress.io/).

## 🌐 Selected Website for Testing

The tests in this project are conducted on the [Practice Software Testing](https://practicesoftwaretesting.com/#/) website. Cypress, in combination with JavaScript, was utilized for testing purposes.

Feel free to explore and adapt the project according to your testing needs!

## 🧭 Application Feature: Navigation Bar

The navigation bar is a critical component that allows users to access various sections and functionalities of the application. This set of automated tests ensures that users can smoothly navigate through the application using the navigation bar. 🚀

### Test Cases

#### 1. Navigate to Home 🏠

- **Test Steps:**
  - Click on the "Home" button in the navigation bar.
- **Expected Outcome:**
  - The URL should include "/#".

#### 2. Navigate to Hand Tools 🔧

- **Test Steps:**
  - Click on the "Categories" option in the navigation bar.
  - Click on the "Hand Tools" category.
- **Expected Outcome:**
  - The URL should include "/category/hand-tools".

#### 3. Navigate to Power Tools ⚡

- **Test Steps:**
  - Click on the "Categories" option in the navigation bar.
  - Click on the "Power Tools" category.
- **Expected Outcome:**
  - The URL should include "/category/power-tools".

#### 4. Navigate to Special Tools 🛠️

- **Test Steps:**
  - Click on the "Categories" option in the navigation bar.
  - Click on the "Special Tools" category.
- **Expected Outcome:**
  - The URL should include "/category/special-tools".

#### 5. Navigate to Rentals 🚗

- **Test Steps:**
  - Click on the "Categories" option in the navigation bar.
  - Click on the "Rentals" category.
- **Expected Outcome:**
  - The URL should include "/rentals".

#### 6. Navigate to Sign In 🔐

- **Test Steps:**
  - Click on the "Sign In" option in the navigation bar.
- **Expected Outcome:**
  - The URL should include "/auth/login".

#### 7. Navigate to Contact 📞

- **Test Steps:**
  - Click on the "Contact" option in the navigation bar.
- **Expected Outcome:**
  - The URL should include "/contact".

## 🏠 Application Feature: Home Page

The Home Page is the initial landing page of the application, and these automated tests focus on ensuring smooth functionality and navigation within this crucial section. 🌟

### Test Cases

#### 1. Apply Filters and Sort 🛠️

- **Test Steps:**
  - Select a sorting option from the dropdown menu.
  - Adjust the slider and validate the value change.
  - Apply various filters by clicking on options.
- **Expected Outcome:**
  - Filters and sorting should be applied successfully.

#### 2. Navigate to Product and Go Back ⬅️

- **Test Steps:**
  - Click on the first product card.
  - Navigate back to the home page.
- **Expected Outcome:**
  - The product page should be accessible, and after going back, the product card should still be visible.

#### 3. Navigate Between Pages 🔄

- **Test Steps:**
  - Click on different page numbers in the pagination.
- **Expected Outcome:**
  - The application should navigate smoothly between the pages.

## 📄 Application Feature: Account

The Account feature encompasses all functionalities related to user accounts, registration, and login. These automated tests focus on ensuring a seamless user experience in managing their accounts. 🔐

### Test Cases

#### 1. Register 📝

- **Test Steps:**
  - Click on "Sign In" in the navigation bar.
  - Click on the "Register" link.
  - Fill in the registration form with valid details.
  - Submit the registration form.
- **Expected Outcome:**
  - The user should be successfully registered.

#### 2. Register with Existing Email 🚫

- **Test Steps:**
  - Click on "Sign In" in the navigation bar.
  - Click on the "Register" link.
  - Fill in the registration form with an email that already exists.
  - Submit the registration form.
- **Expected Outcome:**
  - An error indicating that the email already exists should be displayed.

#### 3. Login with Incorrect Credentials ❌

- **Test Steps:**
  - Click on "Sign In" in the navigation bar.
  - Enter incorrect login credentials.
  - Submit the login form.
- **Expected Outcome:**
  - An error indicating unsuccessful login should be displayed.

#### 4. Login with Correct Credentials and Sign Out ✅

- **Test Steps:**
  - Perform a successful login (utilizes a reusable login command).
  - Click on the user menu and choose "Sign Out".
- **Expected Outcome:**
  - The user should be successfully signed out.

## ✉️ Application Feature: Contact Page

The Contact Page allows users to send messages and inquiries to the platform. These automated tests ensure the proper functioning of the contact form and its validation. 📧

### Test Cases

#### 1. Message Too Short ⚠️

- **Test Steps:**
  - Fill in the contact form with a very short message.
  - Submit the contact form.
- **Expected Outcome:**
  - An error indicating that the message must be at least 50 characters long should be displayed.

#### 2. Missing First Name ❌

- **Test Steps:**
  - Fill in the contact form without providing a first name.
  - Submit the contact form.
- **Expected Outcome:**
  - An error indicating that the first name is required should be displayed.

#### 3. Missing Last Name ❌

- **Test Steps:**
  - Fill in the contact form without providing a last name.
  - Submit the contact form.
- **Expected Outcome:**
  - An error indicating that the last name is required should be displayed.

#### 4. Missing Email ❌

- **Test Steps:**
  - Fill in the contact form without providing an email address.
  - Submit the contact form.
- **Expected Outcome:**
  - An error indicating that the email address is required should be displayed.

#### 5. Missing Subject ❌

- **Test Steps:**
  - Fill in the contact form without selecting a subject.
  - Submit the contact form.
- **Expected Outcome:**
  - An error indicating that a subject must be selected should be displayed.

#### 6. Send Message Successfully ✅

- **Test Steps:**
  - Fill in the contact form with valid information.
  - Submit the contact form.
- **Expected Outcome:**
  - A success message confirming the message submission should be displayed.

## 🛒 Application Feature: Product Interaction

The Product Interaction feature encompasses a set of tests that validate various actions a user can perform with products on the website. 🌟

### Test Cases

#### 1. Match First Product with Backend Data 🔄

- **Test Steps:**
  - Click on the first product.
  - Retrieve product details from the backend.
  - Compare the product name and description with the backend data.
- **Expected Outcome:**
  - Product name and description match the backend data.

#### 2. Match Second Product with Backend Data 🔄

- **Test Steps:**
  - Click on the second product.
  - Retrieve product details from the backend.
  - Compare the product name and description with the backend data.
- **Expected Outcome:**
  - Product name and description match the backend data.

#### 3. Quantity Manipulation ⬆️⬇️

- **Test Steps:**
  - Click on a product.
  - Increase the quantity of the product.
  - Decrease the quantity of the product.
- **Expected Outcome:**
  - Quantity manipulation functions correctly.

#### 4. Add Product to Cart 🛒

- **Test Steps:**
  - Click on a product.
  - Add the product to the cart.
- **Expected Outcome:**
  - Product is successfully added to the cart.

#### 5. Add Product to Favorites ❤️

- **Test Steps:**
  - Log in to the platform.
  - Click on a product.
  - Add the product to favorites.
- **Expected Outcome:**
  - Product is successfully added to the favorites list.

#### 6. Unable to Add Product to Favorites (Not Logged In) 🚫

- **Test Steps:**
  - Click on a product.
  - Attempt to add the product to favorites without being logged in.
- **Expected Outcome:**
  - Unauthorized message should appear indicating inability to add to favorites.

## 🛒 Application Feature: Order Placement

The Order Placement feature comprises a test that validates the process of placing an order on the website. 🌟

### Test Case

#### 1. Place an Order and Complete Payment 💳

- **Test Steps:**
  - Log in to the platform.
  - Click on a product.
  - Add the product to the cart.
  - Proceed to the cart.
  - Proceed to address information.
  - Proceed to delivery method.
  - Proceed to payment method.
  - Select "Gift Card" as the payment method.
  - Enter account name and account number.
  - Complete the order.
- **Expected Outcome:**
  - Payment is successful, and a confirmation message is displayed.
