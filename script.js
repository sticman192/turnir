body {
    background-color: #222222;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 20px;
}

h2 {
    color: #cccccc;
    border-bottom: 1px solid #444;
    padding-bottom: 10px;
    margin-top: 30px;
}

.tournament-container {
    max-width: 1200px;
    margin: 0 auto;
}

.bracket {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    padding: 20px 0;
}

.column {
    flex: 1;
    min-width: 220px;
}

.column-header {
    background-color: #333333;
    padding: 10px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 20px;
    border-radius: 4px;
}

.match-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-around;
    height: 100%;
}

/* КАРТОЧКА МАТЧА */
.match-card {
    background-color: #3a3a3a;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s, border-color 0.2s;
    border: 1px solid #444;
}

.match-card:hover {
    transform: scale(1.02);
    border-color: #ff7a00;
}

.match-id {
    background-color: #2e2e2e;
    font-size: 11px;
    padding: 2px 8px;
    color: #888;
}

.team-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #444;
    background-color: #4a4a4a;
}

.team-row:last-child {
    border-bottom: none;
}

.team-name {
    padding: 8px;
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.score {
    padding: 8px 12px;
    background-color: #555555;
    font-weight: bold;
    min-width: 15px;
    text-align: center;
}

/* Оранжевый цвет для победителя */
.winner .score {
    background-color: #ff7a00;
    color: #fff;
}

/* МОДАЛЬНОЕ ОКНО (по скриншоту 2) */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.modal-overlay.active {
    opacity: 1;
    pointer-events: auto;
}

.modal {
    background-color: #333333;
    width: 90%;
    max-width: 650px;
    border-radius: 6px;
    padding: 25px;
    position: relative;
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
}

.close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    color: #888;
    font-size: 28px;
    cursor: pointer;
}

.close-btn:hover {
    color: #fff;
}

.modal-title {
    font-size: 18px;
    font-weight: bold;
    border-bottom: 2px solid #ff7a00;
    padding-bottom: 8px;
    display: inline-block;
    margin-bottom: 25px;
}

.modal-vs-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.modal-team-card {
    background-color: #222222;
    flex: 1;
    text-align: center;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid #444;
}

.team-logo {
    width: 50px;
    height: 50px;
    background-color: #555;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 10px auto;
    font-size: 20px;
}

.modal-team-name {
    font-size: 15px;
    margin-bottom: 15px;
}

.modal-score {
    background-color: #444;
    padding: 10px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 4px;
}

.vs-text {
    padding: 0 15px;
    color: #888;
    font-style: italic;
}

/* СКРИНШОТЫ */
.screenshots-section {
    border-top: 1px solid #444;
    padding-top: 20px;
}

.screenshots-section h3 {
    margin-top: 0;
    font-size: 15px;
    color: #aaa;
}

.screenshots-gallery {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 15px;
}

.screenshot-item {
    width: 120px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    border: 1px solid #555;
    cursor: pointer;
    transition: transform 0.2s;
}

.screenshot-item:hover {
    transform: scale(1.05);
}

.upload-btn {
    background-color: #ff7a00;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
}

.upload-btn:hover {
    background-color: #e06b00;
}
