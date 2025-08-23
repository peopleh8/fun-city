import { FC } from 'react'
import classNames from 'classnames'
import { SocialsProps } from '@/types/common.types'
import styles from '@/components/Socials/Socials.module.scss'
import Image from 'next/image'

const Socials: FC<SocialsProps> = ({ list, position, externalClassNames }) => {
  const classes = classNames(styles.socials, styles[position], externalClassNames)

  return (
    <div className={classes}>
      <ul className={styles.list}>
        {list.map((item) => (
          <li
            key={item.id}
            className={styles.item}
          >
            <a
              href={item.link}
              className={styles.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={item.icon}
                alt={item.link}
                width={24}
                height={24}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials
