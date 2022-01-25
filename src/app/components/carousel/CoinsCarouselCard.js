import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import CoinDayVariation from "../coins/coinPage/CoinDayVariation";

const CarouselCard = ({ coin }) => {
  const bg = useColorModeValue("white", "gray.700");

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"260px"}
        w={"100%"}
        bg={bg}
        boxShadow={"xl"}
        rounded={"lg"}
        zIndex={1}
        _hover={{
          background: "gray.200",
          color: "teal.800",
        }}
        transition={"all 0.5s ease-out 100ms"}
      >
        <Link href={`/coins/${coin.id}`} style={{ textDecoration: "none" }}>
          <AspectRatio ratio={1} m="auto" boxSize="100px">
            <Image
              rounded={"lg"}
              src={coin.image}
              objectFit={"fill"}
              boxSize="100px"
            />
          </AspectRatio>
          <Stack pt={10} align={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {coin.name}
            </Heading>
            <Text fontWeight={800} fontSize={"lg"}>
              $ {coin.current_price}
            </Text>
            <Text
              color={"gray.500"}
              fontSize={"xs"}
              textTransform={"uppercase"}
            >
              24 Hour Variation
            </Text>
            <CoinDayVariation
              porcentageVar={coin.price_change_percentage_24h}
            />
          </Stack>
        </Link>
      </Box>
    </Center>
  );
};

export default CarouselCard;
