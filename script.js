document.addEventListener('DOMContentLoaded', () => {
    const falButton = document.getElementById('falButton');
    const falResult = document.getElementById('falResult');
    let countdownTimer;
    let countdownValue;

    const falHafez = [
        "سخن عشق تو بی‌آنکه برآید به زبانم",
        "در ازل پرتو حسنت ز تجلی دم زد",
        "دوست می‌دارم من این نالیدن دلسوز را",
        "به کوی عشق منه بی‌دلیل راه قدم",
        "ای دل غلام شاه جهان باش و شاه باش"
    ];

    function startCountdown() {
        countdownValue = 3; // شروع شمارش از 3
        falResult.textContent = `شمارش معکوس: ${countdownValue}`;

        countdownTimer = setInterval(() => {
            countdownValue--;
            falResult.textContent = `شمارش معکوس: ${countdownValue}`;

            if (countdownValue === 0) {
                clearInterval(countdownTimer);
                const randomFal = falHafez[Math.floor(Math.random() * falHafez.length)];
                falResult.textContent = randomFal;
            }
        }, 1000); // هر یک ثانیه شمارش معکوس کاهش می‌یابد
    }

    falButton.addEventListener('click', startCountdown);
});
