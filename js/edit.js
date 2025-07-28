function editProduct(id) {
  fetch(`fetch_single_product.php?id=${id}`)
    .then(res => res.json())
    .then(product => {
      document.getElementById("edit_id").value = product.id;
      document.getElementById("edit_name").value = product.name;
      document.getElementById("edit_size").value = product.size;
      document.getElementById("edit_color").value = product.color;
      document.getElementById("edit_price").value = product.price;
      document.getElementById("currentImage").src = "uploads/" + product.image;

      const modal = new bootstrap.Modal(document.getElementById('editProductModal'));
      modal.show();
    });
}
