import styles from './SubmitButton.module.css'

export function SubmitButton({text}){
    return (
       <div className={styles.form_control}>
            <button className={styles.btn}>{text}</button>
       </div>
    )
}