document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Menampilkan alert dengan informasi yang diisi
    alert(`Terima kasih, ${name}! Pesan Anda telah diterima.\nEmail: ${email}\nPesan: ${message}`);
    
    // Reset form setelah pengiriman
    this.reset();
});

// Menambahkan interaksi scroll untuk menampilkan section
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});