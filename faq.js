
const article = document.querySelectorAll('.article');


article.forEach(question => {
    const button = question.querySelector('.question-btn');
    const text = question.querySelectorAll('.question-text');
    button.addEventListener('click', () => {
        text.forEach(element => {
            element.classList.toggle('toggle');  
        });     
}); })