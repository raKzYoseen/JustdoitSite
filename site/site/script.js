document.addEventListener('DOMContentLoaded', function() {
  // Inicializar o AOS
  AOS.init();

  // Obter o botão de deslizar
  var scrollButton = document.getElementById('desliza');

  // Adicionar evento de clique ao botão
  scrollButton.addEventListener('click', function() {
    // Calcular a posição da próxima seção
    var currentSection = document.querySelector('section[data-aos="fade-up"]');
    var nextSection = currentSection.nextElementSibling;
    var nextSectionOffset = nextSection.offsetTop;

    // Executar a animação de rolagem suave com velocidade ajustada
    smoothScrollTo(nextSectionOffset, 1000);
  });

  // Função para rolagem suave com velocidade ajustada
  function smoothScrollTo(targetPosition, duration) {
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }
      var timeElapsed = currentTime - startTime;
      var easing = Math.sin(timeElapsed / duration * (Math.PI / 2));
      var newPosition = startPosition + distance * easing;

      window.scrollTo(0, newPosition);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }
});