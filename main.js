    // Define an array of menu items
    var menuItems = [
        { name: "Aloo Posto", price: 190 },
        { name: "Cholar Dal", price: 50 },
        { name: "Bengali Thali VEG", price: 200 },
        { name: "Bengali Thali NON-VEG", price: 300 }
        // Add more menu items as needed
      ];
  
      // Get the container where menu items will be displayed
      var menuContainer = document.getElementById("menu-items");
  
      // Display menu items on the website
      menuItems.forEach(function(item) {
        var menuItemDiv = document.createElement("div");
        menuItemDiv.classList.add("menu-item");
  
        var itemName = document.createElement("h2");
        itemName.textContent = item.name;
        menuItemDiv.appendChild(itemName);
  
        var itemPrice = document.createElement("p");
        itemPrice.textContent = "₹" + item.price;
        menuItemDiv.appendChild(itemPrice);
  
        menuContainer.appendChild(menuItemDiv);
      });