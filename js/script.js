const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const restart = document.querySelector('.restart');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
        
    }, 500);

    }

    const loop = setInterval(()=>{
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        
        if (pipePosition <= 120  && pipePosition > 0 && marioPosition < 80){
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${pipePosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '50px'

        clearInterval(loop);

        }

    },10)

    restart.addEventListener('click',()=>{
        location. reload()
    })

document.addEventListener('keydown', jump);
document.addEventListener('click',jump);

$(document).ready(function(){
    // REMOVER BARRAS DE ROLAGEM
      $("#SUADIV").click(function(){
        $("html, body").css({
            'height' : $(window).height() + 'px',
            'width' : $(window).width() + 'px',
            'overflow' : 'hidden'
        });
      });
    });
 