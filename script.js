function updateCountdown() {
    const newYear = new Date('January 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeRemaining = newYear - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerText =
            `${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
    } else {
        document.getElementById('countdown').innerText = '🎆 สวัสดีปีใหม่ 2025! 🎆';
        playYouTubeAudio();
        clearInterval(interval);
    }
}


function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // ความเร็วการตก
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // ขนาด
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000); // ลบหลังจากหิมะตกลงพื้น
}

setInterval(createSnowflake, 100);
const interval = setInterval(updateCountdown, 1000);
updateCountdown();
