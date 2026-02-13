document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi Ikon Lucide
    lucide.createIcons();

    // 2. Interaksi Foto Profil 3D
    const profileCard = document.getElementById('profileCard');
    
    if (profileCard) {
        profileCard.addEventListener('mousemove', (e) => {
            const rect = profileCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Sensitivitas rotasi (semakin besar pembagi, semakin halus)
            const rotateX = (y - centerY) / 8;
            const rotateY = (centerX - x) / 8;
            
            profileCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
        });

        profileCard.addEventListener('mouseleave', () => {
            profileCard.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    }

    // 3. Scroll Spy Navbar
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = "";
        const scrollPosition = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Menentukan section mana yang sedang dilihat
            if (scrollPosition >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});