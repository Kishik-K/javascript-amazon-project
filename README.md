# Amazon Clone 🛒

A fully functional Amazon-inspired e-commerce web app built with vanilla JavaScript. No frameworks. No shortcuts. Just raw JS doing real work.

**[→ Live Demo](https://kishik-k.github.io/Amazon-Clone/)**

---

## Screenshots

| Main Page | Checkout |
|-----------|----------|
| <img width="400" alt="Main Page" src="https://github.com/user-attachments/assets/14be957c-acd1-4214-a547-8a160fcd1ee6" /> | <img width="400" alt="Checkout" src="https://github.com/user-attachments/assets/afcb2ad6-e8a5-451a-bc64-b453ef62b742" /> |

| Orders | Tracking |
|--------|----------|
| <img width="400" alt="Orders" src="https://github.com/user-attachments/assets/77832848-804b-44e9-8825-a10a875ccf2b" /> | <img width="400" alt="Tracking" src="https://github.com/user-attachments/assets/ec8d980a-9b83-4673-adcc-f3db14077cc9" /> |
---

## Features

- **Product Listing** — Dynamically rendered product grid with ratings, prices, and quantity selectors
- **Search** — Filter products in real time from the product list
- **Add to Cart** — Add any product with a selected quantity, persisted via localStorage
- **Cart Header** — Live cart count updates across all pages
- **Checkout Page** — Full order review with delivery option selection per item
- **Delivery Options** — Three shipping tiers with dynamic date calculation and pricing
- **Update & Delete** — Inline quantity editing and item removal from cart
- **Order Summary** — Real-time price calculation including shipping and 10% tax
- **Place Order** — Posts order to backend API, saves to order history, resets cart
- **Orders Page** — Full order history with items, dates, totals, and order IDs
- **Buy it Again** — Re-adds any past order item directly to cart
- **Package Tracking** — Track delivery status per item with a visual progress bar
- **Empty States** — Clean UI feedback when cart or orders are empty

---

## Tech Stack

- **HTML5** — Semantic structure across 4 pages
- **CSS3** — Custom styling, responsive layout
- **Vanilla JavaScript (ES6+)** — Modules, classes, async/await, fetch API
- **localStorage** — Cart and order persistence across sessions
- **Day.js** — Delivery date formatting and calculation
- **REST API** — Live backend integration for products, cart, and orders (`supersimplebackend.dev`)

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Product listing with search and add to cart |
| `checkout.html` | Cart review, delivery options, order placement |
| `orders.html` | Order history with buy again and tracking links |
| `tracking.html` | Per-item delivery status and progress |

---

## Project Structure

```
├── data/
│   ├── cart.js              # Cart logic, localStorage, API calls
│   ├── products.js          # Product data and fetch logic
│   ├── orders.js            # Order management
│   └── deliveryOptions.js   # Delivery tiers and date calculation
├── scripts/
│   ├── amazon.js            # Main page rendering and search
│   ├── checkout/
│   │   ├── orderSummary.js  # Cart rendering and interactions
│   │   ├── paymentSummary.js# Price calculation and order placement
│   │   └── checkoutHeader.js# Dynamic checkout header
│   ├── orders.js            # Orders page logic
│   └── tracking.js          # Tracking page logic
├── styles/                  # CSS per page and shared components
├── images/                  # Product images and icons
├── index.html
├── checkout.html
├── orders.html
└── tracking.html
```

---

## What I Built & Learned

This project was built as part of a deep JavaScript learning journey — not just following along, but understanding every line.

Key concepts applied hands-on:

- **ES6 Modules** — Import/export across a multi-file architecture
- **Classes & OOP** — Product and Clothing classes with inheritance and polymorphism
- **Async/Await & Fetch API** — Real API calls for products, cart, and orders
- **DOM Manipulation** — Dynamic rendering without any framework
- **localStorage** — Persistent cart and order state across sessions
- **Event Delegation** — Efficient event handling across dynamically rendered elements
- **Error Handling** — try/catch with meaningful user-facing feedback

---

## Getting Started

Clone the repo and open `index.html` in your browser — or just use the **[live demo](https://kishik-k.github.io/Amazon-Clone/)**.

```bash
git clone https://github.com/Kishik-K/Amazon-Clone.git
cd Amazon-Clone
```

No installs. No build step. Just open and run.

---

## Author

**Kishik** — [@Kishik-K](https://github.com/Kishik-K)

Built from scratch as part of a self-directed full stack learning journey.

---

*This is a learning project built for educational purposes. Amazon branding and assets belong to Amazon.com, Inc.*
