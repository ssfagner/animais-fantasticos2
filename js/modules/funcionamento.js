export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diaSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diaSemana.indexOf(diaAgora) !== -1;

  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}

/*  const agora = new Date();
const futuro = new Date("Dec 24 2020 23:59");

function transformarEmDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000);
}

const diasAgora = transformarEmDias(agora.getTime());
const diasFuturo = transformarEmDias(futuro.getTime());

console.log(diasFuturo - diasAgora);  */
