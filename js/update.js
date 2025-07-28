document.getElementById("editProductForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = document.getElementById("editProductForm");
  const formData = new FormData(form);

  fetch("update_product.php", {
    method: "POST",
    body: formData
  })
    .then(res => res.text())
    .then(response => {
      if (response.trim() === "updated") {
        alert("Product updated successfully!");
        const modal = bootstrap.Modal.getInstance(document.getElementById("editProductModal"));
        modal.hide();
        loadProducts(); // Reload table
        form.reset();
      } else {
        alert("Update failed: " + response);
      }
    });
});
