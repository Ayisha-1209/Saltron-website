document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch and insert the navbar
    function loadNavbar() {
      fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => {
          console.error('Error loading navbar:', error);
        });
    }

    loadNavbar();

});
