// Fıkra Verileri
const jokes = [
    "Bir gün Temel'le Dursun pazara gitmiş. Temel birden yere düşüp bayılmış. Dursun: 'Temel, Temel, uyan! Yavaş ol, bayılma.'",
    "Nasıl oluyor da bu kadar hızlı koşuyorsun? Çok çalışarak! Peki, her gün çalışıyor musun? Hayır, her gün koşuyorum!",
    "Bir gün Nasrettin Hoca pazara gitmiş. Hoca pazarda birine: 'Bana bir kilo bal al!' demiş. Adam: 'Kilo mu? Hoca bal al, kilo almaz!'",
    "Temel bir gün bir inşaatta çalışıyormuş. Şantiye şefi Temel'e: 'Bu taşları ne zaman taşıyacaksın?' demiş. Temel: 'Bunlar taş, ben temele çalışıyorum!'",
    "Bir gün Temel ile Dursun yürüyüş yapıyormuş. Temel birden yere düşüp bayılmış. Dursun hemen cep telefonuyla acil servisi aramış. 'Temel bayıldı!' demiş. 'Ne yapmalıyım?' Duyduğu yanıt şu olmuş: 'Sakin olun, önce cebindeki parayı çıkarın!'",
    "Nasrettin Hoca bir gün pazara gitmiş. Pazarcı Hoca'ya: 'Hoca, elma alacak mısınız?' demiş. Hoca: 'Hayır, ben sadece bakıyorum.' Pazarcı: 'O zaman bakmayın, ben de satıyorum!'",
    "Bir gün Temel Dursun'a: 'Benim araba çok hızlı gidiyor.' Dursun: 'Hangi araba?' Temel: 'Bunu hala anlamadın mı? Benim arabam!'",
    "Nasrettin Hoca bir gün pazara giderken her şeyini kaybetmiş. Hoca geri dönüp evine gidip gittiği yolda ne var ne yok diye aramaya başlamış. Bir komşusu sorar: 'Ne arıyorsun hocam?' Hoca: 'Daha önce nerede bulduğumu bilmiyorum, ama şimdi bulamıyorum!'",
    "Bir gün Temel'e: 'Eğer elmas bulursan ne yaparsın?' diye sormuşlar. Temel: 'Elmas mı? Hemen satıp, parayı taksitle öderim!'",
    "Dursun bir gün Temel'e: 'Seninle karşılaşmamak için ne yapmalıyım?' demiş. Temel: 'Sadece sokakta yürüme!'"
];

// Özlü sözler
let quotes = [
    "Ahmet Ağa, her zaman doğruyu söyler.",
    "Ahmet Ağa, insanı en iyi kendisi tanır.",
    "Ahmet Ağa, sabır her zaman zafer getirir."
];

let currentQuoteIndex = 0;
let currentJokeIndex = 0;
let savedNotes = [];

// Menü açma/kapama fonksiyonu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.left = menu.style.left === '0px' ? '-200px' : '0px';
}

// Özlü sözleri değiştirme fonksiyonu
function changeQuote() {
    const quoteText = quotes[currentQuoteIndex];
    document.getElementById('quote-text').innerText = quoteText;
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; // Sözleri sırayla göster
}

// Fıkra bölümünü göster
function showFunnies() {
    document.getElementById('funnies-section').style.display = 'block';
    document.getElementById('notes-section').style.display = 'none';
    showJoke();
}

// Fıkra gösterme fonksiyonu
function showJoke() {
    const jokeText = jokes[currentJokeIndex];
    document.getElementById('joke-text').innerText = jokeText;
    currentJokeIndex = (currentJokeIndex + 1) % jokes.length; // Bir sonraki fıkra
}

// Bir sonraki fıkra
function nextJoke() {
    showJoke();
}

// Notlar bölümünü göster
function showNotes() {
    document.getElementById('funnies-section').style.display = 'none';
    document.getElementById('notes-section').style.display = 'block';
    displaySavedNotes();
}

// Notu kaydetme fonksiyonu
function saveNote() {
    const noteInput = document.getElementById('note-input');
    const note = noteInput.value.trim();

    if (note) {
        savedNotes.push(note);
        noteInput.value = ''; // Not kutusunu temizle
        displaySavedNotes();
    }
}

// Kaydedilen notları göster
function displaySavedNotes() {
    const notesContainer = document.getElementById('saved-notes');
    notesContainer.innerHTML = ''; // Önceki notları temizle

    savedNotes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.innerText = note;
        notesContainer.appendChild(noteElement);
    });
}

// Havai fişek animasyonu
function launchFireworks(x, y) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.top = `${y}px`;
    firework.style.left = `${x}px`;
    document.getElementById('fireworks-container').appendChild(firework);

    // Patlama animasyonu
    setTimeout(() => {
        firework.remove();
    }, 1000); // 1 saniye sonra patlama animasyonunu kaldır
}

// Sayfa yüklendikten sonra özlü sözleri değiştirmeye başla
setInterval(changeQuote, 5000); // Her 5 saniyede bir özlü söz değişir
