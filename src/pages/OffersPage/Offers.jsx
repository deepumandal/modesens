import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import styles from "./OffersPage.module.css";

const Offers = () => {
  return (
    <>
      <p> Special Offers From Your Favorite Stores</p>
      <br /><br />
      <InputGroup className={styles.sidInput}>
        <Input
          pr="4.5rem"
          placeholder="Search store name"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem">
            <SearchIcon />
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default Offers;
