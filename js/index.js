window.addEventListener("load", function () {
    const elements = document.querySelectorAll(".faded");
    elements.forEach(function (element) {
        element.classList.add("loaded");
    });
});
document.getElementById("machina").addEventListener("click", function () {
    window.location.href = "machina.html";
});

document.getElementById("mentis").addEventListener("click", function () {
    window.location.href = "mentis.html";
});

document.getElementById("cogito").addEventListener("click", function () {
    window.location.href = "cogito.html";
});

document.getElementById("post").addEventListener("click", function () {
    window.location.href = "post.html";
});

function createSubtitle() {
    const subtitleDiv = document.createElement("div");
    subtitleDiv.classList.add("subtitle");
    return subtitleDiv;
}

function createText() {
    const textDiv = document.createElement("div");
    textDiv.classList.add("text");
    return textDiv;
}

function createPara() {
    const ParaDiv = document.createElement("div");
    ParaDiv.classList.add("paragraphe");
    return ParaDiv;
}

function createImage() {
    const imageDiv = document.createElement("img");
    return imageDiv;
}

function createDescription() {
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    return descriptionDiv;
}

function deleteContent() {
    const textContainers = document.querySelectorAll(".text-container");
    textContainers.forEach(function (textContainer) {
        textContainer.innerHTML = "";
    });
}

document.querySelectorAll(".selector").forEach(function (element) {
    element.addEventListener("click", function () {
        const hiddenElements = document.querySelectorAll(".hidden");
        const leftDiv = document.querySelector(".left");
        const rightDiv = document.querySelector(".right");
        deleteContent();

        if (element.id == "matthew") {
            subtitleDiv = createSubtitle();
            subtitleDiv.textContent = "James Tilly Matthews";
            ParaDiv = createPara();
            textDiv1 = createText();
            textDiv2 = createText();
            imgDiv = createImage();
            descriptionDiv = createDescription();
            imgDiv.src = "../img/light/matthews.jpg";
            textDiv1.textContent =
                "James T. Matthews serait la cible d'une machine qui influerait sur lui. Contrôlée par un gang de criminels à Londres, cette machine enverrait des ondes électromagnétiques à son cerveau.";
            textDiv2.textContent =
                "James T. Matthews est né en 1770 en Angleterre. En 1792, il accompagne le philosophe David Williams à Paris pour promouvoir la paix entre l'Angleterre et la France. Ils sont accueillis par des dirigeants révolutionnaires. Après la condamnation de Louis XVI en janvier 1793, Matthews reste à Paris, où il est arrêté en juin lors de la chute des Girondins. Soupçonné d'être un agent double, il est emprisonné pendant trois ans et libéré en 1796, désormais considéré comme fou.";
            descriptionDiv.textContent =
                "Probablement une représentation de James Tilly Matthews";
            leftDiv.appendChild(subtitleDiv);
            leftDiv.appendChild(ParaDiv);
            leftDiv.appendChild(textDiv1);
            leftDiv.appendChild(textDiv2);
            rightDiv.appendChild(imgDiv);
            rightDiv.appendChild(descriptionDiv);
        }

        hiddenElements.forEach(function (hiddenElement) {
            hiddenElement.classList.remove("hidden");
        });
    });
});
