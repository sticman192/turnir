// Базовые данные матчей (названия команд и счета со Снимка экрана 2026-06-16 145948.png)
const initialMatches = {
    // ВЕРХНЯЯ СЕТКА
    "u1": { id: 1, type: "upper-r1", team1: "DuRimAn + miate", score1: 0, team2: "KiNg + vovelon", score2: 3, images: [] },
    "u2": { id: 2, type: "upper-r1", team1: "Akuma + bildreyn", score1: 3, team2: "STICMAN + zernd", score2: 0, images: [] },
    "u3": { id: 3, type: "upper-r1", team1: "svoloch + Laz", score1: 2, team2: "mogilka + VikuSiK", score2: 3, images: [] },
    "u4": { id: 4, type: "upper-r1", team1: "qwrchk + isagi", score1: 3, team2: "Daniil + W1nston", score2: 0, images: [] },
    
    "u7": { id: 7, type: "upper-r2", team1: "KiNg + vovelon", score1: 3, team2: "Akuma + bildreyn", score2: 1, images: [] },
    "u8": { id: 8, type: "upper-r2", team1: "mogilka + VikuSiK", score1: 0, team2: "qwrchk + isagi", score2: 3, images: [] },
    
    "u12": { id: 12, type: "upper-sf", team1: "KiNg + vovelon", score1: 1, team2: "qwrchk + isagi", score2: 3, images: [] },
    "u15": { id: 15, type: "upper-f", team1: "qwrchk + isagi", score1: 1, team2: "KiNg + vovelon", score2: 5, images: [] },

    // НИЖНЯЯ СЕТКА
    "l5": { id: 5, type: "lower-r1", team1: "DuRimAn + miate", score1: 3, team2: "STICMAN + zernd", score2: 2, images: [] },
    "l6": { id: 6, type: "lower-r1", team1: "svoloch + Laz", score1: 3, team2: "Daniil + W1nston", score2: 2, images: [] },
    
    "l10": { id: 10, type: "lower-r2", team1: "mogilka + VikuSiK", score1: 1, team2: "DuRimAn + miate", score2: 3, images: [] },
    "l9": { id: 9, type: "lower-r2", team1: "Akuma + bildreyn", score1: 3, team2: "svoloch + Laz", score2: 0, images: [] },
    
    "l11": { id: 11, type: "lower-r3", team1: "DuRimAn + miate", score1: 3, team2: "Akuma + bildreyn", score2: 2, images: [] },
    "l13": { id: 13, type: "lower-r4", team1: "KiNg + vovelon", score1: 4, team2: "DuRimAn + miate", score2: 2, images: [] }
};

// Загружаем данные из localStorage (или берем начальные)
let matchesData = JSON.parse(localStorage.getItem('tournament_data')) || initialMatches;

// 💡 ЕСЛИ ХОТИТЕ, ЧТОБЫ КАРТИНКИ ВИДЕЛИ ВСЕ:
// Загрузите картинку в папку вашего репозитория (например, скриншот с именем "match1.png").
// И вместо строки выше просто жестко пропишите ссылку на нее в данные матча, например:
// matchesData["l5"].images = ["images/match1.png"];

let currentActiveMatchKey = null;

// Функция отрисовки сетки
function renderBracket() {
    // Очищаем списки
    document.querySelectorAll('.match-list').forEach(el => el.innerHTML = '');

    for (let key in matchesData) {
        const match = matchesData[key];
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        matchCard.onclick = () => openModal(key);

        const isT1Winner = match.score1 > match.score2;
        const isT2Winner = match.score2 > match.score1;

        matchCard.innerHTML = `
            <div class="match-id">${match.id}</div>
            <div class="team-row ${isT1Winner ? 'winner' : ''}">
                <div class="team-name">${match.team1}</div>
                <div class="score">${match.score1}</div>
            </div>
            <div class="team-row ${isT2Winner ? 'winner' : ''}">
                <div class="team-name">${match.team2}</div>
                <div class="score">${match.score2}</div>
            </div>
        `;

        document.getElementById(match.type).appendChild(matchCard);
    }
}

// Управление модальным окном (Снимок экрана 2026-06-16 145958.png)
const modal = document.getElementById('matchModal');
const closeModalBtn = document.getElementById('closeModal');
const fileInput = document.getElementById('fileInput');
const gallery = document.getElementById('screenshotsGallery');

function openModal(key) {
    currentActiveMatchKey = key;
    const match = matchesData[key];

    document.getElementById('modal-team1').innerText = match.team1;
    document.getElementById('modal-score1').innerText = match.score1;
    document.getElementById('modal-team2').innerText = match.team2;
    document.getElementById('modal-score2').innerText = match.score2;

    renderScreenshots();
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

closeModalBtn.onclick = closeModal;
window.onclick = (e) => { if (e.target === modal) closeModal(); };

// Отрисовка скриншотов в галерее
function renderScreenshots() {
    gallery.innerHTML = '';
    const match = matchesData[currentActiveMatchKey];
    
    if (match.images.length === 0) {
        gallery.innerHTML = '<span style="color:#666; font-size:13px;">Скриншотов пока нет</span>';
        return;
    }

    match.images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.className = 'screenshot-item';
        // Открытие картинки в новой вкладке при клике
        img.onclick = () => window.open(imgSrc, '_blank');
        gallery.appendChild(img);
    });
}

// Логика загрузки нового скриншота (через Base64 в localStorage)
fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        const base64Image = event.target.result;
        
        // Добавляем картинку в массив текущего матча
        matchesData[currentActiveMatchKey].images.push(base64Image);
        
        // Сохраняем в localStorage
        localStorage.setItem('tournament_data', JSON.stringify(matchesData));
        
        // Перерисовываем скриншоты
        renderScreenshots();
    };
    reader.readAsDataURL(file);
});

// Инициализация при старте
renderBracket();
