document.addEventListener('DOMContentLoaded', () => {
    const falButton = document.getElementById('falButton');
    const falResult = document.getElementById('falResult');
    let countdownTimer;
    let countdownValue;

    const falHafez = [
            "غزل شماره 1: الا یا ایها الساقی ادر کاسا و ناولها",
            "غزل شماره 2: صلاح کار کجا و من خراب کجا",
            "غزل شماره 3: اگر آن ترک شیرازی به دست آرد دل ما را",
            "غزل شماره 4: صبا به لطف بگو آن غزال رعنا را",
            "غزل شماره 5: دل می‌رود ز دستم صاحب دلان خدا را",
            "غزل شماره 6: به ملازمان سلطان که رساند این دعا را",
            "غزل شماره 7: صوفی بیا که آینه صافیست جام را",
            "غزل شماره 8: ساقیا برخیز و درده جام را",
            "غزل شماره 9: رونق عهد شباب است دگر بستان را",

    ];

    function startCountdown() {
        countdownValue = 3; // شروع شمارش از 3
        falResult.textContent = `  ${countdownValue}`;

        countdownTimer = setInterval(() => {
            countdownValue--;
            falResult.textContent = `  ${countdownValue}`;

            if (countdownValue === 0) {
                clearInterval(countdownTimer);
                const randomFal = falHafez[Math.floor(Math.random() * falHafez.length)];
                falResult.textContent = randomFal;
            }
        }, 1000); // هر یک ثانیه شمارش معکوس کاهش می‌یابد
    }

    falButton.addEventListener('click', startCountdown);
});
