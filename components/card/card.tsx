import styles from "./card.module.css";

interface Props {
  children: React.ReactNode;
}
export const Card = ({ children }: Props): JSX.Element => {
  return <div className={styles.card}>{children}</div>;
};
