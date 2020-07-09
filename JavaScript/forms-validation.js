(function () {
    window.addEventListener('load', function () {
        var formLogin = document.getElementsByClassName('login');

        var validation = Array.prototype.filter.call(formLogin, function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();

                if (form.checkValidity()) {
                    event.stopPropagation();
                    window.location.href = 'file:///C:/Users/adria/Documents/Projetos/Trabalhos%20SENAI/Trabalhos%20de%20WebDesign/Entega%20final/Projeto/HTML/main-screen.html';
                };

                form.classList.add('was-validated');
            }, false)
        });

        var formLogin = document.getElementsByClassName('forgot-password');

        var validation = Array.prototype.filter.call(formLogin, function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();

                if (form.checkValidity()) {
                    event.stopPropagation();
                    window.location.href = 'file:///C:/Users/adria/Documents/Projetos/Trabalhos%20SENAI/Trabalhos%20de%20WebDesign/Entega%20final/Projeto/HTML/login.html';
                };

                form.classList.add('was-validated');
            }, false)
        });

        var formRegister = document.getElementsByClassName('register');

        var validation = Array.prototype.filter.call(formRegister, function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();

                if (form.checkValidity()) {
                    event.stopPropagation();
                    window.location.href = 'file:///C:/Users/adria/Documents/Projetos/Trabalhos%20SENAI/Trabalhos%20de%20WebDesign/Entega%20final/Projeto/HTML/login.html';
                };

                form.classList.add('was-validated');
            }, false)
        });
    }, false);
})
    ();