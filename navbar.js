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


        $(document).ready(function () {
            // Handle clicks on internal navigation links
            $('.internal-link').on('click', function (e) {
                e.preventDefault(); // Prevent the default anchor link behavior

                var target = $(this).attr('href');

                if (target.startsWith('#')) {
                    // Smooth scroll within the same page for internal links
                    $('html, body').animate({
                        scrollTop: $(target).offset().top
                    }, 800);
                } else {
                    // Navigate to a different page for external links
                    window.location.href = target;
                }
            });
        });
   






        const navbar = document.querySelector('header');
        window.onscroll = () => {
            if(window.scrollY > 100) {
                navbar.classList.add('bg-primary-dark');
                navbar.classList.add('border-b');
                navbar.classList.add('border-grey');
            } else {
                navbar.classList.remove('bg-primary-dark');
                navbar.classList.remove('border-b');
                navbar.classList.remove('border-grey');
            }
        }

        //function dropdown
        function toggleDropdown1(){
            let dropdown1 = document.querySelector('#dropdown1');
            let dropdown2 = document.querySelector('#dropdown2');
            let dropdown3 = document.querySelector('#dropdown3');
            dropdown1.classList.toggle('hidden');
            dropdown2.classList.add('hidden');
            dropdown3.classList.add('hidden');
        }

        //products dropdown
        function toggleDropdown2(){
            let dropdown1 = document.querySelector('#dropdown1');
            let dropdown2 = document.querySelector('#dropdown2');
            let dropdown3 = document.querySelector('#dropdown3');
            dropdown1.classList.add('hidden');
            dropdown3.classList.add('hidden');
            dropdown2.classList.toggle('hidden');
        }

        //about us dropdown
        function toggleDropdown3(){
            let dropdown1 = document.querySelector('#dropdown1');
            let dropdown2 = document.querySelector('#dropdown2');
            let dropdown3 = document.querySelector('#dropdown3');
            dropdown1.classList.add('hidden');
            dropdown2.classList.add('hidden');
            dropdown3.classList.toggle('hidden');
        }

        document.addEventListener('click', function (e) {
                if (!dropdownButton1.contains(e.target) && !dropdown1.contains(e.target)) {
                    dropdown1.classList.add('hidden');
                }
                if (!dropdownButton2.contains(e.target) && !dropdown2.contains(e.target)) {
                    dropdown2.classList.add('hidden');
                }
                if (!dropdownButton3.contains(e.target) && !dropdown3.contains(e.target)) {
                    dropdown3.classList.add('hidden');
                }
            });


  





    
         const hamburger = document.querySelector('#hamburger');
        const menu = document.querySelector('#menu');
        const hLink = document.querySelectorAll('#hLink');
        const faSolid = document.querySelector(".fa-solid");
        hamburger.addEventListener("click", () => {
            menu.classList.toggle('hidden');
            faSolid.classList.toggle('fa-xmark');
        })
        hLink.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.toggle('hidden');
                faSolid.classList.toggle('fa-xmark');
            })
        })

        //function dropdown
        function toggleDrop1(){
            let dropdown1 = document.querySelector('#drop1');
            let dropdown2 = document.querySelector('#drop2');
            let dropdown3 = document.querySelector('#drop3');
            dropdown1.classList.toggle('hidden');
            dropdown2.classList.add('hidden');
            dropdown3.classList.add('hidden');
        }
        //products dropdown
        function toggleDrop2(){
            let dropdown1 = document.querySelector('#drop1');
            let dropdown2 = document.querySelector('#drop2');
            let dropdown3 = document.querySelector('#drop3');
            dropdown2.classList.toggle('hidden');
            dropdown1.classList.add('hidden');
            dropdown3.classList.add('hidden');
        }
        //about dropdown
        function toggleDrop3(){
            let dropdown1 = document.querySelector('#drop1');
            let dropdown2 = document.querySelector('#drop2');
            let dropdown3 = document.querySelector('#drop3');
            dropdown3.classList.toggle('hidden');
            dropdown2.classList.add('hidden');
            dropdown1.classList.add('hidden');
        }

        document.addEventListener('click', function (e) {
                if (!dropButton1.contains(e.target) && !drop1.contains(e.target)) {
                    drop1.classList.add('hidden');
                }
                if (!dropButton2.contains(e.target) && !drop2.contains(e.target)) {
                    drop2.classList.add('hidden');
                }
                if (!dropButton3.contains(e.target) && !drop3.contains(e.target)) {
                    drop3.classList.add('hidden');
                }
            });
  

