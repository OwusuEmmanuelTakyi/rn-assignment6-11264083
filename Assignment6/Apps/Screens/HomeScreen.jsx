import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Image,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const products = [
    { id: '1', image: require('../../assets/dress1.png'), name: 'Office Wear', description: 'reversible angora cardigan', price: '120$' },
  { id: '2', image: require('../../assets/dress2.png'), name: 'Black', description: 'reversible angora cardigan', price: '120$' },
  { id: '3', image: require('../../assets/dress3.png'), name: 'Church Wear', description: 'reversible angora cardigan', price: '120$' },
  { id: '5', image: require('../../assets/dress4.png'), name: 'Lamerei', description: 'reversible angora cardigan', price: '120$' },
  { id: '6', image: require('../../assets/dress5.png'), name: '21WN', description: 'reversible angora cardigan', price: '120$' },
  { id: '7', image: require('../../assets/dress7.png'), name: 'Lopo', description: 'reversible angora cardigan', price: '120$' },
  { id: '8', image: require('../../assets/dress7.png'), name: 'Lame', description: 'reversible angora cardigan', price: '120$' },


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
    <View className='mt-10'>
                            <View className="flex-row items-center justify-between p-4 bg-white shadow-md">
    <Image source={require('../../assets/Menu.png')} className="h-6 w-6" />
    <Text className="font-bold text-xl tracking-wider mx-auto">Open Fashion</Text>
    <View className="flex flex-row items-center space-x-4">
        <Image source={require('../../assets/Search.png')} className="h-6 w-6" />
        <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
      >
        <Image source={require('../../assets/shoppingBag.png')} className="h-6 w-6" />
      </TouchableOpacity>
        
    </View>
</View>
<View className=" flex-row items-center  space-x-10 ">
    <Text className="text-lg ml-3">OUR  STORY</Text>
    <View className='absolute right-0 flex flex-row items-center space-x-3 '>
    <Image source={require('../../assets/Listview.png')} className="h-6 w-6 mr-2 " />
    <Image source={require('../../assets/Filter.png')} className="h-6 w-6 mr-4" />
    </View>
</View>


      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
            <View className='flex-l m-1'>
            <Image source={item.image}  
             className='w' />
             <View>
                <Text className='text-[15px] font-bold'> {item.name}</Text>
                </View>
                <View>
                    <Text className=''>{item.description}</Text>
                </View>
                <View>
                    <Text className='text-red-500'> {item.price}</Text>
                </View>
           
          </View>
        )}
      />
      
    </View>
  );
};



export default HomeScreen;
