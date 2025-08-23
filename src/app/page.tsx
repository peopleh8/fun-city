import StoreProvider from '@/providers/store.provider'
import HomeClient from '@/screens/Home/Home'

export default function Home() {
  return (
    <StoreProvider>
      <HomeClient />
    </StoreProvider>
  )
}
