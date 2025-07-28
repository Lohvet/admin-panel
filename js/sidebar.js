document.addEventListener('DOMContentLoaded', function () {
  const dashboardSection = document.getElementById('dashboardSection');
  const uploadSection = document.getElementById('uploadSection');
  const manageSection = document.getElementById('manageSection');

  document.getElementById('showDashboard').addEventListener('click', function () {
    dashboardSection.style.display = 'block';
    uploadSection.style.display = 'none';
    manageSection.style.display = 'none';
    setActive(this);
  });

  document.getElementById('showUpload').addEventListener('click', function () {
    dashboardSection.style.display = 'none';
    uploadSection.style.display = 'block';
    manageSection.style.display = 'none';
    setActive(this);
  });

  document.getElementById('showManage').addEventListener('click', function () {
    dashboardSection.style.display = 'none';
    uploadSection.style.display = 'none';
    manageSection.style.display = 'block';
    loadProducts(); // Call function to load table content
    setActive(this);
  });

  function setActive(activeLink) {
    const links = document.querySelectorAll('.sidebar .nav-link');
    links.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
  }
});
