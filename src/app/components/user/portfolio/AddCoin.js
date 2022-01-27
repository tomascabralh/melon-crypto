import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import SearchCoin from "../../search/SearchCoin";

const AddCoin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, "");

  const [price, setPrice] = useState("0");
  const [quantity, setQuantity] = useState("0");
  const [pxq, setPxq] = useState(0);
  const [coin, setCoin] = useState(0);

  const getCoin = (coin) => {
    setCoin(coin);
    setPrice(coin.current_price);
  };

  const Tabpanel = () => {
    return (
      <>
        <SearchCoin getCoin={getCoin} />
        <HStack mt={3}>
          <Box>
            Quantity
            <NumberInput
              defaultValue={0}
              min={0}
              step={0.001}
              onChange={(q) => {
                setQuantity(q);
                setPxq(q * price);
              }}
              value={quantity}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box>
            Price
            <NumberInput
              defaultValue={0}
              min={0}
              step={0.01}
              onChange={(p) => {
                setPrice(parse(p));
                setPxq(quantity * p);
              }}
              value={format(price)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        </HStack>
        <Box mt={10}>
          <Stat>
            <StatLabel>Total</StatLabel>
            <StatNumber>$ {pxq}</StatNumber>
          </Stat>
        </Box>
      </>
    );
  };

  return (
    <>
      <Button onClick={onOpen}>Add Transaction</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Movement</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs isFitted variant="enclosed" colorScheme="black">
              <TabList mb="1em">
                <Tab>Buy</Tab>
                <Tab>Sell</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>{Tabpanel()}</TabPanel>
                <TabPanel>{Tabpanel()}</TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter>
            <Button mx={3} w="100%" onClick={onClose}>
              Add Movement
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddCoin;
