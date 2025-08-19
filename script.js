document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const envelopeContainer = document.querySelector('.envelope-container');
    const conviteContainer = document.querySelector('.convite-container');
    
    // Abrir envelope ao clicar
    envelopeContainer.addEventListener('click', function() {
        envelope.classList.add('open');
        
        // Esconder envelope e mostrar convite após animação
        setTimeout(() => {
            envelopeContainer.style.opacity = '0';
            envelopeContainer.style.pointerEvents = 'none';
            conviteContainer.classList.add('show');
            document.body.style.overflow = 'auto';
        }, 1000);
    });
    
    // Cria corações voando
    function criarCoracoes() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const coracao = document.createElement('div');
                coracao.className = 'coracao';
                coracao.style.left = Math.random() * 100 + 'vw';
                coracao.style.top = '-30px';
                coracao.style.opacity = '0';
                coracao.style.width = (Math.random() * 20 + 20) + 'px';
                coracao.style.height = coracao.style.width;
                document.body.appendChild(coracao);
                
                setTimeout(() => {
                    coracao.style.opacity = '0.7';
                    coracao.style.transition = `all ${Math.random() * 3 + 4}s cubic-bezier(0.1, 0.8, 0.3, 1)`;
                    coracao.style.top = '100vh';
                    coracao.style.transform = `rotate(45deg) translateX(${Math.random() * 100 - 50}px)`;
                }, 100);
                
                setTimeout(() => {
                    coracao.remove();
                }, 5000);
            }, i * 200);
        }
    }
    
    // Dispara confetes
    function lancarConfetes() {
        const emojis = ['💖', '🌸', '🎀', '🎊', '🎉', '💝', '💘', '💕'];
        const cores = ['#ff6b8b', '#ffb3c1', '#ff8e4f', '#f9e45b', '#68d8d6', '#a78bfa'];
        
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            if (Math.random() > 0.7) {
                confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
                confetti.style.fontSize = (Math.random() * 10 + 10) + 'px';
                confetti.style.textShadow = '0 0 3px rgba(0,0,0,0.2)';
            } else {
                confetti.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            }
            
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-20px';
            confetti.style.opacity = '0';
            confetti.style.width = (Math.random() * 15 + 8) + 'px';
            confetti.style.height = confetti.style.width;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.style.opacity = '1';
                confetti.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 100 + 100}px) rotate(${Math.random() * 360}deg)`;
                confetti.style.transition = `all ${Math.random() * 3 + 2}s cubic-bezier(0.1, 0.8, 0.2, 1)`;
            }, i * 20);
            
            setTimeout(() => {
                confetti.remove();
            }, 6000);
        }
    }
    
    // Animação inicial
    setTimeout(() => {
        criarCoracoes();
    }, 800);
    
    // Botão de aceitar - CORRIGIDO E FUNCIONAL
    const btnAceitar = document.getElementById('btnAceitar');
    btnAceitar.addEventListener('click', function() {
        this.innerHTML = '💖 Aceito! Te busco em casa! 💖';
        this.style.backgroundColor = 'var(--verde-aceito)';
        this.style.transform = 'scale(1.05)';
        
        // Efeitos extras ao aceitar
        lancarConfetes();
        criarCoracoes();
        
        // Mensagem extra após 1.5 segundos
        setTimeout(() => {
            const mensagemExtra = document.createElement('div');
            mensagemExtra.innerHTML = 'Você acabou de tornar meu dia muito mais feliz! 😊';
            mensagemExtra.style.marginTop = '20px';
            mensagemExtra.style.animation = 'aparecer 1s forwards';
            mensagemExtra.style.opacity = '0';
            mensagemExtra.style.color = '#e75480';
            mensagemExtra.style.fontWeight = '600';
            mensagemExtra.style.textAlign = 'center';
            btnAceitar.insertAdjacentElement('afterend', mensagemExtra);
        }, 1500);
    });
});