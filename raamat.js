let currentPage = 1;
const totalPages = 3;

function keerataLehte(suund) {
    document.getElementById(`leht${currentPage}`).classList.remove('näidatud');

    if (suund === 'edasi') {
        currentPage = currentPage < totalPages ? currentPage + 1 : 1;
    } else if (suund === 'tagasi') {
        currentPage = currentPage > 1 ? currentPage - 1 : totalPages;
    }

    document.getElementById(`leht${currentPage}`).classList.add('näidatud');
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById(`leht${currentPage}`).classList.add('näidatud');
});