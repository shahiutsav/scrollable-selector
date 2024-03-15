import styles from "./styles.module.css";
import CheckBoxIcon from "./checkbox-icon.svg";

export default function CheckboxCard({ label }: { label: string }) {
  return (
    <label className={styles.container}>
      {label}
      <div className="relative">
        <input type="checkbox" />
        <div className={styles.checkmark}>
          <div className={styles.checkmarkIcon}>
            <CheckBoxIcon />
          </div>
        </div>
        <div className={styles.envelope}></div>
      </div>
    </label>
  );
}
