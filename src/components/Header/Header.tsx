import { useTheme } from '../../contexts/ThemeContext';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const { styles, toggleTheme, theme } = useTheme();

  const Icon = theme === 'dark' ? MdOutlineLightMode : MdOutlineDarkMode;

  return (
    <header className={styles.header}>
      <button className={styles.themeButton} onClick={toggleTheme}>
        <Icon size={24} />
      </button>
    </header>
  );
};

export default Header;
