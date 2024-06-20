document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault();  // Evita que o formulário seja enviado imediatamente
    const loginPage = document.getElementById('login-page'); // Alterado para pegar o elemento correto
    const videoTransition = document.getElementById('video-transition');
    const video = document.getElementById('transition-video');

    // Esconde a página de login e mostra o vídeo de transição
    loginPage.style.display = 'none'; // Oculta a página de login
    videoTransition.classList.remove('hidden'); // Mostra o vídeo de transição

    // Reproduz o vídeo
    video.play();

    // Quando o vídeo terminar, redireciona para a próxima página
    video.addEventListener('ended', function() {
        window.location.href = '../Pages/01-home.html'; // Altere para o nome do arquivo da próxima página
    });
});
