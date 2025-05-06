function mostrarSeccion(categoria) {
    const secciones = document.querySelectorAll('.content');
    secciones.forEach(seccion => {
      seccion.classList.remove('visible');
    });
  
    document.getElementById(categoria).classList.add('visible');
  }