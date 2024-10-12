import {
  Box,
  Card,
  Stack,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Image,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  return products.length === 0 ? (
    <Box textAlign="center" mt="20">
      No hay productos para mostrar
    </Box>
  ) : (
    <Flex justify="center" align="center" wrap="wrap" p={4}>
      {products.map((product) => (
        <Card
          key={product.id}
          maxW="sm"
          m={4}
          boxShadow="lg"
          borderRadius="md"
          overflow="hidden"
        >
          <CardBody>
            <Image
              src={product.thumbnail}
              alt={product.name}
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h="200px"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.title}</Heading>
              <Text noOfLines={2}>{product.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                ${product.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button as={Link} to={`/item/${product.id}`} bgColor={"lightblue"} textColor={"black"}>
                Más detalles
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  );
};