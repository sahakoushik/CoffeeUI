import { View,Text, Image } from "react-native"

export default function CoffeeCard({item}){
    return(
        <View className="">
            <Image source={item.image} className="w-24 h-24"/>
        </View>
    )
}