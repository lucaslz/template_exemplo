    document.addEventListener('DOMContentLoaded', function () {
      const toggleBtn = document.getElementById('toggle-sidebar');
      const desktopSidebar = document.getElementById('sidebar-desktop');
      const mobileOffcanvas = new bootstrap.Offcanvas(document.getElementById('sidebar-mobile'));

      function isMobile() {
        return window.innerWidth < 768;
      }

      toggleBtn.addEventListener('click', function () {
        if (isMobile()) {
          // Em mobile, abre o offcanvas
          mobileOffcanvas.toggle();
        } else {
          // Em desktop, toggle da sidebar tradicional
          desktopSidebar.classList.toggle('collapsed');
        }
      });

      // Atualiza o comportamento quando a janela é redimensionada
      window.addEventListener('resize', function () {
        // Fecha o offcanvas se a tela ficar grande
        if (!isMobile() && mobileOffcanvas._isShown) {
          mobileOffcanvas.hide();
        }
      });
    });