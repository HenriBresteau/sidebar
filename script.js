const toggleButton = document.getElementById('toggle-button');
const sideBar = document.getElementById('side-bar');

toggleButton.addEventListener('click', show);

function show() {
    sideBar.classList.toggle('active');
}

// REMOVE SIDEBAR
const content = document.getElementById('content')

content.addEventListener('click', () => {
    sideBar.classList.remove('active');
})