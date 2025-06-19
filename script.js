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