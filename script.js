// form donasi
const formDonasi = document.querySelector('form');

if (formDonasi) {
    formDonasi.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert('Terima kasih! Data donasi buku Anda telah berhasil dikirim.');
        formDonasi.reset(); 
    });
}


// klaim buku
const tombolKlaim = document.querySelectorAll('.btn-aktif');

tombolKlaim.forEach(function(tombol) {
    tombol.addEventListener('click', function() {
        alert('Buku berhasil diklaim! Instruksi pengambilan telah dikirim ke email Anda.');
        
        this.textContent = 'Telah Diklaim';
        this.classList.remove('btn-aktif');
        this.classList.add('btn-nonaktif');
        this.style.cursor = 'not-allowed'; 
        
        const kartu = this.parentElement;
        const badge = kartu.querySelector('.badge');
        
        if (badge && badge.classList.contains('tersedia')) {
            badge.textContent = 'Habis';
            badge.classList.remove('tersedia');
            badge.classList.add('habis');
        }
    });
});