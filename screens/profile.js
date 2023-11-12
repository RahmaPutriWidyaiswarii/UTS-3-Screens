import React, { useState } from "react";
import { NativeBaseProvider, Center, Box, Image, FormControl, Input, ScrollView, Button, Modal, Text, VStack } from "native-base";

const Profile = () => {
  const [nameValue, setNameValue] = useState("Rahma Putri");
  const [nimValue, setNimValue] = useState("1204210033");
  const [prodiValue, setProdiValue] = useState("Sistem Informasi");
  const [semesterValue, setSemesterValue] = useState("Ganjil 2021");
  const [emailValue, setEmailValue] = useState("rahmaputri@gmail.com");
  const [isModalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

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
                <Input
                  bg={"white"}
                  borderRadius={15}
                  value={nameValue}
                  onChangeText={(text) => setNameValue(text)}
                />
              </FormControl>
              <FormControl paddingTop={1} p={30} >
                <FormControl.Label>NIM</FormControl.Label>
                <Input
                  bg={"white"}
                  borderRadius={15}
                  value={nimValue}
                  onChangeText={(text) => setNimValue(text)}
                />
              </FormControl>
              <FormControl paddingTop={1} p={30} >
                <FormControl.Label>Prodi</FormControl.Label>
                <Input
                  bg={"white"}
                  borderRadius={15}
                  value={prodiValue}
                  onChangeText={(text) => setProdiValue(text)}
                />
              </FormControl>
              <FormControl paddingTop={1} p={30} >
                <FormControl.Label>Semester Masuk</FormControl.Label>
                <Input
                  bg={"white"}
                  borderRadius={15}
                  value={semesterValue}
                  onChangeText={(text) => setSemesterValue(text)}
                />
              </FormControl>
              <FormControl paddingTop={1} p={30} >
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  bg={"white"}
                  borderRadius={15}
                  value={emailValue}
                  onChangeText={(text) => setEmailValue(text)}
                />
              </FormControl>
            </Box>

            <Button
              onPress={handleButtonClick}
              bg="#FF003D"
              borderRadius="full"
              p={3}
              my={5}
            >
              Update Profile
            </Button>
          </Box>
        </Box>
      <Modal isOpen={isModalVisible} onClose={closeModal}>
          <VStack space={4} alignItems="center" justifyContent="center" p={5} bgColor={"white"}>
            <Text fontSize="xl" fontWeight="bold">Update</Text>
            <Text>Profil berhasil diperbarui!</Text>
            <Button onPress={closeModal} bg="#FF003D" borderRadius="full" mt={4}>
              OK
            </Button>
          </VStack>
        </Modal>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Profile;
