document.addEventListener('DOMContentLoaded', () => {
    const btnTheme = document.getElementById('btnTheme');
    
    // O atributo data-theme está no elemento <html> ou <body> no seu CSS
    const root = document.documentElement; 

    // 1. Carregar a preferência guardada ao iniciar o sistema
    const temaGuardado = localStorage.getItem('vacina_tema_preferencia');
    
    if (temaGuardado === 'dark') {
        root.setAttribute('data-theme', 'dark');
        if (btnTheme) btnTheme.innerText = '🌙'; // Ícone da lua
    } else {
        root.removeAttribute('data-theme');
        if (btnTheme) btnTheme.innerText = '☀️'; // Ícone do sol
    }

    // 2. Lógica para alternar o tema ao clicar no botão
    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            const isDark = root.getAttribute('data-theme') === 'dark';
            
            if (isDark) {
                // Muda para Claro
                root.removeAttribute('data-theme');
                btnTheme.innerText = '☀️';
                localStorage.setItem('vacina_tema_preferencia', 'light');
            } else {
                // Muda para Escuro
                root.setAttribute('data-theme', 'dark');
                btnTheme.innerText = '🌙';
                localStorage.setItem('vacina_tema_preferencia', 'dark');
            }
        });
    }
});