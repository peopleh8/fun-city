import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export const anchorScroll = (scrollToTarget: string | number, duration = 1, offset = 0) => {
  if (!scrollToTarget) return

  gsap.to(window, {
    duration: duration,
    ease: 'Power2.easeInOut',
    scrollTo: { y: scrollToTarget, offsetY: offset },
  })
}
