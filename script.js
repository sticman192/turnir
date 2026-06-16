// Конфигурация структуры матчей, посевов и очков со скриншота турнира
const bracketData = {
    // ВЕРХНЯЯ СЕТКА
    "u1": { id: 1, type: "upper-r1", s1: 1, team1: "DuRimAn + miate", score1: 0, s2: 8, team2: "KiNg + vovelon", score2: 3, images: [] },
    "u2": { id: 2, type: "upper-r1", s1: 4, team1: "Akuma + bildreyn", score1: 3, s2: 5, team2: "STICMAN + zernd", score2: 0, images: [] },
    "u3": { id: 3, type: "upper-r1", s1: 2, team1: "svoloch + Laz", score1: 2, s2: 7, team2: "mogilka + VikuSiK", score2: 3, images: [] },
    "u4": { id: 4, type: "upper-r1", s1: 3, team1: "qwrchk + isagi", score1: 3, s2: 6, team2: "Daniil + W1nston", score2: 0, images: [] },
    
    "u7": { id: 7, type: "upper-r2", s1: 8, team1: "KiNg + vovelon", score1: 3, s2: 4, team2: "Akuma + bildreyn", score2: 1, images: [] },
    "u8": { id: 8, type: "upper-r2", s1: 7, team1: "mogilka + VikuSiK", score1: 0, s2: 3, team2: "qwrchk + isagi", score2: 3, images: [] },
    
    "u12": { id: 12, type: "upper-sf", s1: 8, team1: "KiNg + vovelon", score1: 1, s2: 3, team2: "qwrchk + isagi", score2: 3, images: [] },
    "u15": { id: 15, type: "upper-f", s1: 3, team1: "qwrchk + isagi", score1: 1, s2: 8, team2: "KiNg + vovelon", score2: 5, images: [] },

    // НИЖНЯЯ СЕТКА
    "l5": { id: 5, type: "lower-r1", s1: 1, team1: "DuRimAn + miate", score1: 3, s2: 5, team2: "STICMAN + zernd", score2: 2, images: [] },
    "l6": { id: 6, type: "lower-r1", s1: 2, team1: "svoloch + Laz", score1: 3, s2: 6, team2: "Daniil + W1nston", score2: 2, images: [] },
    
    "l10": { id: 10, type: "lower-r2", s1: 7, team1: "mogilka + VikuSiK", score1: 1, s2: 1, team2: "DuRimAn + miate", score2: 3, images: [] },
    "l9": { id: 9, type: "lower-r2", s1: 4, team1: "Akuma + bildreyn", score1: 3, s2: 2, team2: "svoloch + Laz", score2: 0, images: [] },
    
    "l11": { id: 11, type: "lower-r3", s1: 1, team1: "DuRimAn + miate", score1: 3, s2: 4, team2: "Akuma + bildreyn", score2: 2, images: [] },
    "l13": { id: 13, type: "lower-r4", s1: 8, team1: "KiNg + vovelon", score1: 4, s2: 1, team2: "DuRimAn + miate", score2: 2, images: [] }
};

let store = JSON.parse(localStorage.getItem('grid_save_data')) || bracketData;
let activeKey = null;

function buildTournament() {
    // Очистка перед заполнением
    document.querySelectorAll('.match-wrapper').forEach(container => container.innerHTML = '');

    Object.keys(store).forEach(key => {
        const data = store[key];
        const node = document.createElement('div');
        node.className = 'match-node';
        node.onclick = () => openModalBox(key);

        const win1 = data.score1 > data.score2;
        const win2 = data.score2 > data.score1;

        node.innerHTML = `
            <div class="match-index">${data.id}</div>
            <div class="team-slot ${win1 ? 'winner-row' : ''}">
                <div class="seed-num">${data.s1}</div>
                <div class="team-title">${data.team1}</div>
                <div class="team-score">${data.score1}</div>
            </div>
            <div class="team-slot ${win2 ? 'winner-row' : ''}">
                <div class="seed-num">${data.s2}</div>
                <div class="team-title">${data.team2}</div>
                <div class="team-score">${data.score2}</div>
            </div>
        `;

        const targetColumn = document.getElementById(data.type);
        if (targetColumn) {
            targetColumn.appendChild(node);
        }
    });
}

const modalOverlay = document.getElementById('matchModal');
const closeBtn = document.getElementById('closeModal');
const fileLoader = document.getElementById('fileInput');
const galleryBox = document.getElementById('screenshotsGallery');

function openModalBox(key) {
    activeKey = key;
    const match = store[key];

    document.getElementById('modal-team1').innerText = match.team1;
    document.getElementById('modal-score1').innerText = match.score1;
    document.getElementById('modal-team2').innerText = match.team2;
    document.getElementById('modal-score2').innerText = match.score2;

    updateGalleryView();
    modalOverlay.classList.add('active');
}

function closeModalBox() {
    modalOverlay.classList.remove('active');
}

closeBtn.onclick = closeModalBox;
modalOverlay.onclick = (e) => { if (e.target === modalOverlay) closeModalBox(); };

function updateGalleryView() {
    galleryBox.innerHTML = '';
    const currentImages = store[activeKey].images || [];

    if (currentImages.length === 0) {
        galleryBox.innerHTML = '<div style="color: #666; font-size: 13px;">Изображений нет</div>';
        return;
    }

    currentImages.forEach(base64Str => {
        const img = document.createElement('img');
        img.src = base64Str;
        img.className = 'preview-img';
        img.onclick = () => {
            const win = window.open();
            win.document.write(`<img src="${base64Str}" style="max-width:100%;">`);
        };
        galleryBox.appendChild(img);
    });
}

fileLoader.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        if (!store[activeKey].images) store[activeKey].images = [];
        
        store[activeKey].images.push(event.target.result);
        localStorage.setItem('grid_save_data', JSON.stringify(store));
        updateGalleryView();
    };
    reader.readAsDataURL(file);
});

// Запуск генерации
buildTournament();
