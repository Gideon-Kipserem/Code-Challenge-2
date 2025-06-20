
document.addEventListener("DOMContentLoaded", () => {
  // Get references to DOM elements
  const form = document.getElementById("guestForm");
  const input = document.getElementById("guestName");
  const categoryInput = document.getElementById("guestCategory");
  const guestList = document.getElementById("guestList");

  // Maximum number of guests 
  const maxGuests = 10;

  // stores guest objects
  let guests = [];

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const name = input.value.trim(); //trim input
    const category = categoryInput.value;//gets guest category 

    // Input validation
    if (!name) {
      alert("Please enter a guest name.");
      return;
    }
    if (guests.length >= maxGuests) {
      alert("Guest list is full!");
      return;
    }

   
    // Creates  guest object
    const guest = {
      name,
      category,
      attending: true, // Default RSVP status
      
    };

    // Add the new guest 
    guests.push(guest);

    // Update the DOM guest list
    updateGuestList();

    // Reset fields
    form.reset();
  });

  // Function to update the displayed guest list
  function updateGuestList() {
    guestList.innerHTML = ""; // Clear the list first before entering new name

    guests.forEach((guest, index) => {
      const li = document.createElement("li");
      li.className = guest.attending ? "attending" : "not-attending";

    
      li.innerHTML = `
        <strong>${guest.name}</strong> 
        <span class="category ${guest.category}">${guest.category}</span><br> 
       
        <button class="rsvp" onclick="toggleRSVP(${index})">
          ${guest.attending ? "Mark as Not Attending" : "Mark as Attending"}
        </button>
        <button class="remove" onclick="removeGuest(${index})">Remove</button>
      `;

      guestList.appendChild(li);
    });
  }

  // toggle rvsp status
  window.toggleRSVP = function(index) {
    guests[index].attending = !guests[index].attending;
    updateGuestList();
  };

  // remove guest button
  window.removeGuest = function(index) {
    guests.splice(index, 1);
    updateGuestList();
  };
});



