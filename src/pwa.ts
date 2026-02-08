import { registerSW } from 'virtual:pwa-register'

registerSW({
  immediate: true,
  onRegisteredSW(swScriptUrl:any) {
    console.error('SW registered: ', swScriptUrl)
  },
  onOfflineReady() {
    console.error('PWA application ready to work offline')
  },
})
