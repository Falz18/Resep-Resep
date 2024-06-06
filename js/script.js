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


document.addEventListener('DOMContentLoaded', function() {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    document.querySelectorAll('.content-container').forEach((section) => {
        observer.observe(section);
    });
});