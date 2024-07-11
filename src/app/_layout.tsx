import "@/styles/global.css"
import "@/utils/dayjsLocaleConfig"

import { View, StatusBar } from "react-native"

import { Slot } from "expo-router"


import {
    useFonts,
    Inter_600SemiBold,
    Inter_400Regular,
    Inter_500Medium
} from "@expo-google-fonts/inter"
import { Loading } from "@/components/loading"



export default function Layout() {

    const [fontsLoades] = useFonts({
        Inter_500Medium,
        Inter_400Regular,
        Inter_600SemiBold,
    })

    if (!fontsLoades) {
        return <Loading />
    }

    return (
        <View className="flex-1 bg-zinc-950">
            <StatusBar
                backgroundColor="transparent"
                barStyle="light-content"
                translucent
            />
            <Slot />
        </View>


    )
}