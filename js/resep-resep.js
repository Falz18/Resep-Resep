document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.addEventListener('click', function () {
        navigation.classList.toggle('active');
    });

    window.addEventListener('scroll', function () {
        if (navigation.classList.contains('active')) {
            navigation.classList.remove('active');
        }
    });
});