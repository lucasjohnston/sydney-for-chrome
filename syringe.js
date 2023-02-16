window.addEventListener('load', async () => {
  await new Promise(resolve => setTimeout(resolve, 50))
  const chatBtn = document.getElementById('b-scopeListItem-conv')
  chatBtn.firstChild.click()
})
