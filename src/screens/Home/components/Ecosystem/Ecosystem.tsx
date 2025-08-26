import { FC } from 'react'
import Section from '@/components/UI/Section/Section'
import EcosystemList from '@/screens/Home/components/Ecosystem/EcosystemList'
import styles from '@/screens/Home/components/Ecosystem/Ecosystem.module.scss'

const Ecosystem: FC = () => {
  return (
    <Section
      id='ecosystem'
      subtitle='Building a better society through technology and community'
      title='The Fun City <em>Ecosystem</em>'
      inlineType='type-2'
      externalClassNames={styles.ecosystem}
    >
      <EcosystemList />
    </Section>
  )
}

export default Ecosystem
