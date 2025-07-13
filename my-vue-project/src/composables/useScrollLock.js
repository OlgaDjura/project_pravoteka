import { onBeforeUnmount } from 'vue'

export function useScrollLock() {
    let scrollPosition = 0
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    const lock = () => {
        scrollPosition = window.scrollY
        document.body.style.cssText = `
      position: fixed;
      top: -${scrollPosition}px;
      left: 0;
      width: calc(100% - ${scrollbarWidth}px);
      overflow: hidden;
      padding-right: ${scrollbarWidth}px;
    `
    }

    const unlock = () => {
        document.body.style.cssText = ''
        window.scrollTo(0, scrollPosition)
    }

    onBeforeUnmount(unlock)

    return { lock, unlock }
}