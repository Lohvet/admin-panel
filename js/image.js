function previewImage(event) {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function () {
      const preview = document.getElementById('imagePreview');
      preview.src = reader.result;
      preview.style.display = 'block';
    };
    if (input.files[0]) {
      reader.readAsDataURL(input.files[0]);
    }
}