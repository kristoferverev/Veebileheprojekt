// Viited DOM-elementidele
const tagasiNupp = document.querySelector("#tagasi-nupp");
const edasiNupp = document.querySelector("#edasi-nupp");
const raamat = document.querySelector("#raamat");

const leht1 = document.querySelector("#leht1");
const leht2 = document.querySelector("#leht2");
const leht3 = document.querySelector("#leht3");
const leht4 = document.querySelector("#leht4");



// Sündmuse kuulajad
tagasiNupp.addEventListener("click", mineTagasiLehele);
edasiNupp.addEventListener("click", mineEdasiLehele);


// Loogika muutujad
let praeguneLeht = 1;
let lehtedeArv = 4;
let maxLehti = lehtedeArv + 1;

function avaRaamat() {
    raamat.style.transform = "translateX(50%)";
    tagasiNupp.style.transform = "translateX(-180px)";
    edasiNupp.style.transform = "translateX(180px)";
}

function sulgeRaamat(onAlguses) {
    if (onAlguses) {
        raamat.style.transform = "translateX(0%)";
    } else {
        raamat.style.transform = "translateX(100%)";
    }
    
    tagasiNupp.style.transform = "translateX(0px)";
    edasiNupp.style.transform = "translateX(0px)";
}

function mineEdasiLehele() {
    if (praeguneLeht < maxLehti) {
        switch (praeguneLeht) {
            case 1:
                avaRaamat();
                leht1.classList.add("flipped");
                leht1.style.zIndex = 1;
                break;
            case 2:
                leht2.classList.add("flipped");
                leht2.style.zIndex = 2;
                break;
            case 3:
                leht3.classList.add("flipped");
                leht3.style.zIndex = 3;
                break;
            case 4:
                leht4.classList.add("flipped");
                leht4.style.zIndex = 4;
                sulgeRaamat(false);
                break
            default:
                throw new Error("Tundmatu seisund");
        }
        praeguneLeht++;
    }
}

function mineTagasiLehele() {
    if (praeguneLeht > 1) {
        switch (praeguneLeht) {
            case 2:
                sulgeRaamat(true);
                leht1.classList.remove("flipped");
                leht1.style.zIndex = 4;
                break;
            case 3:
                leht2.classList.remove("flipped");
                leht2.style.zIndex = 3;
                break;
            case 4:
                avaRaamat();
                leht3.classList.remove("flipped");
                leht3.style.zIndex = 2;
                break;
            case 5:
                avaRaamat();
                leht4.classList.remove("flipped");
                leht4.style.zIndex = 1;
                break;
            default:
                throw new Error("Tundmatu seisund");
        }
        praeguneLeht--;
    }
}