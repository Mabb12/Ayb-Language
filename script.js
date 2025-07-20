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
    function addToBuilder(element) {
        const word = element.textContent;
        const output = document.getElementById('word-output-1');
        
        if (output.textContent === "Перетащите сюда части слова") {
            output.textContent = word;
        } else {
            output.textContent += word;
        }
    }
    
    function checkWord(outputId, correctAnswer) {
        const userAnswer = document.getElementById(outputId).textContent;
        const feedback = document.getElementById('feedback-1');
        
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Правильно! " + correctAnswer + " - " + getTranslation(correctAnswer);
            feedback.className = "feedback correct";
        } else {
            feedback.textContent = "Неправильно. Попробуйте еще раз. Подсказка: " + getHint(correctAnswer);
            feedback.className = "feedback incorrect";
        }
    }
    
    // Викторина
    function checkQuiz(element, isCorrect) {
        const feedback = document.getElementById('feedback-2');
        
        if (isCorrect) {
            feedback.textContent = "Верно! гуд су - хороший человек";
            feedback.className = "feedback correct";
            element.style.backgroundColor = "rgba(138, 155, 104, 0.2)";
            element.style.borderColor = "var(--correct)";
        } else {
            feedback.textContent = "Неверно. Правильный ответ: гуд су";
            feedback.className = "feedback incorrect";
            element.style.backgroundColor = "rgba(180, 107, 107, 0.2)";
            element.style.borderColor = "var(--incorrect)";
        }
    }
    
    // Флеш-карты
    function flipCard(card) {
        card.classList.toggle('flipped');
    }
    
    function nextCard() {
        // Реализация смены карточек
        alert("Следующая карточка будет реализована в полной версии");
    }
    
    // Сопоставление
    let draggedItem = null;
    
    function dragStart(e) {
        draggedItem = e.target;
        e.dataTransfer.setData('text/plain', e.target.textContent);
    }
    
    function dragOver(e) {
        e.preventDefault();
    }
    
    function drop(e) {
        e.preventDefault();
        if (draggedItem) {
            e.target.textContent = draggedItem.textContent;
        }
    }
    
    function checkMatching() {
        // Проверка правильности сопоставления
        alert("Проверка будет реализована в полной версии");
    }
    
    // Заполнение пропусков
    function fillBlank(blankId, element) {
        document.getElementById(blankId).textContent = element.textContent;
    }
    
    function checkBlank(blankId, correctAnswer) {
        const userAnswer = document.getElementById(blankId).textContent;
        const feedback = document.getElementById('feedback-6');
        
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Правильно!";
            feedback.className = "feedback correct";
        } else {
            feedback.textContent = "Неправильно. Попробуйте еще раз.";
            feedback.className = "feedback incorrect";
        }
    }
    
    // Вспомогательные функции
    function getTranslation(word) {
        const translations = {
            "дугёпок": "плохая вода",
            "гуд су": "хороший человек",
            "фудёмов": "ем еду"
        };
        return translations[word] || "перевод не найден";
    }
    
    function getHint(word) {
        const hints = {
            "дугёпок": "начните с 'дуг'",
            "гуд су": "используйте пробел между словами",
            "фудёмов": "окончание 'ёмов' означает действие"
        };
        return hints[word] || "попробуйте еще раз";
    }
