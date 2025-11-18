import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LanguageContext } from '../context/LanguageContext';
import { AuthContext } from '../context/AuthContext';
import i18n from '../localization';

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { logout } = useContext(AuthContext);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <View style={styles.header}>
      {/* Left: App Logo + Title */}
      <View style={styles.leftWrap}>
        <Image
          source={require('../../assets/images/check.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>{i18n.t('appTitle')}</Text>
      </View>

      {/* Right: Icons */}
      <View style={styles.rightWrap}>
        {/* Translate Button */}
        <TouchableOpacity
          onPress={toggleLanguage}
          style={styles.iconWrap}
          activeOpacity={0.6}
        >
          <Image
            source={require('../../assets/images/translate.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity
          onPress={logout}
          style={styles.iconWrap}
          activeOpacity={0.6}
        >
          <Image
            source={require('../../assets/images/logout.png')}
            style={[styles.icon, styles.logoutIcon]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginBottom: 16,
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: '#1B3B6F',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f4f8',
  },

  leftWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rightWrap: {
    position: 'absolute',
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 36,
    height: 36,
    marginRight: 12,
    tintColor: '#1B3B6F',
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1B3B6F',
    letterSpacing: -0.5,
  },

  iconWrap: {
    padding: 6,
    marginLeft: 14,
  },

  icon: {
    width: 26,
    height: 26,
    tintColor: '#1B3B6F',
  },
  logoutIcon: {
    tintColor: '#e11d48',
  },
});
