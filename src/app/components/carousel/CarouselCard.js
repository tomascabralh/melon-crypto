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
import CoinDayVariation from "../coins/CoinDayVariation";

const CarouselCard = ({ coin }) => {
  const bg = useColorModeValue("white", "gray.700");

  return (
    <Center py={12} key={coin.id}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={bg}
        boxShadow={"xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        _hover={{
          background: "gray.200",
          color: "teal.800",
        }}
      >
        <Link href={`/coins/${coin.id}`} style={{ textDecoration: "none" }}>
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              zIndex: -1,
            }}
          >
            <AspectRatio maxW="120" ratio={1}>
              <Image rounded={"lg"} src={coin.image} ml={85} mt={100} />
            </AspectRatio>
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading fontSize={"4xl"} fontFamily={"body"} fontWeight={500}>
              {coin.name}
            </Heading>
            <Text fontWeight={800} fontSize={"xl"}>
              $ {coin.current_price}
            </Text>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
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
