
// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

// Kirim Pesan
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('#contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Menghentikan pengiriman formulir

        // Tampilkan Alert
        Swal.fire({
            title: 'Maaf!',
            text: 'Fitur belum tersedia',
            icon: 'error',
            confirmButtonText: 'OK'
        });

        // Bersihkan formulir
        contactForm.reset();
    });
});
