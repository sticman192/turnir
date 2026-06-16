const matches = document.querySelectorAll(".match");
const modal = document.getElementById("modal");

matches.forEach(match => {

    match.addEventListener("click", () => {

        document.getElementById("team1").textContent =
            match.dataset.team1;

        document.getElementById("team2").textContent =
            match.dataset.team2;

        document.getElementById("score1").textContent =
            match.dataset.score1;

        document.getElementById("score2").textContent =
            match.dataset.score2;

        const gallery = document.getElementById("gallery");
        gallery.innerHTML = "";

        const images =
            match.dataset.images.split(",");

        images.forEach(img => {

            const image =
                document.createElement("img");

            image.src = img;

            gallery.appendChild(image);

        });

        modal.style.display = "block";

    });

});

document.getElementById("close").onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
};
