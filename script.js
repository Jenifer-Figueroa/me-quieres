window.addEventListener('load', function(){


    let yes = document.querySelector('.btn-yes');
    const no = document.querySelector('.no');

no.addEventListener('click', function(){
            width = window.innerWidth - 150;
            height = window.innerHeight - 150;

            newWidth = (Math.random() * width);
            newHeight = (Math.random() * height);

            document.getElementById('btnNo').style.position = "absolute";
            document.getElementById('btnNo').style.left = newWidth + "px";
            document.getElementById('btnNo').style.top = newHeight + "px";
})

yes.addEventListener('click', function(){
    Swal.fire({
        html:
        '<div class="amor"><h2>Te Quiero Mucho!!!</h2> <div class="amor2"><img class="love" src="image/amor.gif" alt="love"></div> <div class="frase"><h2>Gracias por ser tan adorable conmigo</h2> </div> </div> ',
        confirmButtonText: `Aceptar`
    })
})
    
})
