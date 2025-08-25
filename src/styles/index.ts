import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#007AFF', // Example primary blue color
  secondary: '#8E8E93', // Example secondary gray color
  background: '#FFFFFF', // Example white background
  text: '#000000', // Example black text
  lightText: '#8E8E93', // Example lighter text color
  cardBackground: '#F2F2F7', // Example card background color
  separator: '#C6C6C8', // Example separator line color
  error: '#FF3B30', // Example error red color
};

export const spacing = {
  extraSmall: 4,
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
};

export const fontSizes = {
  small: 12,
  medium: 16,
  large: 20,
  extraLarge: 24,
  title: 28,
};

export const typography = {
  regular: 'System', // Replace with actual font names if using custom fonts
  medium: 'System',
  semiBold: 'System',
  bold: 'System',
};

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.medium,
  },
  text: {
    fontSize: fontSizes.medium,
    fontFamily: typography.regular,
    color: colors.text,
  },
  title: {
    fontSize: fontSizes.title,
    fontFamily: typography.bold,
    color: colors.text,
  },
  sectionHeader: {
    fontSize: fontSizes.large,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginTop: spacing.large,
    marginBottom: spacing.small,
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    padding: spacing.medium,
    marginBottom: spacing.medium,
  },
  separator: {
    height: 1,
    backgroundColor: colors.separator,
    marginVertical: spacing.small,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.medium,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonPrimaryText: {
    color: colors.background,
    fontSize: fontSizes.medium,
    fontFamily: typography.semiBold,
  },
});