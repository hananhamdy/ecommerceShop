# Angular Project - [Ecommerce-Shop]

Welcome to the [Ecommerce-Shop] repository! This Angular application is designed for [Ecommerce Shop]. This README provides setup instructions, feature descriptions, and usage guidelines to help you get started.

## Demo
https://hananhamdy.com/projects/ecommerce-shop/browser

## Getting Started

### Prerequisites

- **Node.js** (version 14+)
- **Angular CLI** (version 19): Install via `npm install -g @angular/cli`

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hananhamdy/Ecommerce-Project
   cd your-repo-name
   
2. **Install dependencies:**

   ```bash
   npm install
3. **Run the application locally:**

   ```bash
   ng serve
4. **Project Structure:**
   ```bash
   src
      ├── app
      │   ├── core
      │   │   ├── services
      │   │   ├── interceptors
      │   │   ├── guards
      │   │   ├── core.module.ts
      │   │   └── index.ts
      │   │
      │   ├── shared       
      │   │   ├── components       
      │   │   ├── directives     
      │   │   ├── pipes           
      │   │   ├── models          
      │   │   ├── shared.module.ts 
      │   │   └── index.ts         
      │   │
      │   ├── features         
      │   │   ├── login            
      │   │   │   ├── ...   
      │   │   │
      │   │   ├── home       
      │   │   │   ├── ...
      │   │   │
      │   │   └── ...
      │   │
      │   ├── app-routing.module.ts 
      │   ├── app.component.ts     
      │   ├── app.module.ts        
      │   └── index.ts              
      │
      ├── assets                   
      │   └── ...
      │
      ├── environments             
      │   ├── environment.ts       
      │   └── environment.prod.ts 
      │
      └── styles                   
          └── main.scss

## Features

### Feature #1: Home Page
   - Entry point to the website.
   - If logged in as an **admin**, the user can **add** and **delete** products.
   - Users can **filter products** by category selection from a **dropdown**. All products are displayed by default.

### Feature #2: Page Title
   - Displays a **specific title** for each page, improving navigation and SEO.

### Feature #3: Login Page
   - Allows users to **log in** with a **username** and **password**.
   - **Username validation**: Required field with a minimum of 4 characters, displaying clear error messages if invalid.
   - **Password validation**: Required field with a clear error message if left empty.
   - On entering incorrect credentials, a **toaster message** will display "**Invalid credentials**."
   - **Successful login** redirects the user to the **Home Page**.

### Feature #4: Profile Page
   - **Only accessible to logged-in users**; otherwise, redirects to the **Login Page**.
   - Displays a **card** with the user's information such as **username**, **role**, and **profile image**.  

### Feature #5: Add Product
   - Accessible only to **admin users**, with a dedicated "**Add Product**" button.
   - Displays an **overlay form** with validation for adding new products.
   - Upon successful submission, the newly added product appears in the **products list**.

### Feature #6: API Handling
   - Covers the following cases:
     - **Loading**: Displayed when data is being fetched.
     - **Empty/No Data**: Displayed if no data exists.
     - **Failure**: Displayed when an API call fails.

### Feature #7: Routing Guard
   1. **Access Control for Unauthenticated Users**:
      - If an **unauthenticated (not logged-in)** user attempts to access restricted pages—such as **Categories**, **Profile**, or **Single Product** pages—the system automatically redirects them to the **Login Page**.
   2. **Undefined Route Handling**:
      - If a user navigates to an **undefined route**, they are redirected to the **Oops Page**, which informs them of the invalid navigation.

### Feature #8: Oops Page
   - Shows an "**Oops**" message for users navigating to an **undefined route** or page.

### Feature #9: Header Component
   - If the user is **not logged in**, only the **Home** and **Login** links are displayed.
   - For **logged-in users**, **Home**, **Profile**, and **Logout** links are available.

### Feature #10: Footer Component
   - Displays **website copyright** information.
     
### Feature #12: UI
   - Using **Angular Material** for UI components.
   - Implemented styles with **SCSS** to create a responsive and modern design.


## Technologies Used

- **Angular**: Frontend framework for building dynamic single-page applications.
- **TypeScript**: A JavaScript superset with static typing, providing enhanced developer tools and scalability.
- **Angular Material**: UI component library that provides pre-built, customizable, and responsive design components (optional).
- **RxJS**: Reactive programming library for handling asynchronous data streams.
- **SCSS**: CSS preprocessor used for advanced styling, making it easier to write and maintain complex CSS.

## Scripts

- **Run Application Locally**:  
  ```bash
  ng serve
Runs the Angular application locally at http://localhost:4200.
- **Build for Production:**:  
  ```bash
  ng build --prod
