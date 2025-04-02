document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const id = this.getAttribute('href').substring(1);
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    });
});
