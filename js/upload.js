document.getElementById("uploadProductForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch("upload_product.php", {
      method: "POST",
      body: formData
    })
    .then(res => res.text())
    .then(response => {
      if (response.trim() === "success") {
        alert("Product uploaded successfully!");
        form.reset();
        document.getElementById('imagePreview').style.display = 'none';
      } else {
        alert("Upload failed: " + response);
      }
    })
    .catch(err => {
      alert("Error occurred while uploading.");
      console.error(err);
    });
});