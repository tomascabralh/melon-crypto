import React, { useState, useEffect } from "react";
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
import { getDatabase, ref, set, onValue, update } from "firebase/database";
import { useAuth } from "../../contexts/AuthContext";
import SearchCoin from "../../search/SearchCoin";

const AddCoin = ({ stats }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [price, setPrice] = useState("0");
  const [quantity, setQuantity] = useState("0");
  const [pxq, setPxq] = useState(0);
  const [coin, setCoin] = useState(0);
  const [action, setAction] = useState("buy");
  const [counter, setCounter] = useState();
  const [max, setMax] = useState(Infinity);

  const { currentUser } = useAuth();

  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, "");

  const openModal = () => {
    onOpen();
    setAction("buy");
  };

  const getCoin = (coin) => {
    setCoin(coin);
    setPrice(coin.current_price);
    if (action === "sell") {
      var filter = stats.filter(function (Coin) {
        return coin.id.includes(Coin.coin);
      });
      console.log(filter);
      setMax(filter[0].holdings);
    } else {
      setMax(Infinity);
    }
  };

  const setMovement = () => {
    set(ref(getDatabase(), `users/${currentUser?.uid}/portfolio/` + counter), {
      coin: coin.id,
      action: action,
      price: price,
      quantity: quantity,
      pxq: pxq,
    });
  };

  const addTransaction = () => {
    if (pxq !== 0) {
      if (counter === 0) {
        set(ref(getDatabase(), `users/${currentUser?.uid}/portfolio`), {
          idCounter: counter,
        });
        setMovement();
        onClose();
        setPrice("0");
        setQuantity("0");
        setPxq(0);
      } else {
        update(ref(getDatabase(), `users/${currentUser?.uid}/portfolio`), {
          idCounter: counter,
        });
        setMovement();
        onClose();
        setPrice("0");
        setQuantity("0");
        setPxq(0);
      }
    }
  };

  useEffect(() => {
    const starCountRef = ref(
      getDatabase(),
      `users/${currentUser?.uid}/portfolio`
    );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data === null) {
        setCounter(0);
      } else {
        const dbref = ref(getDatabase(), `users/${currentUser?.uid}/portfolio`);
        onValue(dbref, (snapshot) => {
          const idData = snapshot.val();
          setCounter(idData.idCounter + 1);
        });
      }
    });
  }, [currentUser]);

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
              max={max}
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
      <Button onClick={openModal} size="sm">
        + Transaction
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Movement</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs
              isFitted
              variant="enclosed"
              colorScheme="black"
              onChange={(index) => {
                if (index === 0) {
                  setAction("buy");
                } else {
                  setAction("sell");
                }
              }}
            >
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
            <Button mx={3} w="100%" onClick={addTransaction}>
              Add Movement
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddCoin;
