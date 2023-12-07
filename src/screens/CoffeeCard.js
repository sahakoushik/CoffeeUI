import { View,Text, Image ,TouchableOpacity} from "react-native"

export default function CoffeeCard({item}){
    return(
        <View className="bg-yellow-900 w-64 h-80 rounded-tl-50 rounded-br-50 align-center mt-16 relative">
            <Image 
                source={item.image} 
                className="w-32 h-32 mx-auto -mt-16 shadow-2xl"
                style={{shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,
                }}
            />
            <View className="p-4 relative">
                <View className="flex-row items-center py-2">
                    <Text className="text-yellow-800 bg-white py-1 px-2 mr-2 rounded-br-3xl rounded-tl-3xl">{item.stars}</Text>
                    <Text className="text-white flex-1 font-bold text-3xl font-mono">{item.name}</Text>
                </View>
                <Text className="text-slate-200 text-sm font-thin py-4">
                    {item.desc}
                </Text>
                <View className="flex-row items-center py-4">
                    <Text className="text-white flex-1 font-bold text-2xl font-mono">{'$ ' + item.price}</Text>
                    <Text className="bg-white text-yellow-800 text-2xl py-1 px-4 rounded-br-3xl rounded-tl-3xl">+</Text>
                </View>
            </View>
        </View>
    )
}