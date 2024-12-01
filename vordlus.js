/**
 * kood pärit:
 * https://www.youtube.com/watch?v=8SL_hM1a0yo&t=1220s
 * @param {HTMLTableElement} table, mida sorteerime 
 * @param {number} column, mille järgi sorteeritakse
 * @param {boolean} asc, sorteeritakse kahanevalt/kasvavalt
 */
function sortVeerg(table, column, asc = true) {
    const dirMod = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    //sorteerime read
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        return aColText > bColText ? (1 * dirMod) : (-1 * dirMod);
    });

    //eemaldab read
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }
    
    //lisame tagasi
    tBody.append(...sortedRows);

    // mäletab, kuidas praegu sorditud
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1 })`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1 })`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener("click", () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAsc = headerCell.classList.contains("th-sort-asc");

        sortVeerg(tableElement, headerIndex, !currentIsAsc);
    });
});