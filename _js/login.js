document.addEventListener('DOMContentLoaded', function() {
    // Coloque todo o seu código JavaScript aqui

    class Login {
        constructor() {
            this.usuarios = {
                "cristiano": 110521,
                "lorena": 100118,
                "ana julia": 151299,
                "cleber": 10091512
            };
        }
    
        EfetuarLogin(nome, senha) {
            if (nome in this.usuarios && senha == this.usuarios[nome]) {
                window.location.href = "https://zerokmtransportes.glide.page";
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
