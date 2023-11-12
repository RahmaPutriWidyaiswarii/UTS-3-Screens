import React from "react";
import { Image, Text, FlatList, Button, Box, HStack, Center } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import datas from "../datas";


const Program= () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate("Detail Program", {item:item})}
    >
      <Box
        borderWidth={1}
        borderRadius={15}
        backgroundColor="#F8F0E5"
        padding={2}
        marginHorizontal={15}
        marginTop={10}
        marginBottom={1}        
      > 
      
      <HStack space={5}>
        <Box width="40%">
          <Image
            source={{ uri: item.image }}
            width= '100%'
            h= {100}       
            resizeMode='cover' 
            borderRadius={15}
            alt="Image Data"
          />
          </Box>

          <Box width="60%" alignItems={"center"} justifyContent={"center"}>
            <Text fontSize={16}>
              {item.title}
            </Text>
          </Box>
      </HStack>
      </Box>
    </TouchableOpacity>
    );
  };
  
  return (
  <>
  <SafeAreaView>
    <Box alignItems="center">
      <Button marginTop={"5"} marginBottom={"5"} backgroundColor='#FF003D' width={"252"} height={"60"} fontWeight={"extraBlack"} size={"lg"} borderRadius={10} >
        <Text color='white' fontSize={18}>Program MahasiswaKu</Text>
      </Button>
    </Box>
  </SafeAreaView>
  <FlatList
    data={datas}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator={false}
  />
  </>
  );
};

export default Program;