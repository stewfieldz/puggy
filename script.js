document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.querySelector('.content');
    const sections = document.querySelectorAll('.section');

    function loadArticle(section) {
        const articleUrl = section.getAttribute('data-article');
        fetch(articleUrl)
            .then(response => response.text())
            .then(data => {
                section.innerHTML += data;
            })
            .catch(error => console.error('Error loading article:', error));
    }

    function checkScroll() {
        const lastSection = sections[sections.length - 1];
        const lastSectionOffset = lastSection.offsetTop + lastSection.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;

        if (pageOffset > lastSectionOffset) {
            loadArticle(lastSection);
        }
    }

    window.addEventListener('scroll', checkScroll);

    // Load the first articles on page load
    sections.forEach(loadArticle);
});
