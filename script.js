document.addEventListener('DOMContentLoaded', () => {
    const falButton = document.getElementById('falButton');
    const falResult = document.getElementById('falResult');
    let timer;

    const falHafez = [
        "سخن عشق تو بی‌آنکه برآید به زبانم",
        "در ازل پرتو حسنت ز تجلی دم زد",
        "دوست می‌دارم من این نالیدن دلسوز را",
        "به کوی عشق منه بی‌دلیل راه قدم",
        "ای دل غلام شاه جهان باش و شاه باش"
    ];

    function startTimer() {
        timer = setTimeout(() => {
            const randomFal = falHafez[Math.floor(Math.random() * falHafez.length)];
            falResult.textContent = randomFal;
        }, 5000);
    }

    function stopTimer() {
        clearTimeout(timer);
    }

    falButton.addEventListener('mousedown', startTimer);
    falButton.addEventListener('mouseup', stopTimer);
    falButton.addEventListener('mouseleave', stopTimer);

    // رویدادهای لمسی برای سازگاری با موبایل
    falButton.addEventListener('touchstart', startTimer);
    falButton.addEventListener('touchend', stopTimer);
    falButton.addEventListener('touchcancel', stopTimer);
});
