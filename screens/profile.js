import React from "react";
import { NativeBaseProvider, Center, Box, Image, FormControl, Input, ScrollView } from "native-base";

const EditProfile = () => {
  return (
  <NativeBaseProvider>
    <ScrollView>

      <Box flex={1} bg='#FF003D'>
        <Box flex={1} bg='#FF003D' p={60} alignItems='center'>
          <Center>
            <Image
              mx={"auto"}
              my={"auto"}
              source={require("../assets/hitori.jpg")}
              w={"90"}
              h={"90"}
              borderRadius={"full"}
              alt="profile icon"
            />
          </Center>
          </Box>

          <Box flex={5} bg='#FFFFFF'  borderTopRadius={60}>
            <Box>
              <FormControl p={30} >
                <FormControl.Label>Name</FormControl.Label>
                <Input bg={"white"} borderRadius={15} value="Rahma Putri"/>
              </FormControl>
              <FormControl paddingTop={1} p={30} >
                <FormControl.Label>NIM</FormControl.Label>
                <Input bg={"white"} borderRadius={15} value="1204210033"/>
              </FormControl>
              <FormControl paddingTop={1} p={30} >
                <FormControl.Label>Prodi</FormControl.Label>
                <Input bg={"white"} borderRadius={15} value="Sistem Informasi"/>
              </FormControl>
              <FormControl paddingTop={1} p={30} >
                <FormControl.Label>Semester Masuk</FormControl.Label>
                <Input bg={"white"} borderRadius={15} value="Ganjil 2021"/>
              </FormControl>
              <FormControl paddingTop={1} p={30} >
                <FormControl.Label>Email</FormControl.Label>
                <Input bg={"white"} borderRadius={15} value="rahmaputri@gmail.com"/>
              </FormControl>
            </Box>
          </Box>
      </Box>
    </ScrollView>
    </NativeBaseProvider>
  );
};

export default EditProfile;