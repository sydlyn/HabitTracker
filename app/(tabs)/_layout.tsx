import { Tabs } from 'expo-router';
import { custColors } from '@/constants/Colors'

import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: custColors.darkSageGreen, 
          borderBlockColor: 'transparent',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: custColors.sageGreen,
      }}
    >
      <Tabs.Screen 
        name='index'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => <Feather size={24} name="file-text" color={color} />
        }}
      />
      {/* <Tabs.Screen
        name='add'
        options={{
          tabBarIcon: ({color}) => <Feather size={24} name="file-text" color={color} />
        }}
      /> */}
      <Tabs.Screen 
        name='game'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => <MaterialCommunityIcons name="gamepad-circle-outline" size={24} color={color} />,
          unmountOnBlur: true
        }}
      />
    </Tabs>
  )
}
