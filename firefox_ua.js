function rewriteUserAgentHeader(e) {
  for (let header of e.requestHeaders) {
    if (header.name.toLowerCase() === 'user-agent') {
      if (header.value?.includes('Mobile')) {
        header.value =
          'Mozilla/5.0 (Linux; Android 13; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36 EdgA/110.0.1587.41'
      }
      header.value =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.100.0'
    }
  }
  return { requestHeaders: e.requestHeaders }
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  { urls: ['https://www.bing.com/*'] },
  ['blocking', 'requestHeaders'],
)
