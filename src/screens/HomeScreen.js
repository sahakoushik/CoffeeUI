/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Image, StatusBar, Text, View,SafeAreaView, TextInput, TouchableOpacity, FlatList,Dimensions} from 'react-native';
import { categories, coffeeItems } from '../api/data';
import { useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from './CoffeeCard';


const {width, height} = Dimensions.get('window');
export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState()
  const handelClick = (val) =>{
    console.log("pressed", val);
    setActiveCategory(val);
    console.log(activeCategory)
  }
    return (
    <View className="relative bg-white">
      <StatusBar />
      <Image 
        source={require("../assets/images/beansBackground1.png")}
        className="w-full absolute -top-5 opacity-10"
        style={{height:220}}
      />
      <SafeAreaView>
        {/* avatar and bell icon */}
        <View className="mx-4 flex-row ">
          <Image source={require('../assets/images/avatar.png')} 
            className="h-9 w-9 rounded-full" />
          <View className="flex-row flex-1 justify-center items-center space-x-2">
            {/* <MapPinIcon size="25" color="#aaa" /> */}
            <Text className="font-semibold text-base text-center text-black">
              North End , Badda
            </Text>
          </View>
          <Image source={require('../assets/images/avatar.png')} 
            className="h-9 w-9 rounded-full" />
        </View>
        {/* search */}
        <View className="flex-row rounded-tl-3xl rounded-br-3xl  bg-gray-200 m-12 shadow-xl">
          <TextInput placeholder='Search' className="p-4 flex-1 font-semibold text-gray-700"/>
          <TouchableOpacity className="p-4 justify-center align-center bg-yellow-600 rounded-br-3xl">
            <Text className="text-white font-bold font-2xl">Search</Text>
          </TouchableOpacity>
        </View>
        {/* categories */}
        <View className="px-5 my-6">
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item=> item.id}
            className="overflow-visible"
            extraData={activeCategory}
            renderItem={({item})=>{
              // let activeClass =  item.id === activeCategory ? "bg-slate-700" : "bg-red-200" 
              return (
                <TouchableOpacity 
                onPress={()=> handelClick(item.id)}
                // style={{backgroundColor: item.id === activeCategory ? 'red': 'green'}} 
                className={`py-4 px-5 mr-2 rounded-full shadow ${ item.id === activeCategory ? "bg-yellow-800" : "bg-gray-200" }`}>
                  <Text className={`font-semibold ${ item.id === activeCategory ? "text-white" : "text-slate-700" }`}>{item.id} {item.title}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        {/* coffee card */}
        
          <View>
            <Carousel
              data={coffeeItems}
              renderItem={({item})=> <CoffeeCard item={item} />}
              firstItem={1}
              loop={true}
              inactiveSlideScale={0.75}
              inactiveSlideOpacity={0.75}
              sliderWidth={width}
              itemWidth={width*0.63}
              slideStyle={{display: 'flex', alignItems: 'center'}}
            />
          </View>
        
      </SafeAreaView>
    </View>
  );
}
