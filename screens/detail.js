import React from "react";
import { Box, Image, ScrollView, Text } from "native-base";
import { useRoute } from "@react-navigation/native";
import { Header } from "../components";

const DetailProgram = () => {
    const route = useRoute();
    const { item } = route.params;

    return (
    <>
    <ScrollView>
        <Header title={item.title} withBack />
        
        <Box p={1}>
            <Image 
                width={"auto"}
                height={250}
                source={{ uri: item.image }}
                alt="Image Data" 
                mb={4}
                borderRadius={15}
                margin={8}
            />
            <Text m={7}> 
                {item.content}
            </Text>
        </Box>
    </ScrollView>
    </>
    );
};

export default DetailProgram;
