import localFont from 'next/font/local'

export const inter = localFont({
  src: [
    {
      path: '../../../public/fonts/Inter-Light-Italic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Inter-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Inter-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Inter-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--inter-font',
  display: 'swap',
})
