// Пароль для включения режима редактирования
const ADMIN_PASSWORD = "1234"; 

// Главная база данных турнира. Именно этот блок будет обновляться при экспорте!
const bracketData = {
    "u1": { id: 1, type: "upper-r1", s1: 1, team1: "DuRimAn + miate", score1: 0, s2: 8, team2: "KiNg + vovelon", score2: 3, images: [] },
    "u2": { id: 2, type: "upper-r1", s1: 4, team1: "Akuma + bildreyn", score1: 3, s2: 5, team2: "STICMAN + zernd", score2: 0, images: [] },
    "u3": { id: 3, type: "upper-r1", s1: 2, team1: "svoloch + Laz", score1: 2, s2: 7, team2: "mogilka + VikuSiK", score2: 3, images: [] },
    "u4": { id: 4, type: "upper-r1", s1: 3, team1: "qwrchk + isagi", score1: 3, s2: 6, team2: "Daniil + W1nston", score2: 0, images: [] },
    
    "u7": { id: 7, type: "upper-r2", s1: 8, team1: "KiNg + vovelon", score1: 3, s2: 4, team2: "Akuma + bildreyn", score2: 1, images: [] },
    "u8": { id: 8, type: "upper-r2", s1: 7, team1: "mogilka + VikuSiK", score1: 0, s2: 3, team2: "qwrchk + isagi", score2: 3, images: [] },
    
    "u12": { id: 12, type: "upper-sf", s1: 8, team1: "KiNg + vovelon", score1: 1, s2: 3, team2: "qwrchk + isagi", score2: 3, images: [] },
    "u14": { id: 14, type: "upper-f", s1: 3, team1: "qwrchk + isagi", score1: 1, s2: 8, team2: "KiNg + vovelon", score2: 5, images: [] },

    "l5": { id: 5, type: "lower-r1", s1: 1, team1: "DuRimAn + miate", score1: 3, s2: 5, team2: "STICMAN + zernd", score2: 2, images: [] },
    "l6": { id: 6, type: "lower-r1", s1: 2, team1: "svoloch + Laz", score1: 3, s2: 6, team2: "Daniil + W1nston", score2: 2, images: [] },
    
    "l10": { id: 10, type: "lower-r2", s1: 7, team1: "mogilka + VikuSiK", score1: 1, s2: 1, team2: "DuRimAn + miate", score2: 3, images: [] },
    "l9": { id: 9, type: "lower-r2", s1: 4, team1: "Akuma + bildreyn", score1: 3, s2: 2, team2: "svoloch + Laz", score2: 0, images: [] },
    
    "l11": { id: 11, type: "lower-r3", s1: 1, team1: "DuRimAn + miate", score1: 3, s2: 4, team2: "Akuma + bildreyn", score2: 2, images: [] },
    "l13": { id: 13, type: "lower-r4", s1: 8, team1: "KiNg + vovelon", score1: 4, s2: 1, team2: "DuRimAn + miate", score2: 2, images: [] }
};

let store = JSON.parse(localStorage.getItem('grid_save_data')) || bracketData;
let isAdmin = false;
let activeKey = null;

// Логика автоматического продвижения по сетке Double Elimination
function advanceTeams(matchKey, s1, score1, s2, score2) {
    const wName = score1 > score2 ? store[matchKey].team1 : store[matchKey].team2;
    const lName = score1 > score2 ? store[matchKey].team2 : store[matchKey].team1;
    const wSeed = score1 > score2 ? store[matchKey].s1 : store[matchKey].s2;
    const lSeed = score1 > score2 ? store[matchKey].s2 : store[matchKey].s1;

    if (matchKey === "u1") { store["u7"].team1 = wName; store["u7"].s1 = wSeed; store["l5"].team1 = lName; store["l5"].s1 = lSeed; }
    if (matchKey === "u2") { store["u7"].team2 = wName; store["u7"].s2 = wSeed; store["l5"].team2 = lName; store["l5"].s2 = lSeed; }
    if (matchKey === "u3") { store["u8"].team1 = wName; store["u8"].s1 = wSeed; store["l6"].team1 = lName; store["l6"].s1 = lSeed; }
    if (matchKey === "u4") { store["u8"].team2 = wName; store["u8"].s2 = wSeed; store["l6"].team2 = lName; store["l6"].s2 = lSeed; }
    
    if (matchKey === "u7") { store["u12"].team1 = wName; store["u12"].s1 = wSeed; store["l9"].team1 = lName; store["l9"].s1 = lSeed; }
    if (matchKey === "u8") { store["u12"].team2 = wName; store["u12"].s2 = wSeed; store["l10"].team1 = lName; store["l10"].s1 = lSeed; }
    
    if (matchKey === "l5") { store["l10"].team2 = wName; store["l10"].s2 = wSeed; }
    if (matchKey === "l6") { store["l9"].team2 = wName; store["l9"].s2 = wSeed; }
    
    if (matchKey === "l10") { store["l11"].team1 = wName; store["l11"].s1 = wSeed; }
    if (matchKey === "l9") { store["l11"].team2 = wName; store["l11"].s2 = wSeed; }
    
    if (matchKey === "l11") { store["l13"].team2 = wName; store["l13"].s2 = wSeed; }
    if (matchKey === "u12") { store["u14"].team1 = wName; store["u14"].s1 = wSeed; store["l13"].team1 = lName; store["l13"].s1 = lSeed; }
    if (matchKey === "l13") { store["u14"].team2 = wName; store["u14"].s2 = wSeed; }
}

function buildTournament() {
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
                <div class="team-title">${data.team1 || 'Ожидание'}</div>
                <div class="team-score">${data.score1}</div>
            </div>
            <div class="team-slot ${win2 ? 'winner-row' : ''}">
                <div class="seed-num">${data.s2}</div>
                <div class="team-title">${data.team2 || 'Ожидание'}</div>
                <div class="team-score">${data.score2}</div>
            </div>
        `;
        document.getElementById(data.type).appendChild(node);
    });
}

// Модальное окно и Админка
const modalOverlay = document.getElementById('matchModal');
const closeBtn = document.getElementById('closeModal');
const fileLoader = document.getElementById('fileInput');
const galleryBox = document.getElementById('screenshotsGallery');

const adminLoginBtn = document.getElementById('adminLoginBtn');
const adminLogoutBtn = document.getElementById('adminLogoutBtn');
const adminExportPanel = document.getElementById('adminExportPanel');
const adminUploadZone = document.getElementById('adminUploadZone');
const saveMatchResultsBtn = document.getElementById('saveMatchResultsBtn');

const inputScore1 = document.getElementById('inputScore1');
const inputScore2 = document.getElementById('inputScore2');
const modalScore1 = document.getElementById('modal-score1');
const modalScore2 = document.getElementById('modal-score2');

// Переключение интерфейса Админа
function toggleAdminInterface(visible) {
    isAdmin = visible;
    adminLoginBtn.style.display = visible ? 'none' : 'block';
    adminLogoutBtn.style.display = visible ? 'block' : 'none';
    adminExportPanel.style.display = visible ? 'block' : 'none';
    adminUploadZone.style.display = visible ? 'block' : 'none';
    saveMatchResultsBtn.style.display = visible ? 'block' : 'none';
    
    inputScore1.style.display = visible ? 'block' : 'none';
    inputScore2.style.display = visible ? 'block' : 'none';
    modalScore1.style.display = visible ? 'none' : 'block';
    modalScore2.style.display = visible ? 'none' : 'block';
}

adminLoginBtn.onclick = () => {
    const pass = prompt("Введите пароль администратора:");
    if (pass === ADMIN_PASSWORD) {
        toggleAdminInterface(true);
    } else {
        alert("Неверный пароль!");
    }
};

adminLogoutBtn.onclick = () => { toggleAdminInterface(false); };

function openModalBox(key) {
    activeKey = key;
    const match = store[key];

    document.getElementById('modal-team1').innerText = match.team1 || 'Ожидание';
    document.getElementById('modal-team2').innerText = match.team2 || 'Ожидание';
    
    modalScore1.innerText = match.score1;
    modalScore2.innerText = match.score2;
    inputScore1.value = match.score1;
    inputScore2.value = match.score2;

    updateGalleryView();
    modalOverlay.classList.add('active');
}

saveMatchResultsBtn.onclick = () => {
    const s1 = parseInt(inputScore1.value) || 0;
    const s2 = parseInt(inputScore2.value) || 0;

    store[activeKey].score1 = s1;
    store[activeKey].score2 = s2;

    // Автоматически передвигаем игроков по логике турнира
    if (s1 !== s2) {
        advanceTeams(activeKey, store[activeKey].s1, s1, store[activeKey].s2, s2);
    }

    localStorage.setItem('grid_save_data', JSON.stringify(store));
    buildTournament();
    closeModalBox();
};

function closeModalBox() { modalOverlay.classList.remove('active'); }
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

// Экспорт обновленного кода для GitHub
document.getElementById('exportDataBtn').onclick = () => {
    const exportedCode = `// Пароль для включения режима редактирования
const ADMIN_PASSWORD = "${ADMIN_PASSWORD}"; 

const bracketData = ${JSON.stringify(store, null, 4)};

// Остальной неизменяемый JS код...
` + buildTournament.toString() + "\n" +
    toggleAdminInterface.toString() + "\n" +
    advanceTeams.toString() + "\n" +
    openModalBox.toString() + "\n" +
    updateGalleryView.toString() + "\n" +
    "// Инициализация обработчиков событий и функций...\n" +
    `let store = JSON.parse(localStorage.getItem('grid_save_data')) || bracketData;
let isAdmin = false; let activeKey = null;
const modalOverlay = document.getElementById('matchModal');
const closeBtn = document.getElementById('closeModal');
const fileLoader = document.getElementById('fileInput');
const galleryBox = document.getElementById('screenshotsGallery');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const adminLogoutBtn = document.getElementById('adminLogoutBtn');
const adminExportPanel = document.getElementById('adminExportPanel');
const adminUploadZone = document.getElementById('adminUploadZone');
const saveMatchResultsBtn = document.getElementById('saveMatchResultsBtn');
const inputScore1 = document.getElementById('inputScore1');
const inputScore2 = document.getElementById('inputScore2');
const modalScore1 = document.getElementById('modal-score1');
const modalScore2 = document.getElementById('modal-score2');
adminLoginBtn.onclick = () => { const pass = prompt("Введите пароль администратора:"); if (pass === ADMIN_PASSWORD) { toggleAdminInterface(true); } else { alert("Неверный пароль!"); } };
adminLogoutBtn.onclick = () => { toggleAdminInterface(false); };
saveMatchResultsBtn.onclick = () => { const s1 = parseInt(inputScore1.value) || 0; const s2 = parseInt(inputScore2.value) || 0; store[activeKey].score1 = s1; store[activeKey].score2 = s2; if (s1 !== s2) { advanceTeams(activeKey, store[activeKey].s1, s1, store[activeKey].s2, s2); } localStorage.setItem('grid_save_data', JSON.stringify(store)); buildTournament(); closeModalBox(); };
function closeModalBox() { modalOverlay.classList.remove('active'); }
closeBtn.onclick = closeModalBox;
modalOverlay.onclick = (e) => { if (e.target === modalOverlay) closeModalBox(); };
fileLoader.addEventListener('change', function(e) { const file = e.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = function(event) { if (!store[activeKey].images) store[activeKey].images = []; store[activeKey].images.push(event.target.result); localStorage.setItem('grid_save_data', JSON.stringify(store)); updateGalleryView(); }; reader.readAsDataURL(file); });
document.getElementById('exportDataBtn').onclick = ${document.getElementById('exportDataBtn').onclick.toString()};
buildTournament();`;

    navigator.clipboard.writeText(exportedCode);
    alert("Код успешно скопирован в буфер обмена! Теперь откройте файл script.js на GitHub, выделите всё через Ctrl+A, вставьте этот код и сохраните.");
};

buildTournament();
