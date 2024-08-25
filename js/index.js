window.addEventListener("load", function () {
    const elements = document.querySelectorAll(".faded");
    elements.forEach(function (element) {
        element.classList.add("loaded");
    });
    animateTextByClass("title", 20);
    animateTextByClass("description", 10);
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
            textDiv1 = createText();
            textDiv2 = createText();
            imgDiv = createImage();
            descriptionDiv = createDescription();
            subtitleDiv.textContent = "La cible";
            imgDiv.src = "../img/light/matthews.jpg";
            textDiv1.textContent =
                "James T. Matthews serait la cible d'une machine qui influerait sur lui. Contrôlée par un gang de criminels à Londres, cette machine enverrait des ondes électromagnétiques à son cerveau.";
            textDiv2.textContent =
                "Pour faciliter leur contrôle sur lui, le gang aurait implanté un aimant dans son cerveau. En ce qui concerne les autres cibles, les agents rôderaient dans les rues où ils tromperaient les gens en leur faisant inhaler des fluides magnétiques. Si les membres de la bande étaient reconnus en public, ils se serviraient de matraques magnétisées qui obscurcissaient la perception de toute personne se trouvant à proximité. ";
            descriptionDiv.textContent =
                "Probablement une représentation de James Tilly Matthews";
            leftDiv.appendChild(subtitleDiv);
            leftDiv.appendChild(textDiv1);
            leftDiv.appendChild(textDiv2);
            rightDiv.appendChild(imgDiv);
            rightDiv.appendChild(descriptionDiv);
            animateTextByClass("subtitle", 10);
            animateTextByClass("description", 5);
        } else if (element.id == "tuyaux") {
            subtitleDiv = createSubtitle();
            subtitleDiv.textContent = "Les tuyaux";
            textDiv1 = createText();
            textDiv1.textContent =
                "Les tuyaux agiraient directement sur la cible via des ondes électromagnétiques. Ces ondes seraient envoyées par la machine et contrôleraient les pensées et les actions de la cible. Matthews décrit le fonctionnement de ces tuyaux par le magnétisme animal, un concept étrange et sans fondement scientifique.";
            imgDiv = createImage();
            imgDiv.src = "../img/light/tuyaux.png";
            descriptionDiv = createDescription();
            descriptionDiv.textContent =
                "Représentation des tuyaux sur les plans de James Tilly Matthews";
            leftDiv.appendChild(subtitleDiv);
            leftDiv.appendChild(textDiv1);
            rightDiv.appendChild(imgDiv);
            rightDiv.appendChild(descriptionDiv);
            animateTextByClass("subtitle", 10);
            animateTextByClass("description", 5);
        } else if (element.id == "tonneau") {
            subtitleDiv = createSubtitle();
            subtitleDiv.textContent = "Les tonneaux";
            textDiv1 = createText();
            textDiv1.textContent =
                "Les tonneaux reliés à la machine serviraient à stocker de nombreux fluides toxiques qui alimenteraient la machine : « effluves fétides », « l’haleine humaine putride », « le gaz de l’anus du cheval ». Une fois ces substances rendues magnétiques, elles passeraient dans les parties supérieurs de la machine où leur traitement reste inconnu pour Matthews.";
            imgDiv = createImage();
            imgDiv.src = "../img/light/tonneau.png";
            descriptionDiv = createDescription();
            descriptionDiv.textContent =
                "représentation d'un tonneau de la machine par James Tilly Matthews.";
            leftDiv.appendChild(subtitleDiv);
            leftDiv.appendChild(textDiv1);
            rightDiv.appendChild(imgDiv);
            rightDiv.appendChild(descriptionDiv);

            animateTextByClass("subtitle", 10);
            animateTextByClass("description", 5);
        } else if (element.id == "airloom") {
            subtitleDiv = createSubtitle();
            subtitleDiv.textContent = "La machine";
            textDiv1 = createText();
            textDiv1.textContent =
                "Cette machine aurait pour mesure 7 mètres par 10 mètres par 10 mètres. Parmi les choses que pourrait faire la machine, Matthews donne des noms à certaines de ces tortures : « knee nailing », « vital tearing », « fibre ripping », et le « lobster-cracking », qu'il décrit comme une attaque où l'air autour de sa poitrine serait comprimé, l'empêchant alors de respirer. La machine pourrait aussi contrôler l'esprit des gens, lire leurs pensées ou leur en imposer.";
            imgDiv = createImage();
            imgDiv.src = "../img/light/airloom-controller.jpg";
            descriptionDiv = createDescription();
            descriptionDiv.textContent =
                "Commandes de la machine, contrôlée par Bill le Roi.";
            leftDiv.appendChild(subtitleDiv);
            leftDiv.appendChild(textDiv1);
            rightDiv.appendChild(imgDiv);
            rightDiv.appendChild(descriptionDiv);
            animateTextByClass("subtitle", 10);
            animateTextByClass("description", 5);
        } else if (element.id == "king") {
            subtitleDiv = createSubtitle();
            textDiv1 = createText();
            textDiv2 = createText();
            imgDiv = createImage();
            descriptionDiv = createDescription();
            subtitleDiv.textContent = "Le Air loom's Gang";
            textDiv1.textContent =
                "Les tyrans de James Tilly Matthews sont décris comme un groupe de jacobins qu'il appelle 'Air loom's gang', qui oeuvre contre Matthews mais aussi contre la paix entre l'Angleterre et la France. Il aurait le contrôle d'une partie du gouvernement grâce à la machine mais aussi une partie de la population.";
            textDiv2.textContent =
                "Le groupe compte de nombreux membres, dont certains membre eminents que Matthews décrit avec précision. Jack le fendu, Sir Francis, Tommy le fou et leur chef, Bill le roi. Il le décrit comme un tyran brutal et manipulateur, dirigeant les autres membres avec une autorité sans faille. Il serait celui qui prendrait les décisions sur les tortures mentales et physiques infligées à Matthews.";
            imgDiv.src = "../img/light/gang-members.jpg";
            descriptionDiv.textContent =
                "A gauche : Jack le fendu, à droite : Sir Francis et Catherine.";
            leftDiv.appendChild(subtitleDiv);
            leftDiv.appendChild(textDiv1);
            leftDiv.appendChild(textDiv2);
            rightDiv.appendChild(imgDiv);
            rightDiv.appendChild(descriptionDiv);
            animateTextByClass("subtitle", 10);
            animateTextByClass("description", 5);
        }

        hiddenElements.forEach(function (hiddenElement) {
            hiddenElement.classList.remove("hidden");
        });
    });
});

const characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':,.<>?";

function animateTextByClass(className, changeIterations) {
    const divs = document.querySelectorAll(`.${className}`);

    divs.forEach((div) => {
        if (div.classList.contains("checked")) {
            return;
        }

        const originalText = div.textContent;
        let revealedText = Array(originalText.length).fill(false);
        let changeCount = 0;

        function getRandomChar() {
            return characters.charAt(Math.random() * characters.length);
        }

        function animateText() {
            let displayedText = "";
            for (let i = 0; i < originalText.length; i++) {
                if (originalText[i] === " ") {
                    displayedText += " ";
                } else if (revealedText[i]) {
                    displayedText += originalText[i];
                } else if (changeCount < changeIterations) {
                    displayedText += getRandomChar();
                } else {
                    displayedText += originalText[i];
                    revealedText[i] = true;
                    changeCount = 0;
                }
            }
            div.textContent = displayedText;

            if (changeCount < changeIterations) {
                changeCount++;
            } else {
                changeCount = 0;
            }
        }

        const interval = setInterval(animateText, 5);
    });
}
