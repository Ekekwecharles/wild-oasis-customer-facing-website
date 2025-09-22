# The Wild Oasis - Customer Website

The **Wild Oasis** is a customer-facing web application for a luxurious hotel.  
Guests can **browse cabins, make reservations, manage bookings, and update profiles** — all in a modern, secure, and responsive interface.

> **Note:** This project complements the original hotel management system built for staff and admins.  
> You can check out the admin/staff version here: [Wild Oasis Staff Website](https://wild-oasis-website-ashy.vercel.app/)

---

## 🚀 Live Demo

[Visit the Customer Website](https://wild-oasis-customer-facing-website-fawn.vercel.app/) <!-- Add the deployed link for this customer version -->

---

## ✨ Features

- **Google Authentication**  
  Secure sign-in and sign-out with Google using NextAuth.

- **Cabin Browsing & Filtering**  
  Explore all available cabins with capacity-based filtering.

- **Reservations Management**  
  Make, edit, and delete reservations in real time.

- **Profile Updates**  
  Guests can manage their personal information and preferences.

- **Enhanced User Experience**

  - Loading states
  - Error pages
  - Custom 404 (Not Found) page

- **State Management with Context**  
  Centralized state handling for bookings and date selections.

- **Responsive Design**  
  Fully mobile-friendly with Tailwind CSS.

---

## 🛠️ Tech Stack

| Technology           | Purpose                                            |
| -------------------- | -------------------------------------------------- |
| **Next.js 15**       | React framework for SSR, routing, and performance  |
| **React 19**         | Frontend library for building UI components        |
| **Tailwind CSS**     | Utility-first CSS framework for styling            |
| **Supabase**         | Backend-as-a-service for database & authentication |
| **NextAuth.js**      | Authentication (Google OAuth)                      |
| **React Day Picker** | Calendar & date selection for bookings             |
| **Date-fns**         | Date utilities for nights & stay calculations      |
