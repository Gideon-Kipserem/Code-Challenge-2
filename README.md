# Description
This is a simple web application constructed using JavaScript, HTML and CSS that allows users to add guests,categorize them, remove them from the list and mark their attendance.

# File structure
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


# Features

* Adds guests by name and category
* Removes guests from the list
* Toggle RVSPstatus
* Track date and time a guest was added
* Limit the number of guests to 10





# Index.html
Contains:

A <form> for adding guest names and selecting their category.

A <ul> to display the guest list dynamically.

References to styles.css and src/script.js.


# Styles.css
Adds styling to the app.

It includes; centering everything using flex,styles for input buttons and list items, colors based on category and RVSP status and a background image.


# Images/image.jpeg
This is the background image for the app.

It is set using background-image in CSS and gives the page a nice look and feel.


# src/script.js
Handles everything that changes based on user input.

It includes;
* Preventing default page reload
* Validation hence not allowing empty name field
* Adding guests to the list
* Changing RVSP status
* Live updating of the DOM


# Author
* Gideon Kimaiyo
* gideonkimaiyo254@gmail.com 

# License
This project is licensed under the [MIT License](LICENSE).