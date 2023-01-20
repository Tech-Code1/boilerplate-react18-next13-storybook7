import styles from './BaseTemplate.module.css'

export interface IBaseTemplate {
  sampleTextProp: string
}

function BaseTemplate({ sampleTextProp }: IBaseTemplate) {
  return <div className={styles.container}>{sampleTextProp}</div>
}

export default BaseTemplate
