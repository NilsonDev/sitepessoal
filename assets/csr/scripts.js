const relogioDigital = document.querySelector('.relogio-digital');

setInterval(() => {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');
  relogioDigital.textContent = `${horas}:${minutos}:${segundos}`;
}, 1000); // atualiza a cada 1 segundo