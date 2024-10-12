import { Box, Flex, Button, Input, Heading, VStack } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { CartContext } from "../context";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
export const Payment = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { cartState } = useContext(CartContext);
    const total = cartState.reduce(
    (acc, item) => acc + item.price * item.qtyItem,
    0
    );
  const handleCreateOrder = () => {
    const orderObj = {
      buyer: {
        name: name,
        lastName: lastName,
        email: email,
      },
      items: cartState.map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.qtyItem,
        };
      }),
      total: total,
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, orderObj).then(({ id }) => {
      alert("Se creó la orden con id: " + id);
    });
  };

  return (
    <Flex justify="center" align="center" h="100vh">
      <Box
        p={6}
        maxW="600px"
        w="100%"
        bg="rgb(56, 75, 112)"
        boxShadow="lg"
        borderRadius="md"
        textAlign="center"
      >
        <Heading as="h2" size="lg" mb={6} color={"black"}>
          Finalizar Compra
        </Heading>
        <VStack spacing={4}>
          <label>Nombre</label>
          <Input
            backgroundColor={"gray.100"}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Apellido</label>
          <Input
            backgroundColor={"gray.100"}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>E-mail</label>
          <Input
            backgroundColor={"gray.100"}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button bgColor={"rgb(80, 118, 135)"} boxShadow={"lg"} size="lg" onClick={handleCreateOrder}>
            Crear Orden
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};