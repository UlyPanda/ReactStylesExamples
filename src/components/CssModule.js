import styles from '../stylesheets/CssModule.module.css';

export default function CssModule() {

  return (
    <div className={styles.module_container}>
      <h1 className={styles.module_header}>
        Styled by a CSS Module
      </h1>
    </div>
  )

}
