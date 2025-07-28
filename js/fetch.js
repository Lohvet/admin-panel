function loadProducts() {
    fetch("fetch_products.php")
      .then(res => res.json())
      .then(products => {
        const tbody = document.querySelector("#productsTable tbody");
        tbody.innerHTML = "";

        products.forEach(product => {
          const row = `
            <tr>
              <td>${product.id}</td>
              <td>${product.name}</td>
              <td>${product.size}</td>
              <td>$${product.price}</td>
              <td>${product.color}</td>
              <td><img src="uploads/${product.image}" width="60" height="60" style="object-fit:cover;"></td>
              <td>
                <button class="btn btn-sm btn-warning" onclick="editProduct(${product.id})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
              </td>
            </tr>
          `;
          tbody.insertAdjacentHTML("beforeend", row);
        });
      });
  }

  function deleteProduct(id) {
    if (confirm("Are you sure you want to delete this product?")) {
      fetch(`delete_product.php?id=${id}`)
        .then(res => res.text())
        .then(response => {
          if (response.trim() === "deleted") {
            alert("Product deleted successfully.");
            loadProducts();
          } else {
            alert("Delete failed: " + response);
          }
        });
    }
  }

  function editProduct(id) {
    alert("Edit functionality coming soon! You clicked product ID: " + id);
    // You can later open a modal or form with product data for editing
}
