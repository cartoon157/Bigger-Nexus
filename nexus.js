  function show_one_hide_others(toshow){
    var buttons = document.getElementsByClassName('game-deck-template');
    for (let button of buttons){
        text = button.innerText.toUpperCase();
      if (!(text.match(toshow))) {
        button.parentElement.setAttribute('style', 'display:none;');
      }else{
        button.parentElement.removeAttribute('style');
      }
    }
  }

