// БАЗА ДАННЫХ ВОПРОСОВ
const questionsDB = {
  history_vkl: {
    topic: "Образование ВКЛ", subject: "by",
    questions: [
      { type: "closed", text: "В каком году произошла Грюнвальдская битва?", options: ["1385", "1410", "1447", "1569"], correct: 1, explanation: "Грюнвальдская битва — 15 июля 1410 года." },
      { type: "closed", text: "Кто был первым великим князем Литовским?", options: ["Гедимин", "Миндовг", "Витовт", "Ягайло"], correct: 1, explanation: "Миндовг — первый великий князь (1253 г.)." },
      { type: "closed", text: "Какая Кревская уния была заключена в 1385 году?", options: ["Военный союз с Орденом", "Династическая уния с Польшей", "Торговое соглашение с Москвой", "Мир с Золотой Ордой"], correct: 1, explanation: "Кревская уния — династическая уния с Польшей." },
      { type: "open", text: "Опишите значение Грюнвальдской битвы 1410 года для ВКЛ.", keywords: ["Грюнвальд", "1410"], modelAnswer: "Крупнейшая победа ВКЛ и Польши над Тевтонским орденом.", explanation: "Битва при Грюнвальде (1410) остановила экспансию Ордена." }
    ]
  }
};

// БИБЛИОТЕКА ТЕСТОВ УЧИТЕЛЯ
const testLibraryData = [
  { id: "lib1", title: "Образование ВКЛ", historyType: "by", date: "may2026", dateLabel: "10 мая 2026", hasPreview: true },
  { id: "lib2", title: "Грюнвальдская битва", historyType: "by", date: "apr2026", dateLabel: "15 апреля 2026", hasPreview: false },
  { id: "lib3", title: "Кревская уния 1385 года", historyType: "by", date: "apr2026", dateLabel: "2 апреля 2026", hasPreview: false },
  { id: "lib4", title: "Вторая мировая война", historyType: "world", date: "may2026", dateLabel: "8 мая 2026", hasPreview: false },
  { id: "lib5", title: "Великая Французская революция", historyType: "world", date: "mar2026", dateLabel: "20 марта 2026", hasPreview: false },
  { id: "lib6", title: "Древний Рим", historyType: "world", date: "mar2026", dateLabel: "5 марта 2026", hasPreview: false }
];

// КЛАССЫ
const classesData = [
  { id: "8a", name: "8А", students: 24, color: "blue", hasAnalytics: false },
  { id: "9b", name: "9Б", students: 22, color: "green", hasAnalytics: false },
  { id: "10v", name: "10В", students: 20, color: "orange", hasAnalytics: true }
];

// АНАЛИТИКА 10В
const analytics10V = {
  stats: { avgScore: 68, totalTests: 2, totalStudents: 20, completed: 18, inProgress: 2, trend: "+4%" },
  distribution: [
    { range: "0–20%", count: 2, color: "#e74c3c" },
    { range: "21–40%", count: 5, color: "#e67e22" },
    { range: "41–60%", count: 5, color: "#f39c12" },
    { range: "61–80%", count: 6, color: "#2ecc71" },
    { range: "81–100%", count: 2, color: "#27ae60" }
  ],
  dynamics: [
    { name: "Линейные уравнения", score: 62, date: "1 апр" },
    { name: "Квадратные уравнения", score: 71, date: "15 апр" },
    { name: "Основы ВКЛ", score: 65, date: "28 апр" },
    { name: "Грюнвальд 1410", score: 74, date: "10 май" }
  ],
  students: [
    { name: "Андреева М.", score: 92 }, { name: "Борисов К.", score: 85 },
    { name: "Волкова А.", score: 78 }, { name: "Григорьев Д.", score: 74 },
    { name: "Дмитриева Е.", score: 71 }, { name: "Егоров И.", score: 68 },
    { name: "Жукова О.", score: 65 }, { name: "Зайцев П.", score: 62 },
    { name: "Иванова С.", score: 58 }, { name: "Козлов Н.", score: 55 },
    { name: "Лебедева Т.", score: 50 }, { name: "Морозов В.", score: 47 },
    { name: "Новикова Л.", score: 42 }, { name: "Орлов Р.", score: 38 },
    { name: "Петрова Ю.", score: 35 }, { name: "Романов Г.", score: 30 },
    { name: "Сидорова Н.", score: 30 }, { name: "Тихонов А.", score: 30 },
    { name: "Ушакова В.", score: 0, status: "не сдавал(-а)" },
    { name: "Фёдоров С.", score: 0, status: "не сдавал(-а)" }
  ],
  hardQuestions: [
    { text: "Кто был первым великим князем Литовским?", topic: "Образование ВКЛ", correctPct: 42 },
    { text: "Опишите значение Грюнвальдской битвы", topic: "Образование ВКЛ", correctPct: 55 }
  ]
};

// ДАННЫЕ УЧЕНИКА
const studentTests = [
  { id: "t1", title: "Образование ВКЛ", subject: "История Беларуси", questions: 4, deadline: "22 мая 2026" }
];

const testHistoryData = [
  { title: "Линейные уравнения", score: 72, maxScore: 100, date: "5 мая 2026", hasResults: true },
  { title: "Древняя Русь", score: 72, maxScore: 100, date: "1 мая 2026", hasResults: false },
  { title: "Дроби", score: 50, maxScore: 100, date: "28 апреля 2026", hasResults: false },
  { title: "Основы генетики", score: 35, maxScore: 100, date: "25 апреля 2026", hasResults: false },
  { title: "География Европы", score: 30, maxScore: 100, date: "20 апреля 2026", hasResults: false }
];

const linearResults = [
  { type:"closed", text:"Решите уравнение: 2x + 4 = 0", options:["x = −2","x = 2","x = −4","x = 4"], userAnswer:"x = −2", correctAnswer:"x = −2", correct:true, feedback:"Верно! x = −4/2 = −2." },
  { type:"closed", text:"Решите уравнение: 3x − 9 = 0", options:["x = 3","x = −3","x = 9","x = 0"], userAnswer:"x = 3", correctAnswer:"x = 3", correct:true, feedback:"Верно! 3x = 9 → x = 3." },
  { type:"open", text:"Объясните, как решить уравнение вида ax + b = 0.", userAnswer:"Нужно перенести b вправо и разделить на a, то есть x = −b/a", correctAnswer:"Перенести свободный член, разделить на коэффициент: x = −b/a", correct:true, feedback:"Верно! Алгоритм описан правильно." },
  { type:"closed", text:"Сколько корней имеет уравнение 0·x = 5?", options:["Один","Два","Ни одного","Бесконечно много"], userAnswer:"Бесконечно много", correctAnswer:"Ни одного", correct:false, feedback:"Неверно. 0·x = 5 не имеет решений." },
  { type:"open", text:"Решите уравнение: −4x + 12 = 0", userAnswer:"x = 3", correctAnswer:"x = 3", correct:true, feedback:"Верно! x = 12/4 = 3." },
  { type:"closed", text:"Какое значение x удовлетворяет уравнению 5x = 20?", options:["x = 4","x = 5","x = 15","x = 100"], userAnswer:"x = 4", correctAnswer:"x = 4", correct:true, feedback:"Верно! x = 20/5 = 4." },
  { type:"closed", text:"Решите: 7x − 14 = 2x + 6", options:["x = 4","x = 2","x = 8","x = −4"], userAnswer:"x = 2", correctAnswer:"x = 4", correct:false, feedback:"Неверно. 7x − 2x = 6 + 14 → 5x = 20 → x = 4." },
  { type:"open", text:"При каком значении a уравнение ax = 3 имеет бесконечно много решений? Дайте полный ответ.", userAnswer:"Ни при каком", correctAnswer:"Ни при каком. Коэффициент y не равен нулю, поэтому у уравнения может быть либо один корень, либо не быть корней вообще.", correct:false, feedback:"Частично верно. Ответ верный, но обоснование не раскрыто." }
];

// СОСТОЯНИЕ
let currentRole = null;
let currentTest = null;
let currentQuestionIndex = 0;
let studentAnswers = [];
let testResults = [];
let wizardState = { subject: "", class: "", type: "closed", count: 5, difficulty: "basic" };

// УТИЛИТЫ
function getScoreColor(score) {
  const red = { r: 231, g: 76, b: 60 }, gold = { r: 243, g: 156, b: 18 }, green = { r: 39, g: 174, b: 96 };
  let base, target, t;
  if (score <= 50) { base = red; target = gold; t = score / 50; }
  else { base = gold; target = green; t = (score - 50) / 50; }
  return `rgb(${Math.round(base.r+(target.r-base.r)*t)},${Math.round(base.g+(target.g-base.g)*t)},${Math.round(base.b+(target.b-base.b)*t)})`;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  
  const logoutBtn = document.getElementById('btnLogout');
  if (logoutBtn) {
    if (id === 'screenLogin') {
      logoutBtn.style.display = 'none';
    } else {
      logoutBtn.style.display = 'block';
    }
  }
}

function getHistoryTag(type) {
  if (type === 'by') return '<span class="history-tag history-by">🇧🇾 История Беларуси</span>';
  return '<span class="history-tag history-world">🌍 Всемирная история</span>';
}

// АВТОРИЗАЦИЯ
function selectRole(role) {
  currentRole = role;
  document.getElementById('roleTeacher').classList.toggle('selected', role === 'teacher');
  document.getElementById('roleStudent').classList.toggle('selected', role === 'student');
  document.getElementById('btnLogin').disabled = false;
}

function login() {
  if (!currentRole) return;
  if (currentRole === 'teacher') {
    document.getElementById('headerRole').textContent = '👨‍🏫 Учитель';
    document.getElementById('teacherName').textContent = 'Иванов Александр Петрович';
    document.getElementById('teacherRole').textContent = 'Учитель истории';
    renderTeacherDash();
    showScreen('screenTeacherDash');
  } else {
    document.getElementById('headerRole').textContent = '👨‍🎓 Ученик';
    document.getElementById('studentName').textContent = 'Сидорова Наталья';
    document.getElementById('studentClass').textContent = '10В класс';
    renderStudentDash();
    showScreen('screenStudentDash');
  }
}

function logout() {
  currentRole = null; currentTest = null; currentQuestionIndex = 0;
  studentAnswers = []; testResults = [];
  document.getElementById('roleTeacher').classList.remove('selected');
  document.getElementById('roleStudent').classList.remove('selected');
  document.getElementById('btnLogin').disabled = true;
  showScreen('screenLogin');
}

// ИНТЕРФЕЙС УЧИТЕЛЯ
function renderTeacherDash() {
  document.getElementById('teacherClasses').innerHTML = classesData.map(c => `
    <div class="card">
      <div class="card-icon ${c.color}">🏫</div>
      <h3>Класс ${c.name}</h3>
      <p>${c.students} учеников</p>
      <button class="card-btn card-btn-outline" onclick="${c.hasAnalytics ? "openAnalytics('" + c.id + "')" : "analytics('" + c.name + "')"}">📊 Аналитика</button>
    </div>
  `).join('');
  applyFilters();
}

function analytics(name) {
  alert(`📊 Аналитика по классу ${name} (демонстрационный режим)\n\nВ реальной системе здесь отображались бы:\n- успеваемость учеников\n- средний балл по тестам\n- динамика ошибок\n- рекомендации.\n\nВ прототипе эта функция не реализована, так как требует накопления реальных данных.`);
}

function openAnalytics(id) {
  if (id === '10v') { renderAnalytics(); showScreen('screenAnalytics'); }
  else analytics(classesData.find(c => c.id === id)?.name || '');
}

function goToTeacherDash() { renderTeacherDash(); showScreen('screenTeacherDash'); }

// БИБЛИОТЕКА ТЕСТОВ
function applyFilters() {
  const histFilter = document.getElementById('filterHistory').value;
  const dateFilter = document.getElementById('filterDate').value;
  let filtered = testLibraryData;
  if (histFilter !== 'all') filtered = filtered.filter(t => t.historyType === histFilter);
  if (dateFilter !== 'all') filtered = filtered.filter(t => t.date === dateFilter);

  document.getElementById('testLibrary').innerHTML = filtered.length === 0
    ? '<p style="color:#90a0b4;text-align:center;padding:20px;">Тесты не найдены</p>'
    : filtered.map(t => `
    <div class="test-lib-item">
      <div class="test-lib-info">
        <h4>${getHistoryTag(t.historyType)}${t.title}</h4>
        <span>${t.dateLabel}</span>
      </div>
      <div class="test-lib-actions">
        <button class="card-btn card-btn-outline" onclick="${t.hasPreview ? "openPreviewTest()" : "alert('Предварительный просмотр для этого теста не реализован в прототипе.')"}">👁 Просмотр теста</button>
        <button class="card-btn card-btn-assign" onclick="openAssignModal('${t.title}')">📤 Назначить</button>
      </div>
    </div>
  `).join('');
}

function openPreviewTest() {
  const db = questionsDB.history_vkl;
  document.getElementById('previewTestContent').innerHTML = `
    <h2 class="dashboard-title">🇧🇾 Образование ВКЛ — Просмотр теста</h2>
    <p class="dashboard-subtitle">История Беларуси · 4 вопроса</p>
    <div class="activity-list" style="margin-top:20px;">
      ${db.questions.map((q, i) => `
        <div class="review-item">
          <h4><span class="question-type-badge ${q.type === 'closed' ? 'badge-closed' : 'badge-open'}" style="margin-right:8px;">${q.type === 'closed' ? 'Закрытый' : 'Открытый'}</span> ${i + 1}. ${q.text}</h4>
          ${q.type === 'closed' ? q.options.map((o, j) => `<p style="font-size:13px;padding:3px 0;${j === q.correct ? 'color:#27ae60;font-weight:600;' : ''}">${j === q.correct ? '✅' : '⬜'} ${o}</p>`).join('') : `<p style="font-size:13px;color:#27ae60;font-weight:500;margin-top:8px;">✅ Эталон: ${q.modelAnswer}</p>`}
          <p style="font-size:12px;color:#6b7a90;margin-top:8px;">💡 ${q.explanation}</p>
        </div>
      `).join('')}
    </div>
    <button class="btn-primary" style="margin-top:24px;max-width:200px;" onclick="goToTeacherDash()">← Назад</button>
  `;
  showScreen('screenPreviewTest');
}

// ОКНО НАЗНАЧЕНИЯ ТЕСТА КЛАССУ
function openAssignModal(testTitle) {
  document.getElementById('modalTestName').textContent = `Тест: «${testTitle}»`;
  document.getElementById('modalAssign').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modalAssign').classList.add('hidden');
  alert(`📤 Назначение теста (демонстрация)\n\nВ реальной системе тест был бы отправлен выбранному классу, а у учеников появился бы новый активный тест.\nВ прототипе это действие не реализовано.`);
}

// СОЗДАНИЕ ТЕСТА
function openCreateTest() {
  wizardState = { subject: "", class: "", type: "closed", count: 5, difficulty: "basic" };
  document.getElementById('wizSubject').value = "";
  document.getElementById('wizClass').value = "";
  document.getElementById('wizCount').value = 5;
  updateSlider();
  showWizardStep(1);
  showScreen('screenCreateTest');
}

function showWizardStep(n) {
  for (let i = 1; i <= 3; i++) {
    document.getElementById('wizardStep' + i).style.display = n === i ? 'block' : 'none';
    const circle = document.getElementById('stepC' + i), label = document.getElementById('stepL' + i);
    circle.classList.remove('active', 'done'); label.classList.remove('active');
    if (i < n) { circle.classList.add('done'); circle.innerHTML = '✓'; }
    else if (i === n) { circle.classList.add('active'); circle.innerHTML = i; label.classList.add('active'); }
    else circle.innerHTML = i;
  }
  document.getElementById('line1').classList.toggle('done', n >= 2);
  document.getElementById('line2').classList.toggle('done', n >= 3);
}

function updateSlider() { document.getElementById('sliderVal').textContent = document.getElementById('wizCount').value; }

function wizNext1() {
  wizardState.subject = document.getElementById('wizSubject').value;
  wizardState.class = document.getElementById('wizClass').value;
  if (!wizardState.subject || !wizardState.class) { alert('Пожалуйста, заполните все поля!'); return; }
  showWizardStep(2);
}

function wizNext2() {
  wizardState.type = document.querySelector('input[name="qType"]:checked').value;
  wizardState.count = parseInt(document.getElementById('wizCount').value);
  wizardState.difficulty = document.querySelector('input[name="diff"]:checked').value;
  renderPreview();
  showWizardStep(3);
}

function renderPreview() {
  const db = questionsDB.history_vkl;
  let filtered = db.questions;
  if (wizardState.type === 'closed') filtered = filtered.filter(q => q.type === 'closed');
  else if (wizardState.type === 'open') filtered = filtered.filter(q => q.type === 'open');
  if (filtered.length < 2) filtered = db.questions.slice(0, 2);

  document.getElementById('previewQuestions').innerHTML = filtered.slice(0, 2).map((q, i) => `
    <div class="preview-question">
      <h4>Вопрос ${i + 1} ${q.type === 'closed' ? '(закрытый)' : '(открытый)'}</h4>
      <p>${q.text}</p>
      ${q.type === 'closed' ? q.options.map((opt, j) => `<p style="font-size:13px;padding:4px 0;${j === q.correct ? 'color:#27ae60;font-weight:600;' : ''}">${j === q.correct ? '✅' : '⬜'} ${opt}</p>`).join('') : ''}
      ${q.type === 'open' ? `<div class="preview-answer">✅ Эталон: ${q.modelAnswer}</div>` : ''}
    </div>
  `).join('');
}

function saveToLibrary() {
  alert(`💾 Сохранение теста в библиотеку (демонстрация)\n\nВ реальной системе тест был бы добавлен в базу данных учителя. В прототипе это только имитация.`);
}

function editQuestions() {
  alert(`✏️ Редактирование вопросов (демонстрация)\n\nВ реальной системе учитель мог бы изменять текст вопроса, варианты ответов или эталон. В прототипе эта функция не реализована.`);
}

// СТРАНИЦА АНАЛИТИКИ 10В
function renderAnalytics() {
  const data = analytics10V, s = data.stats;
  const avgColor = getScoreColor(s.avgScore);
  const chartW = 500, chartH = 160, padX = 10, padY = 20;
  const stepX = (chartW - padX * 2) / (data.dynamics.length - 1);
  const points = data.dynamics.map((d, i) => ({
    x: padX + i * stepX,
    y: padY + (1 - d.score / 100) * (chartH - padY * 2),
    score: d.score
  }));
  const linePath = points.map((p, i) => (i === 0 ? 'M' : 'L') + `${p.x},${p.y}`).join(' ');
  const areaPath = linePath + ` L${points[points.length-1].x},${chartH} L${points[0].x},${chartH} Z`;
  const maxCount = Math.max(...data.distribution.map(x => x.count));

  document.getElementById('analyticsContent').innerHTML = `
    <div class="analytics-header">
      <h2>📊 Аналитика: класс 10В</h2>
      <button class="btn-back" onclick="goToTeacherDash()">← Назад</button>
    </div>
    <div class="stats-row">
      <div class="stat-card"><div class="stat-label">Средний балл</div><div class="stat-value" style="color:${avgColor}">${s.avgScore}%</div><div class="stat-sub">Тренд: <span style="color:#27ae60;font-weight:600;">${s.trend}</span></div></div>
      <div class="stat-card"><div class="stat-label">Всего тестов</div><div class="stat-value blue">${s.totalTests}</div><div class="stat-sub">за текущий период</div></div>
      <div class="stat-card"><div class="stat-label">Завершили тесты</div><div class="stat-value green">${s.completed}</div><div class="stat-sub">из ${s.totalStudents} учеников</div></div>
      <div class="stat-card"><div class="stat-label">В процессе</div><div class="stat-value orange">${s.inProgress}</div><div class="stat-sub">ещё не сдали</div></div>
    </div>
    <div class="analytics-card">
      <h3>📈 Распределение баллов</h3>
      <div class="histogram">
        ${data.distribution.map(d => `<div class="hist-bar-wrapper"><div class="hist-count">${d.count} уч.</div><div class="hist-bar" style="height:${(d.count/maxCount)*100}%;background:${d.color};"></div><div class="hist-label">${d.range}</div></div>`).join('')}
      </div>
    </div>
    <div class="analytics-card">
      <h3>📉 Динамика среднего балла</h3>
      <div class="line-chart">
        <div class="line-chart-grid">${[100,75,50,25,0].map(v => `<div class="grid-line"><span>${v}%</span></div>`).join('')}</div>
        <div class="line-chart-area">
          <svg viewBox="0 0 ${chartW} ${chartH}" preserveAspectRatio="none">
            <defs><linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2c6e9b" stop-opacity="0.2"/><stop offset="100%" stop-color="#2c6e9b" stop-opacity="0"/></linearGradient></defs>
            <path d="${areaPath}" fill="url(#areaGrad)"/>
            <path d="${linePath}" fill="none" stroke="#2c6e9b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="5" fill="#fff" stroke="#2c6e9b" stroke-width="2"/><circle cx="${p.x}" cy="${p.y}" r="2.5" fill="#2c6e9b"/>`).join('')}
          </svg>
        </div>
        <div class="line-chart-labels">${data.dynamics.map(d => `<span>${d.date}</span>`).join('')}</div>
        ${points.map(p => `<div class="chart-tooltip" style="left:${(p.x/chartW)*100}%;top:calc(${(p.y/chartH)*100}% - 24px);">${p.score}%</div>`).join('')}
      </div>
    </div>
    <div class="analytics-card">
      <h3>👥 Успеваемость учеников</h3>
      <table class="student-table">
        <thead><tr><th>№</th><th>Ученик</th><th>Балл</th><th>Прогресс</th></tr></thead>
        <tbody>
          ${data.students.map((st, idx) => {
            const clr = st.score === 0 ? '#90a0b4' : getScoreColor(st.score);
            return `<tr><td style="color:#90a0b4;font-size:12px;">${idx+1}</td><td class="student-name">${st.name}</td><td><span class="student-score-num" style="color:${clr};">${st.score > 0 ? st.score+'%' : '—'}</span></td><td>${st.score > 0 ? `<div class="mini-bar-bg"><div class="mini-bar-fill" style="width:${st.score}%;background:${clr};"></div></div>` : '<span style="font-size:11px;color:#90a0b4;">Не сдавал</span>'}</td></tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
    <div class="analytics-card">
      <h3>⚠️ Самые сложные вопросы</h3>
      ${data.hardQuestions.map((hq, idx) => `
        <div class="hard-question-item">
          <div class="hq-rank">${idx+1}</div>
          <div class="hq-info"><div class="hq-text">${hq.text}</div><div class="hq-meta">${hq.topic}</div></div>
          <div class="hq-pct" style="color:${getScoreColor(hq.correctPct)};">${hq.correctPct}%</div>
        </div>
      `).join('')}
    </div>
  `;
}

// ИНТЕРФЕЙС УЧЕНИКА
function renderStudentDash() {
  document.getElementById('activeTests').innerHTML = studentTests.map(t => `
    <div class="active-test-card">
      <div class="active-test-info">
        <h3>${t.title}</h3>
        <span>${t.subject} · ${t.questions} вопросов · До: ${t.deadline}</span>
      </div>
      <button class="btn-start-test" onclick="startTest('${t.id}')">Начать тест</button>
    </div>
  `).join('');

  document.getElementById('testHistory').innerHTML = testHistoryData.map(h => {
    const bgColor = getScoreColor(h.score);
    return `
      <div class="history-item">
        <div class="history-item-info">
          <h4>${h.title}</h4>
          <span>${h.date}</span>
        </div>
        <div class="history-item-right">
          <span class="score-pill" style="background:${bgColor};">${h.score}%</span>
          <button class="card-btn card-btn-results" onclick="${h.hasResults ? "showLinearResults()" : "alert('Детальный просмотр результатов для этого теста в прототипе не реализован.')"}">📋 Результаты</button>
        </div>
      </div>`;
  }).join('');
}

// ПРОХОЖДЕНИЕ ТЕСТА
function startTest(testId) {
  const test = studentTests.find(t => t.id === testId);
  if (!test) return;
  currentTest = { ...test };
  currentQuestionIndex = 0;
  studentAnswers = [];
  testResults = [];
  if (test.title === "Квадратные уравнения") {
    currentTest.questionsList = [...questionsDB.history_vkl.questions];
  } else {
    currentTest.questionsList = [...questionsDB.history_vkl.questions];
  }
  currentTest.totalQuestions = currentTest.questionsList.length;
  showScreen('screenTest');
  renderQuestion();
}

function renderQuestion() {
  const q = currentTest.questionsList[currentQuestionIndex];
  const total = currentTest.totalQuestions, idx = currentQuestionIndex + 1;
  document.getElementById('progressFill').style.width = ((idx-1)/total*100)+'%';
  document.getElementById('progressText').textContent = `Вопрос ${idx} из ${total}`;

  let optsHTML = q.type === 'closed'
    ? `<div class="options-list">${q.options.map((o,i) => `<label class="option-label"><input type="radio" name="answer" value="${i}" onchange="enableAnswerBtn()"><span class="option-marker"></span><span class="option-text">${o}</span></label>`).join('')}</div>`
    : `<textarea class="open-textarea" id="openAnswer" placeholder="Введите ваш ответ..." oninput="enableAnswerBtn()"></textarea>`;

  document.getElementById('questionArea').innerHTML = `
    <div class="question-card">
      <span class="question-type-badge ${q.type==='closed'?'badge-closed':'badge-open'}">${q.type==='closed'?'Закрытый вопрос':'Открытый вопрос'}</span>
      <div class="question-text">${q.text}</div>
      ${optsHTML}
      <button class="btn-answer" id="btnAnswer" disabled onclick="submitAnswer()">Ответить</button>
      <div class="feedback" id="feedback"></div>
      <button class="btn-next" id="btnNext" onclick="nextQuestion()">${idx<total?'Следующий вопрос →':'🏁 Завершить тест'}</button>
    </div>`;
}

function enableAnswerBtn() {
  const q = currentTest.questionsList[currentQuestionIndex];
  const has = q.type==='closed' ? !!document.querySelector('input[name="answer"]:checked') : document.getElementById('openAnswer').value.trim().length > 0;
  document.getElementById('btnAnswer').disabled = !has;
}

function submitAnswer() {
  const q = currentTest.questionsList[currentQuestionIndex];
  const fb = document.getElementById('feedback'), btnA = document.getElementById('btnAnswer'), btnN = document.getElementById('btnNext');
  btnA.disabled = true; btnA.style.display = 'none';
  let isCorrect = false, isPartial = false, userAns = '', fbText = '';

  if (q.type === 'closed') {
    const sel = document.querySelector('input[name="answer"]:checked');
    if (!sel) return;
    const val = parseInt(sel.value); userAns = q.options[val];
    if (val === q.correct) { isCorrect = true; fbText = `<strong>✅ Верно!</strong><br>${q.explanation}`; }
    else fbText = `<strong>❌ Неверно.</strong> Правильный: ${q.options[q.correct]}<br>${q.explanation}`;
    document.querySelectorAll('.option-label').forEach((el, i) => {
      el.style.pointerEvents = 'none';
      if (i === q.correct) { el.style.borderColor = '#27ae60'; el.style.background = '#e8f8ee'; }
      if (i === val && val !== q.correct) { el.style.borderColor = '#e74c3c'; el.style.background = '#fdf0ee'; }
    });
  } else {
    const text = document.getElementById('openAnswer').value.trim(); userAns = text;
    const matched = q.keywords.filter(kw => text.toLowerCase().includes(kw.toLowerCase()));
    if (matched.length === q.keywords.length) { isCorrect = true; fbText = `<strong>✅ Верно!</strong><br>${q.explanation}`; }
    else if (matched.length > 0) { isPartial = true; fbText = `<strong>⚠️ Частично верно.</strong> Ключевые слова: ${matched.join(', ')}. Эталон: ${q.modelAnswer}`; }
    else fbText = `<strong>❌ Неверно.</strong> Эталон: ${q.modelAnswer}`;
    document.getElementById('openAnswer').disabled = true;
  }

  testResults.push({ question: q, userAnswer: userAns, correct: isCorrect, partial: isPartial, score: isCorrect?1:(isPartial?0.5:0), feedback: fbText });
  fb.className = 'feedback visible ' + (isCorrect?'feedback-correct':(isPartial?'feedback-partial':'feedback-wrong'));
  fb.innerHTML = fbText; btnN.classList.add('visible');
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= currentTest.totalQuestions) {
    showResults();
  } else {
    renderQuestion();
  }
}

function exitTest() {
  if (confirm('Вы действительно хотите выйти из теста? Прогресс будет потерян.')) {
    goToStudentDash();
  }
}

// РЕЗУЛЬТАТЫ
function showLinearResults() {
  const score = 72, sc = getScoreColor(score);
  const total = linearResults.length;
  const cc = linearResults.filter(r => r.correct).length;
  const wc = total - cc;

  document.getElementById('resultsContent').innerHTML = `
    <div class="results-header">
      <div class="results-score" style="color:${sc}">${score}%</div>
      <div class="results-label">Линейные уравнения · ${cc} верных, ${wc} неверных · 8 вопросов</div>
      <div class="results-bar"><div class="results-bar-fill" style="width:0%;background:${sc};"></div></div>
    </div>
    <div class="section-title">📋 Разбор ответов</div>
    ${linearResults.map((r,i) => `
      <div class="review-item">
        <h4><span class="question-type-badge ${r.type==='closed'?'badge-closed':'badge-open'}" style="margin-right:8px;">${r.type==='closed'?'Закрытый':'Открытый'}</span> ${i+1}. ${r.text}</h4>
        <div class="review-answer"><span>Ваш ответ:</span> ${r.userAnswer}</div>
        <div class="review-answer"><span>Правильный:</span> ${r.correctAnswer}</div>
        <div class="feedback visible ${r.correct?'feedback-correct':'feedback-wrong'}">${r.feedback}</div>
      </div>
    `).join('')}
    <button class="btn-primary" style="margin-top:24px;" onclick="goToStudentDash()">🏠 На главную</button>
  `;
  showScreen('screenResults');
  setTimeout(() => { const f = document.querySelector('.results-bar-fill'); if (f) f.style.width = score+'%'; }, 100);
}

function showResults() {
  const total = testResults.length;
  const cc = testResults.filter(r => r.correct).length, pc = testResults.filter(r => r.partial).length, wc = total - cc - pc;
  const score = Math.round((cc + pc*0.5)/total*100), sc = getScoreColor(score);
  const c = document.getElementById('resultsContent');
  c.innerHTML = `
    <div class="results-header">
      <div class="results-score" style="color:${sc}">${score}%</div>
      <div class="results-label">${currentTest.title} · ${cc} верных, ${pc} частично, ${wc} неверных</div>
      <div class="results-bar"><div class="results-bar-fill" style="width:0%;background:${sc};"></div></div>
    </div>
    <div class="section-title">📋 Разбор ответов</div>
    ${testResults.map((r,i) => `
      <div class="review-item">
        <h4>${i+1}. ${r.question.text}</h4>
        <div class="review-answer"><span>Ваш ответ:</span> ${r.userAnswer}</div>
        <div class="review-answer"><span>Правильный:</span> ${r.question.type==='closed'?r.question.options[r.question.correct]:r.question.modelAnswer}</div>
        <div class="feedback visible ${r.correct?'feedback-correct':(r.partial?'feedback-partial':'feedback-wrong')}">${r.feedback}</div>
      </div>`).join('')}
    <button class="btn-primary" style="margin-top:24px;" onclick="goToStudentDash()">🏠 На главную</button>`;
  showScreen('screenResults');
  setTimeout(() => { const f = c.querySelector('.results-bar-fill'); if (f) f.style.width = score+'%'; }, 100);
}

function goToStudentDash() { renderStudentDash(); showScreen('screenStudentDash'); }

// ПЕРЕКЛЮЧЕНИЕ ТЁМНОЙ ТЕМЫ
const btnTheme = document.getElementById('btnTheme');
if (btnTheme) {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    btnTheme.textContent = '☀️';
  } else {
    btnTheme.textContent = '🌓';
  }
  btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    btnTheme.textContent = isDark ? '☀️' : '🌓';
  });
}

// ЗАПУСК ПРИЛОЖЕНИЯ
showScreen('screenLogin');