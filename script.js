// С js файлом помогал deepseek

function openCategory(categoryId) {
    // Скрыть все категории
    document.querySelectorAll('.category-content').forEach(content => {
        content.style.display = 'none';
    });
    
    // Убрать активность у всех кнопок
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Показать выбранную категорию
    document.getElementById(categoryId).style.display = 'block';
    
    // Активировать кнопку
    event.currentTarget.classList.add('active');
}

// Плавная прокрутка для навигации
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Конструктор слов
function addToBuilder(part) {
    const output = document.getElementById('word-output');
    if (output.textContent.includes("Перетащите")) {
        output.textContent = part;
    } else {
        output.textContent += ' ' + part;
    }
}

function checkTranslation() {
    const userInput = document.getElementById('word-output').textContent;
    const feedback = document.getElementById('builder-feedback');
    
    // Простая проверка (можно расширить)
    if (userInput.includes('нотёгудёпок')) {
        feedback.textContent = 'Правильно! Это "алкоголь" (не-хорошая-вода)';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Попробуйте еще раз. Подсказка: начните с "нотёгуд"';
        feedback.style.color = 'red';
    }
}

// Викторина
function checkQuiz(element, isCorrect) {
    const options = element.parentElement.querySelectorAll('.quiz-option');
    
    options.forEach(opt => {
        opt.style.backgroundColor = '';
        opt.style.borderColor = '';
    });
    
    if (isCorrect) {
        element.style.backgroundColor = '#d4edda';
        element.style.borderColor = '#c3e6cb';
    } else {
        element.style.backgroundColor = '#f8d7da';
        element.style.borderColor = '#f5c6cb';
        // Показываем правильный ответ
        options.forEach(opt => {
            if (opt.getAttribute('data-correct') === 'true') {
                opt.style.backgroundColor = '#d4edda';
                opt.style.borderColor = '#c3e6cb';
            }
        });
    }
}

// Система вкладок (если еще нет)
function openCategory(categoryName) {
    const contents = document.querySelectorAll('.category-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(categoryName).style.display = 'block';
    event.currentTarget.classList.add('active');
}
