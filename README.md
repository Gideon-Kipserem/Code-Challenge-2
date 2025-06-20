# Guest List Web Application

This is a simple web application constructed using **JavaScript, HTML, and CSS** that allows users to add guests, categorize them, remove them from the list, and mark their attendance.

---

## 📁 File Structure

Code-Challenge-2/
│
├── index.html
├── styles.css
├── README.md
│
├── images/
│ └── image.jpeg
│
└── src/
└── index.js




---

## ✨ Features

- Adds guests by name and category
- Removes guests from the list
- Toggles RSVP status
- Tracks date and time a guest was added
- Limits the number of guests to 10

---

## 📄 index.html

Contains:
- A `<form>` for adding guest names and selecting their category
- A `<ul>` to display the guest list dynamically
- References to `styles.css` and `src/index.js`

---

## 🎨 styles.css

Adds styling to the app:
- Centers everything using flexbox
- Styles input buttons and list items
- Color-codes guests based on category and RSVP status
- Applies a background image for better aesthetics

---

## 🖼️ images/image.jpeg

This is the background image for the app.  
It is set using `background-image` in CSS and gives the page a pleasant look and feel.

---

## ⚙️ src/index.js

Handles all dynamic behavior based on user interaction:
- Prevents default form submission (page reload)
- Validates guest name input
- Adds guests to the DOM
- Toggles RSVP status
- Updates the UI in real time

---

## 🚀 How to Use

1. **Clone or download** the repository to your local machine.
2. Open `index.html` in any modern web browser.
3. Use the input form to:
   - Add a guest's name
   - Select a category (e.g., family, friend, colleague)
   - Submit to add the guest to the list
4. Click the **RSVP toggle** to change the guest's attendance status.
5. Click the **delete button** to remove a guest.
6. Note: You can only add up to **10 guests**.

---

## 👤 Author

- **Name:** Gideon Kimaiyo  
- **Email:** [gideonkimaiyo254@gmail.com](mailto:gideonkimaiyo254@gmail.com)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).


