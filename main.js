function adicionar() {
  var nameMusic = document.getElementById('nameMusic').value
  var nameSinger = document.getElementById('nameSinger').value
  var time = document.getElementById('time').value
  var playListElement = document.getElementById('playList')

  var music = {
    nameMusic: nameMusic,
    nameSinger: nameSinger,
    time: time
  } //

  playList.push(music)

  playListElement.innerHTML = '' // Apaga o que for impresso antes da função abaixo ser executada



   playList.forEach((value, index) => { 
    playListElement.innerHTML += `
  <tr class="result">
  <td> ${value.nameMusic}</td>
  <td> ${value.nameSinger}</td>
  <td> ${value.time}</td>
  </tr>
 `
  })
  /* forEach - método de array para iteração dos valores (iteração é a execução de uma função  sucessivamente o objeto de cada uma é o resultado da que a precede.)
  Value aqui é o valor da iteração 
  Index é a posição que a iteração está sendo executada 
  */
}

var playList = []
