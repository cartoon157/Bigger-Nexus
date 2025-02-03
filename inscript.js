(() => {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  function init_nexus(){
    var myScript = document.createElement('script');
    myScript.type = 'text/javascript';
    myScript.setAttribute('src',browser.runtime.getURL('nexus.js'));
    document.getElementsByTagName('head')[0].appendChild(myScript);
    // console.log(browser.runtime.getURL('Better-Nexus/nexus.js'));

    position = document.getElementById('game-room-deck-container-player1');
    deck_finder = document.createElement('input');
    position.insertBefore(deck_finder,position.firstChild)
    deck_finder.setAttribute('id','deck_finder');
    deck_finder.setAttribute('oninput','show_one_hide_others(this.value.toUpperCase())');
    deck_finder.focus()
  }

  init_nexus()

  console.log('init complete')


  /**
   * Listen for messages from the background script.
   * Call "insertBeast()" or "removeExistingBeasts()".
   */
  browser.runtime.onMessage.addListener((message) => { 
    console.debug(show_one_hide_others(message.command));
  });
})();


