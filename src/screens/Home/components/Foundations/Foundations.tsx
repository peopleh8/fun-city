import { FC } from 'react'
import Section from '@/components/UI/Section/Section'
import FoundationsList from '@/screens/Home/components/Foundations/FoundationsList'
import styles from '@/screens/Home/components/Foundations/Foundations.module.scss'

const Foundations: FC = () => {
  return (
    <Section
      title='Learn Our <em>Foundations</em>'
      size='md'
      inlineType='type-3'
      externalClassNames={styles.foundations}
    >
      <FoundationsList />
    </Section>
  )
}

export default Foundations
