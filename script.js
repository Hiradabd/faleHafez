document.addEventListener('DOMContentLoaded', () => {
    const falButton = document.getElementById('falButton');
    const falResult = document.getElementById('falResult');
    let timer;
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

    function startTimer() {
        timer = setTimeout(() => {
            startCountdown();
        }, 0); // بلافاصله پس از فشردن دکمه شمارش شروع می‌شود
    }

    function stopTimer() {
        clearTimeout(timer);
        clearInterval(countdownTimer);
        falResult.textContent = "";
    }

    falButton.addEventListener('mousedown', startTimer);
    falButton.addEventListener('mouseup', stopTimer);
    falButton.addEventListener('mouseleave', stopTimer);

    // رویدادهای لمسی برای سازگاری با موبایل
    falButton.addEventListener('touchstart', startTimer);
    falButton.addEventListener('touchend', stopTimer);
    falButton.addEventListener('touchcancel', stopTimer);
});
