import styles from "./answer-text.module.css";

interface Props {
  children: React.ReactNode;
}
export const AnswerText = ({ children }: Props): JSX.Element => {
  return <div className={styles.text}>{children}</div>;
};
