const button = document.getElementById('dropdownBtn');
const list = document.getElementById('dropdownList');
const listChoices = document.querySelectorAll('li');

button.addEventListener('click', () => {
    button.classList.toggle('expand');

    if (button.classList.contains('expand')) {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
});

listChoices.forEach((listC, index) => {
    listC.addEventListener('click', () => {
        button.textContent = listC.textContent;
        list.style.display = 'none';
        button.classList.remove('expand');

        listChoices.forEach((other, otherIndex) => {
            if (otherIndex !== index) {
                other.classList.remove('check');
            } else {
                other.classList.add('check');
            }
        });
    });
});
