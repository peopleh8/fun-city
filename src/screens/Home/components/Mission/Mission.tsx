import { FC } from 'react'
import Section from '@/components/UI/Section/Section'
import FeatureList from '@/components/Feature/FeatureList'
import FeatureCard from '@/components/Feature/FeatureCard'
import styles from '@/screens/Home/components/Mission/Mission.module.scss'

const Mission: FC = () => {
  return (
    <Section
      title='<em>Our</em> Mission'
      subtitle='The frontier of the future, <br /> inspired to create sustainable civilization through harmony, consciousness, and infinite creative potential.'
      externalClassNames={styles.mission}
    >
      <FeatureList>
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </FeatureList>
    </Section>
  )
}

export default Mission
