document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guestForm");
  const input = document.getElementById("guestName");
  const categoryInput = document.getElementById("guestCategory");
  const guestList = document.getElementById("guestList");

  const maxGuests = 10;
  let guests = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = input.value.trim();
    const category = categoryInput.value;

    if (!name) return alert("Please enter a guest name.");
    if (guests.length >= maxGuests) return alert("Guest list is full!");

    const now = new Date();
    const guest = {
      name,
      category,
      attending: false,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
    };

    guests.push(guest);
    updateGuestList();
    form.reset();
  });

  function updateGuestList() {
    guestList.innerHTML = "";
    guests.forEach((guest, index) => {
      const li = document.createElement("li");
      li.className = guest.attending ? "attending" : "not-attending";
      li.innerHTML = `
        <strong>${guest.name}</strong>
        <span class="category ${guest.category}">${guest.category}</span><br>
        <small>Added: ${guest.date} at ${guest.time}</small><br>
        <button class="rsvp" onclick="toggleRSVP(${index})">
          ${guest.attending ? "Mark Not Attending" : "Mark Attending"}
        </button>
        <button class="remove" onclick="removeGuest(${index})">Remove</button>
      `;
      guestList.appendChild(li);
    });
  }

  window.toggleRSVP = function(index) {
    guests[index].attending = !guests[index].attending;
    updateGuestList();
  };

  window.removeGuest = function(index) {
    guests.splice(index, 1);
    updateGuestList();
  };
});