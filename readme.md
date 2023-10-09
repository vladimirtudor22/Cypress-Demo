# Cypress Demo 🌟🚀

## 📋 Content of this Project

- [Description](#📝-description)
- [Usage Instructions](#⚙️-usage-instructions)
- [Selected Website for Testing](#🌐-selected-website-for-testing)

### ⭐️ Features

- [Navigation Bar](#🧭-application-feature-navigation-bar)
- [Home Page](#🏠-application-feature-home-page)

### 📝 Description

This project aims to showcase automated testing using the Cypress framework. The tests are focused on a specially created website designed for automated testing demonstrations. The primary objective of this project is to provide a lively demonstration of automated testing.

### ⚙️ Usage Instructions

To run the automated tests for this project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using your package manager.
4. Run the Cypress tests using the provided commands.

For detailed instructions, refer to the [Cypress Documentation](https://docs.cypress.io/).

### 🌐 Selected Website for Testing

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
