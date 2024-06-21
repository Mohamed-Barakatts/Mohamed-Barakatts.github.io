document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = this.getAttribute('href');

            if (target.startsWith('#')) {
                e.preventDefault();
                document.querySelector(target).scrollIntoView({
                    behavior: 'smooth'
                });
            }

            const mainLink = this.closest('li.dropdown')?.querySelector('a.dropbtn');

            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
                link.classList.remove('active-main');
            });

            if (mainLink) {
                mainLink.classList.add('active-main');
            }
            this.classList.add('active');
        });
    });

    var modalBtns = document.querySelectorAll('.modal-btn');
    modalBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var modal = document.getElementById(btn.getAttribute('data-modal'));
            modal.style.display = 'block';
        });
    });

    var closeBtns = document.querySelectorAll('.close-btn');
    closeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var modal = btn.closest('.modal');
            modal.style.display = 'none';
        });
    });

    window.onclick = function(event) {
        var modals = document.querySelectorAll('.modal');
        modals.forEach(function(modal) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    };

    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
            const mainLink = link.closest('li.dropdown')?.querySelector('a.dropbtn');
            if (mainLink) {
                mainLink.classList.add('active-main');
            }
        } else {
            link.classList.remove('active');
        }
    });

    const sections = document.querySelectorAll('main section');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach(section => {
            if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                section.classList.add('active-section');
                const activeLink = document.querySelector(`nav ul li a[href*=${section.id}]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                    const mainLink = activeLink.closest('li.dropdown')?.querySelector('a.dropbtn');
                    if (mainLink) {
                        mainLink.classList.add('active-main');
                    }
                }
            } else {
                section.classList.remove('active-section');
                const activeLink = document.querySelector(`nav ul li a[href*=${section.id}]`);
                if (activeLink) {
                    activeLink.classList.remove('active');
                }
            }
        });
    });
});
