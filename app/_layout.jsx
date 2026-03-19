import { Tabs, usePathname } from 'expo-router'; 
import { Image } from 'react-native';

export default function TabLayout() {
  const pathname = usePathname(); 
  const isDiary = pathname.includes('/diary'); 

  return (
    <Tabs
      screenOptions={{
        headerShown: false, 
        
        tabBarStyle: {
          paddingTop: 8,
          backgroundColor: '#ffffff',
        },
        
        tabBarActiveTintColor: '#7B61FF',   
        tabBarInactiveTintColor: '#666666', 
        
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        }
      }}
    >
      <Tabs.Screen
        name="index" 
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Image 
              source={require('../assets/images/icon_home_actived.png')} 
              style={{ width: 24, height: 24, tintColor: isDiary ? '#7B61FF' : color }} 
            />
          ),
          tabBarLabelStyle: isDiary ? { color: '#7B61FF' } : undefined,
        }}
      />

      <Tabs.Screen
        name="wishlist" 
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ color }) => (
            <Image 
              source={require('../assets/images/icon_nav_bookmark.png')} 
              style={{ width: 24, height: 24, tintColor: color }} 
            />
          ),
        }}
      />

      <Tabs.Screen
        name="mybooks" 
        options={{
          title: 'My books',
          tabBarIcon: ({ color }) => (
            <Image 
              source={require('../assets/images/icon_mybook.png')} 
              style={{ width: 24, height: 24, tintColor: color }} 
            />
          ),
        }}
      />

      <Tabs.Screen 
        name="diary/[id]" 
        options={{ 
          href: null, 
        }} 
      />
    </Tabs>
  );
}