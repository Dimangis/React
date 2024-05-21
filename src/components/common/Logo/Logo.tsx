import styles from './Logo.modules.css';
import LogoIcon from '../../../../public/img/SVG/Logo.svg';
import Text from '../Text/Text';

export function Logo() {
  return (
    <div className={styles.container}>
      <LogoIcon width={36} height={36} color="var(--logo-fill-color)" />
      <Text variant="h1" element="h1">
        STM<b className={styles.Blog}>Labs</b>
      </Text>
    </div>
  );
}
