import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    };
    loadCart();
  }, []);

  const removeFromCart = async (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <View style={tailwind('flex-1 p-5')}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className='mb-5 p-3 border rounded bg-white'>
            <Text className='text-lg font-bold'>{item.name}</Text>
            <Text className='text-gray-600'>${item.price}</Text>
            <TouchableOpacity
              className='mt-2 p-2 bg-red-500 rounded'
              onPress={() => removeFromCart(item.id)}
            >
              <Text className='text-white text-center'>Remove from Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        className='mt-5 p-3 bg-green-500 rounded'
        onPress={() => navigation.navigate('Home')}
      >
        <Text className='text-white text-center'>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;
