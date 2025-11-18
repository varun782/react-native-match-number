import { StyleSheet } from 'react-native';

const theme = {
  colors: {
    primary: '#4a90e2',
    secondary: '#e94e77',
    background: '#ffffff',
    text: '#333333',
    matched: '#cccccc',
    selected: '#e0f7fa',
  },
  fontSizes: {
    large: 28,
    medium: 24,
    small: 18,
  },
  spacing: {
    small: 5,
    medium: 10,
    large: 20,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.large,
  },
  header: {
    fontSize: theme.fontSizes.large,
    color: theme.colors.primary,
    marginBottom: theme.spacing.medium,
  },
  cell: {
    width: 75,
    height: 75,
    margin: theme.spacing.small,
    borderRadius: 8,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: theme.fontSizes.large,
    color: theme.colors.text,
  },
  matchedCell: {
    backgroundColor: theme.colors.matched,
  },
  selectedCell: {
    borderWidth: 3,
    borderColor: theme.colors.primary,
  },
  timer: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.primary,
    marginBottom: theme.spacing.medium,
  },
  score: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
  },
});

export { theme, styles };