// products-preview = info-fotos
// preview = info
// products-conteiner = galeria
// product = imagem

let preveiwContainer = document.querySelector('.info-fotos');
let previewBox = preveiwContainer.querySelectorAll('.info');

document.querySelectorAll('.galeria .imagem').forEach(imagem =>{
  imagem.onclick = () =>{
    console.log('clicado!');
    preveiwContainer.style.display = 'flex';
    let name = imagem.getAttribute('data-name');
    previewBox.forEach(info =>{
      let target = info.getAttribute('data-target');
      if(name == target){
        console.log('clicado!');
        info.classList.add('ativa');
      };
    });
  };
});

// odeio isso mano.