let chatOpened = false

const clickChat = async () => {
  // Select menu item
  const chatBtn = document.getElementById('b-scopeListItem-conv')
  if (
    window.location.search.includes('&first') &&
    (!window.location.search.includes('&first=1&') ||
      (window.location.search.includes('&first=1') &&
        window.location.search.substring(window.location.search.length - 1) ===
          '1'))
  ) {
    console.log('Not on first page, not running')
    return
  }
  if (!chatBtn || chatOpened === true) {
    console.log('Chat button not found or already opened')
    return
  }

  // Click item and wait
  chatBtn.firstChild.click()
  await new Promise(resolve => setTimeout(resolve, 50))

  // See if chat is open
  const sydneyChat = document.getElementsByTagName('cib-serp')
  if (sydneyChat.length > 0) {
    chatOpened = true
  }
  return
}

document.addEventListener('transitionrun', clickChat, true)
