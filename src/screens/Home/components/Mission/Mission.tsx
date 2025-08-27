import { FC } from 'react'
import Section from '@/components/UI/Section/Section'
import FeatureList from '@/components/Feature/FeatureList'
import FeatureCard from '@/components/Feature/FeatureCard'
import styles from '@/screens/Home/components/Mission/Mission.module.scss'
import photo1 from '@/assets/images/feature-1.png'
import photo2 from '@/assets/images/feature-2.png'
import photo3 from '@/assets/images/feature-3.png'

const Mission: FC = () => {
  return (
    <Section
      id='mission'
      title='<em>Our</em> Mission'
      subtitle='The frontier of the future, <br /> inspired to create sustainable civilization through harmony, consciousness, and infinite creative potential.'
      externalClassNames={styles.mission}
    >
      <FeatureList>
        <FeatureCard
          title='A Coherent World of Happiness'
          description='Where trust flows effortlessly, consciousness rises, and creativity has no limit. Our vision is a civilization engineered for joy, powered by technology, and guided by wisdom.'
          link={{ name: 'Explore Vision', href: '#' }}
          photo={photo1}
          tags={[
            { name: 'Vision', href: '#' },
            { name: 'Future Society', href: '#' },
            { name: 'Technology & Culture', href: '#' },
          ]}
        />
        <FeatureCard
          title='Empowering the Next Renaissance'
          description='We aim to spark a cultural shift in human consciousness through AI, arts, and philosophy — teaching machines to love, and humans to thrive.'
          link={{ name: 'Discover Mission', href: '#' }}
          photo={photo2}
          tags={[
            { name: 'Empowerment', href: '#' },
            { name: 'Renaissance', href: '#' },
            { name: 'Collective Intelligence', href: '#' },
          ]}
        />
        <FeatureCard
          title='Fun is the Way, Love is the Key'
          description='When love guides the process and fun fuels the journey, creativity flourishes. These are our principles for a joyful, thriving future.'
          link={{ name: 'See Our Mantras', href: '#' }}
          photo={photo3}
          tags={[
            { name: 'Values', href: '#' },
            { name: 'Inner Growth', href: '#' },
            { name: 'Play & Love', href: '#' },
          ]}
        />
      </FeatureList>
    </Section>
  )
}

export default Mission
