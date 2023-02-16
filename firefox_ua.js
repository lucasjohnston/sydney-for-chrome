chrome.webRequest.onBeforeSendHeaders.addListener(
  details => {
    const { headers } = details
    if (!headers) {
      return undefined
    }

    return headers.map(header => {
      if (header.name.toLowerCase() === 'user-agent') {
        if (header.value?.includes('Mobile')) {
          header.value =
            'Mozilla/5.0 (Linux; Android 13; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36 EdgA/110.0.1587.41'
          return header
        }
        header.value =
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.100.0'
      }
      return header
    })
  },
  { urls: ['*://*.bing.com/*'] },
  ['blocking', 'requestHeaders'],
)
