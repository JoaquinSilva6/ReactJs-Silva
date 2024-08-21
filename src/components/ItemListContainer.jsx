import { Box } from "@chakra-ui/react"

const ItemListContainer = ({ greeting }) => {
    return (
        <Box display={"flex"} height={"90vh"} alignItems={"center"} justifyContent={"center"}>
            {greeting}
        </Box>
    )
}

export default ItemListContainer
