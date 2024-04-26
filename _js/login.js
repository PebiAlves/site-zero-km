document.addEventListener('DOMContentLoaded', function() {
    // Coloque todo o seu código JavaScript aqui

    class Login {
        constructor() {
            this.cristianoL = "cristiano";
            this.cristianoS = 110521;
        }

        EfetuarLogin(nome, senha) {
            if (nome === this.cristianoL && senha == this.cristianoS) {
                window.location.href = "https://zero-km-s10z.glide.page";
            } else {
                window.location.href = "https://zerokmtransportes.com/";
            }
        }
    }

    // Captura elementos HTML
    const nomeInput = document.querySelector('input[type="text"]');
    const senhaInput = document.querySelector('input[type="password"]');
    const botaoEnviar = document.querySelector('button');

    // Cria instância da classe Login
    const login = new Login();

    // Adiciona evento de clique ao botão
    botaoEnviar.addEventListener('click', function() {
        const nome = nomeInput.value;
        const senha = senhaInput.value;

        // Chama o método EfetuarLogin da classe Login com os dados capturados
        login.EfetuarLogin(nome, senha);
    });
});
