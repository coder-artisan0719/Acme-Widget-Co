# Acme Widget Co - Sales System Proof of Concept

## Overview

This project is a proof of concept for Acme Widget Co's sales system, designed to handle product purchases, apply special offers, and calculate total costs, including delivery charges. The application is implemented using **React** (for the front-end) and **TypeScript** (for the business logic).

### Features:
- Product Catalogue: Red, Green, and Blue widgets with respective prices.
- Special Offer: "Buy one red widget, get the second half price."
- Delivery charges based on order total:
  - Orders under $50: $4.95 delivery charge
  - Orders between $50 and $90: $2.95 delivery charge
  - Orders over $90: Free delivery
- A React-based UI for adding products to the shopping basket, viewing the total cost, and calculating delivery charges.

---

## How It Works

The system calculates the total cost of the basket based on:
1. **Products**: Users can add products from a predefined catalogue using product codes.
2. **Offers**: Special offers (like the "Buy one Red Widget, get the second half price") are applied based on the number of items in the basket.
3. **Delivery Charges**: The delivery fee is determined based on the order total:
   - Under $50: $4.95 delivery
   - Between $50 and $90: $2.95 delivery
   - Over $90: Free delivery

### Example of the Offer:
- If you buy **two Red Widgets (R01)**:
  - Full price for the first widget: $32.95
  - The second Red Widget is half-price: $16.48
  - Total for two Red Widgets: **$49.43** + delivery charge if applicable.

### Business Logic:
- Products are added by entering their unique product codes (e.g., `R01` for the Red Widget).
- The basket keeps track of the total price, applying any relevant special offers (such as the discount on Red Widgets).
- The total price is updated whenever an item is added, factoring in product prices, discounts, and delivery charges.

---

## Project Structure

```bash
/homework-project
├── /src
│   ├── /components
│   │   ├── Basket.tsx
│   │   ├── Product.tsx 
│   │   └── Total.tsx
│   ├── /models
│   │   ├── ProductCatalogue.ts
│   │   ├── Basket.ts
│   │   └── Offer.ts
│   ├── App.tsx     
├── /public
│   └── index.html  
├── package.json    
└── README.md       
```

### Testing the App

To test the functionality of the application, follow these steps:

### 1. Add Products to the Basket:

Use the product codes `R01`, `G01`, and `B01` to add products to the basket.

For example, enter `R01` to add a Red Widget, and `G01` for a Green Widget.

### 2. Verify Total Calculation:

- **Case 1**: Add `B01` and `G01` (total should be $37.85).
- **Case 2**: Add two `R01` (total should be $54.37 after applying the discount for the second Red Widget).
- **Case 3**: Add `R01`, `G01` (total should be $60.85).
- **Case 4**: Add three `R01` (total should be $85.33 after applying the discount for the second Red Widget and normal prices for the third).

### 3. Check Delivery Charges:

- For orders under $50, the delivery charge should be **$4.95**.
- For orders between $50 and $90, the delivery charge should be **$2.95**.
- For orders over $90, the delivery charge should be **free**.

### 4. Edge Cases:

- Test **invalid product codes** and ensure error messages are displayed.
- Test adding more than one product of the same type to see if the **discounts are applied correctly**.
- Ensure that the app behaves well with an **empty basket** (total should be $0).

---

## Assumptions and Known Limitations:

1. The **product catalogue** is hardcoded, and only three products are available for purchase.
2. The **special offer** ("Buy one Red Widget, get the second half price") is the only offer currently implemented.
3. The **basket** can only handle products by their predefined codes (`R01`, `G01`, `B01`).
4. No **persistent storage** is used—products and basket contents are reset when the page is refreshed.
5. The **UI** is designed for basic functionality; further styling or feature improvements could enhance the user experience.

---

## Technologies Used

- **React**: Frontend framework to build the UI.
- **TypeScript**: Used for type safety and better development experience.
- **Tailwind CSS**: Layout, spacing, typography, styling+

---
## GitHub Repository

[Link to the public GitHub repository]()
