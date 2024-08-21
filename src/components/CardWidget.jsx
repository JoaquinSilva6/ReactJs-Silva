import { Flex, Text } from '@chakra-ui/react';
import { TbShoppingCartFilled } from "react-icons/tb"

const CartWidget = () =>{
    return(
    <Flex>
        <TbShoppingCartFilled size="24px"/>
        <Text ml="2">0</Text>
    </Flex>
    )
}
export default CartWidget