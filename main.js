
/*
Descricao: Aula 13 - Elementos Avancados de Formulario
nome_arquivo: main.js
nome_exercicio: Aula 13 - Elementos Avancados de Formulario
nome_aluno: Lucas Samoel Bento de Farias
email_aluno: lucas.farias5@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/

const formulario = document.getElementById("formCadastro");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;
        const cidade = document.getElementById("cidade").value;
        const sexo = document.querySelector('input[name="sexo"]:checked');
        const termos = document.getElementById("termos").checked;
        const descricao = document.getElementById("descricao").value.trim();

        const interesses = document.querySelectorAll(
            'input[name="interesses"]:checked'
        );

        if (nome === "" || email === "") {
            alert("Preencha seu nome e e-mail!");
            return;
        }

        if (senha.length < 6) {
            alert("A senha precisa ter pelo menos 6 caracteres!");
            return;
        }

        if (senha !== confirmarSenha) {
            alert("As senhas não são iguais!");
            return;
        }

        if (!sexo) {
            alert("Selecione uma opção de sexo!");
            return;
        }

        if (cidade === "") {
            alert("Selecione sua cidade!");
            return;
        }

        if (interesses.length === 0) {
            alert("Selecione pelo menos um interesse!");
            return;
        }

        if (!termos) {
            alert("Você precisa aceitar os termos!");
            return;
        }

        const perfil = {
            nome: nome,
            email: email,
            cidade: cidade,
            sexo: sexo.value,
            interesses: Array.from(interesses).map(function(item) {
                return item.value;
            }),
            descricao: descricao
        };

        try {
            sessionStorage.setItem("perfilNortShop", JSON.stringify(perfil));

            window.location.href = "perfil.html";
        } catch (erro) {
            alert("Não foi possível salvar os dados do perfil.");
        }
    });
}

const formularioLogin = document.getElementById("formLogin");

if (formularioLogin) {
    formularioLogin.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("emailLogin").value.trim();
        const senha = document.getElementById("senhaLogin").value;

        if (email === "" || senha === "") {
            alert("Preencha o e-mail e a senha!");
            return;
        }

        alert("Esta tela é apenas uma demonstração de login.");
    });
}

const linkEsqueciSenha = document.getElementById("esqueciSenha");

if (linkEsqueciSenha) {
    linkEsqueciSenha.addEventListener("click", function(event) {
        event.preventDefault();
        alert("A recuperação de senha estará disponível futuramente.");
    });
}