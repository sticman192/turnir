// Пароль для включения режима редактирования
const ADMIN_PASSWORD = "1234"; 

// Главная база данных турнира. Именно этот блок будет обновляться при экспорте!
const bracketData = {
    // ==========================================
    // ВЕРХНЯЯ СЕТКА: РАУНД 1
    // ==========================================
    "u1": { id: 1, type: "upper-r1", s1: 16, team1: "svoloch", score1: 1, s2: 17, team2: "Lotus", score2: 0, images: ["screenshot.png", "screenshot1.png", "screenshot2.png", "screenshot3.png", "screenshot4.png", "screenshot5.png", "screenshot6.png"] },
    "u2": { id: 2, type: "upper-r1", s1: 9, team1: "Laz", score1: 1, s2: 24, team2: "xKros", score2: 0, images: [] },
    "u3": { id: 3, type: "upper-r1", s1: 13, team1: "mogilka", score1: 1, s2: 20, team2: "isagi", score2: 0, images: [] },
    "u4": { id: 4, type: "upper-r1", s1: 12, team1: "Justix", score1: 1, s2: 21, team2: "miate", score2: 0, images: [] },
    "u5": { id: 5, type: "upper-r1", s1: 15, team1: "Daniil", score1: 0, s2: 18, team2: "HD", score2: 0, images: [] },
    "u6": { id: 6, type: "upper-r1", s1: 10, team1: "vovelon", score1: 0, s2: 23, team2: "Rangerss", score2: 0, images: [] },
    "u7": { id: 7, type: "upper-r1", s1: 14, team1: "VikuSiK", score1: 0, s2: 19, team2: "willave", score2: 0, images: [] },
    "u8": { id: 8, type: "upper-r1", s1: 11, team1: "KiNg", score1: 0, s2: 22, team2: "W1nston", score2: 0, images: [] },

    // ==========================================
    // ВЕРХНЯЯ СЕТКА: РАУНД 2
    // ==========================================
    "u9": { id: 9, type: "upper-r2", s1: 1, team1: "Pokich", score1: 1, s2: 16, team2: "svoloch", score2: 0, images: [] },
    "u10": { id: 10, type: "upper-r2", s1: 8, team1: "Chacomol", score1: 1, s2: 9, team2: "Laz", score2: 0, images: [] },
    "u11": { id: 11, type: "upper-r2", s1: 4, team1: "Akuma", score1: 1, s2: 13, team2: "mogilka", score2: 0, images: [] },
    "u12": { id: 12, type: "upper-r2", s1: 5, team1: "Kayix", score1: 1, s2: 12, team2: "Justix", score2: 0, images: [] },
    "u13": { id: 13, type: "upper-r2", s1: 2, team1: "STICMAN", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },
    "u14": { id: 14, type: "upper-r2", s1: 7, team1: "qwrchk", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },
    "u15": { id: 15, type: "upper-r2", s1: 3, team1: "german", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },
    "u16": { id: 16, type: "upper-r2", s1: 6, team1: "DuRimAn", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },

    // ==========================================
    // ВЕРХНЯЯ СЕТКА: РАУНД 3
    // ==========================================
    "u29": { id: 29, type: "upper-r3", s1: 1, team1: "Pokich", score1: 1, s2: 8, team2: "Chacomol", score2: 0, images: [] },
    "u30": { id: 30, type: "upper-r3", s1: 4, team1: "Akuma", score1: 1, s2: 5, team2: "Kayix", score2: 0, images: [] },
    "u31": { id: 31, type: "upper-r3", s1: null, team1: "Ожидание", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },
    "u32": { id: 32, type: "upper-r3", s1: null, team1: "Ожидание", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },

    // ==========================================
    // ВЕРХНЯЯ СЕТКА: ПОЛУФИНАЛЫ И ФИНАЛ
    // ==========================================
    "u39": { id: 39, type: "upper-r4", s1: 1, team1: "Pokich", score1: 1, s2: 4, team2: "Akuma", score2: 0, images: [] },
    "u40": { id: 40, type: "upper-r4", s1: null, team1: "Ожидание", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },
    "u41": { id: 41, type: "upper-r5", s1: 1, team1: "Pokich", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },

    // ==========================================
    // НИЖНЯЯ СЕТКА: РАУНД 1 НС
    // ==========================================
    "u17": { id: 17, type: "lower-r1", s1: 17, team1: "Lotus", score1: 0, s2: 24, team2: "xKros", score2: 0, images: [] },
    "u18": { id: 18, type: "lower-r1", s1: 20, team1: "isagi", score1: 0, s2: 21, team2: "miate", score2: 0, images: [] },
    "u19": { id: 19, type: "lower-r1", s1: 15, team1: "HD", score1: 0, s2: 23, team2: "Rangerss", score2: 0, images: [] },
    "u20": { id: 20, type: "lower-r1", s1: 19, team1: "willave", score1: 0, s2: 22, team2: "W1nston", score2: 0, images: [] },

    // ==========================================
    // НИЖНЯЯ СЕТКА: РАУНД 2 НС
    // ==========================================
    "u21": { id: 21, type: "lower-r2", s1: 16, team1: "svoloch", score1: 0, s2: 9, team2: "Laz", score2: 0, images: [] },
    "u22": { id: 22, type: "lower-r2", s1: 13, team1: "mogilka", score1: 0, s2: 12, team2: "Justix", score2: 0, images: [] },
    "u23": { id: 23, type: "lower-r2", s1: null, team1: "Ожидание", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },
    "u24": { id: 24, type: "lower-r2", s1: null, team1: "Ожидание", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },

    // ==========================================
    // НИЖНЯЯ СЕТКА: РАУНД 3 НС
    // ==========================================
    "u25": { id: 25, type: "lower-r3", s1: null, team1: "Ожидание", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },
    "u26": { id: 26, type: "lower-r3", s1: null, team1: "Ожидание", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },
    "u27": { id: 27, type: "lower-r3", s1: null, team1: "Ожидание", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },
    "u28": { id: 28, type: "lower-r3", s1: null, team1: "Ожидание", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },

    // ==========================================
    // НИЖНЯЯ СЕТКА: РАУНД 4 НС
    // ==========================================
    "u33": { id: 33, type: "lower-r4", s1: null, team1: "Ожидание", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },
    "u34": { id: 34, type: "lower-r4", s1: null, team1: "Ожидание", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },
    "u35": { id: 35, type: "lower-r4", s1: null, team1: "Ожидание", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },
    "u36": { id: 36, type: "lower-r4", s1: null, team1: "Ожидание", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] },

    // ==========================================
    // ИЗМЕНЕННАЯ ПОЛУФИНАЛЬНАЯ ЛОГИКА (ПО ЦЕНТРУ)
    // ==========================================
    "u37": { id: 37, type: "lower-r5", s1: null, team1: "Ожидание", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] }, 
    "u38": { id: 38, type: "lower-r5", s1: null, team1: "Ожидание", score1: 0, s2: null, team2: "Ожидание", score2: 0, images: [] }, 

    // Матч 42 теперь ждет Победителей 37 и 38 команд и выводит их в центр
    "u42": { id: 42, type: "lower-r6", ph1: "Победитель 37", ph2: "Победитель 38", team1: "", score1: 0, team2: "", score2: 0, images: [] },
    "u43": { id: 43, type: "lower-r6", ph1: "Победитель 35", ph2: "Победитель 36", team1: "", score1: 0, team2: "", score2: 0, images: [] },

    // Матч 44 (Финал Нижней Сетки) — сюда сходятся победители 42 и 43
    "u44": { id: 44, type: "lower-final-stage", ph1: "Победитель 42", ph2: "Победитель 43", team1: "", score1: 0, team2: "", score2: 0, images: [] },

    // Матч 45 (Гранд Финал) — победитель верхней (Pokich) играет против победителя НС (44)
    "u45": { id: 45, type: "grand-final", team1: "Pokich", score1: 0, ph2: "Победитель 44", team2: "", score2: 0, images: [] }
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
