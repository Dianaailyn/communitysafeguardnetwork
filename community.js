let currentPage = 1; 

function showPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((p) => {
        p.style.display = 'none';
    });
    document.getElementById(`page${page}`).style.display = 'block'; 
}

function nextPage() {
    const pages = document.querySelectorAll('.page');
    if (currentPage < pages.length) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showPage(currentPage);
});
