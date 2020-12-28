const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        randomSelect();
    }
});

function createTags(input) {
    // split on comma, remove filter empty strings, trim the rest
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsEl.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
};

function randomSelect() {
    const times = 30;
    
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        randomTag.classList.add('highlight');
        setTimeout(() => {
            randomTag.classList.remove('highlight');
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            pickRandomTag().classList.add('highlight');
        }, 100);
    }, times * 100);
};

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
};