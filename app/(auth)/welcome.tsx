import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { onboarding } from "../../app/constants";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView className="flex h-full items-center  justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-in");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h[4px] mx-1 bg-[#E2e8f0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h[4px] mx-1 bg-[#0280FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item, index) => (
          <View
            key={item.id || index} // Usando item.id como key ou, se não houver, o índice.
            className="flex flex-col items-center justify-center"
          >
            <View className="w-[200px] h-[200px] rounded-full overflow-hidden">
              <Image
                source={item.image}
                className="w-full h-full"
                resizeMode="contain"
              />
            </View>
            <Text className="text-2xl font-bold text-black mt-5">
              {item.title}
            </Text>
            <Text className="text-md text-center text-[#4B5563] px-10 mt-3">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};
export default Onboarding;
