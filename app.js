// Navegación SPA simple
function navigate(screenId) {
    document.querySelectorAll('.screen').forEach(sec => sec.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}
// Por defecto mostrar login
navigate('login');

// Opcional: puedes agregar más lógica para simular interacciones si lo deseas
