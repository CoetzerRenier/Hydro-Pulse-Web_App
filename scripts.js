window.addEventListener('load', function () {
    let textWrapper = document.querySelector('#splash-title');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    //Logo animation
    anime({
        targets: '#plant-logo',
        scale: [0.5, 1],
        opacity: [0, 1],
        easing: 'easeOutElastic(1, .8)',
        duration: 1500
    });

    //Title (character-by-character) animation
    anime({
        targets: '#splash-title .letter',
        opacity: [0, 1],
        translateY: [-50, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: anime.stagger(100)
    });

    setTimeout(function () {
        document.querySelector('.splash-screen').classList.add('fade-out');

        setTimeout(function () {
            document.querySelector('.splash-screen').style.display = 'none';
            document.querySelector('.main-container').style.display = 'grid';
        }, 500);
    }, 2500);
});

function toggleDropdown() {
    const dropdown = document.getElementById('dataDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

//Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#features button')) {
        const dropdown = document.getElementById('dataDropdown');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    }
};
