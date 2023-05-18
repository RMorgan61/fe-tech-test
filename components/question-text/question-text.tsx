import styles from "./question-text.module.css";

interface Props {
  children: React.ReactNode;
}
export const QuestionText = ({ children }: Props): JSX.Element => {
  return <div className={styles.text}>{children}</div>;
};
