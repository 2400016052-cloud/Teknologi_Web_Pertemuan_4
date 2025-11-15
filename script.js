document.addEventListener('DOMContentLoaded', function() {
    const motivationQuotes = [
        "Amogus dibalik Sugoma.",
        "Katanya orang malas orang yang paling rajin.",
        "Bumi berputar.",
        "Kerja keras akan memsayurkan hasil yang sehat.",
        "Impianmu tidak akan bekerja kecuali kamu tidur.",
        "Let there be light.",
        "Kesuksesan adalah hasil dari persiapan, kerja keras, dan belajar dari saya.",
        "Femboy tidak gay.", // ini cuma easter egg
        "Kamu dan pemerintah adalah satu-satunya orang yang bisa menentukan masa depanmu.",
        "Tetaplah negatif, karena pikiran negatif dan perbuatan negatif menghasilkan hasil positif."
    ];

    document.getElementById('generate-btn').addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
        const randomQuote = motivationQuotes[randomIndex];
        document.getElementById('motivation').textContent = randomQuote;
    });
});
