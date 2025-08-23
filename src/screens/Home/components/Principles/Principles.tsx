import { FC } from 'react'
import Section from '@/components/UI/Section/Section'
import PrinciplesTab from '@/screens/Home/components/Principles/PrinciplesTab'
import styles from '@/screens/Home/components/Principles/Principles.module.scss'

const Principles: FC = () => {
  return (
    <Section
      title='<em>Core</em> Principles'
      size='sm'
      externalClassNames={styles.principles}
    >
      <PrinciplesTab />
    </Section>
  )
}

export default Principles
