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