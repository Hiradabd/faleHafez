document.addEventListener('DOMContentLoaded', () => {
    const falButton = document.getElementById('falButton');
    const falResult = document.getElementById('falResult');
    let timer;
    let falHafez;

    
    fetch('falHafez.json')
        .then(response => response.json())
        .then(data => {
            falHafez = data.falHafez;
        })
        .catch(error => console.error('Error loading JSON:', error));

    falButton.addEventListener('mousedown', () => {
        timer = setTimeout(() => {
            const randomFal = falHafez[Math.floor(Math.random() * falHafez.length)];
            falResult.textContent = randomFal;
        }, 5000);
    });

    falButton.addEventListener('mouseup', () => {
        clearTimeout(timer);
    });

    falButton.addEventListener('mouseleave', () => {
        clearTimeout(timer);
    });
});
