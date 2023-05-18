import styles from "./heading-text.module.css";

interface Props {
  children: React.ReactNode;
}
export const HeadingText = ({ children }: Props): JSX.Element => {
  return <div className={styles.text}>{children}</div>;
};
