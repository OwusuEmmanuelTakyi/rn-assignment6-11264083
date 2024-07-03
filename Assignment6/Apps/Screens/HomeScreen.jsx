import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const products = [
  { id: '1', name: 'Reversible Angora Cardigan', price: 120 },
  // Add other products here
];

const HomeScreen = ({ navigation }) => {
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

  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <View className='flex-1 p-5'>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className='mb-5 p-3 border rounded bg-white'>
            <Text className='text-lg font-bold'>{item.name}</Text>
            <Text className='text-gray-600'>${item.price}</Text>
            <TouchableOpacity
              className='mt-2 p-2 bg-blue-500 rounded'
              onPress={() => addToCart(item)}
            >
              <Text className='text-white text-center'>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        className='mt-5 p-3 bg-green-500 rounded'
        onPress={() => navigation.navigate('Cart')}
      >
        <Text className='text-white text-center'>Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
