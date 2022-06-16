import {
  Button,
  Container,
  Grid,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ArrowForwardIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import styles from "./OffersPage.module.css";
import axios from "axios";

const Offers = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/OffersData`).then((r) => {
      setProduct(r.data);
    });
  }, []);

  return (
    <>
      <p className={styles.sidTitle}>
        {" "}
        Special Offers From Your Favorite Stores
      </p>
      <br />
      <div
        style={{
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <InputGroup style={{ width: "30%" }}>
          <Input pr="4.5rem" placeholder="Search store name" />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem">
              <SearchIcon />
            </Button>
          </InputRightElement>
        </InputGroup>

        <br />

        {/* Share Button */}
        <div style={{ position: "relative", marginLeft: "15px" }}>
          <Button colorScheme="black" variant="outline">
            Share
          </Button>
        </div>
      </div>

      <br />
      <br />
      {/* ------------------------------------------------------------ */}

      <div className={styles.sidGrid}>
        {product.map((el) => (
          <div className={styles.sidGrid_Container}>
            <div
              style={{
                width: "250px",
                height: "150px",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  margin: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  paddingTop: "35px",
                  verticalAlign: "middle",
                }}
                src={el.coupone_merchant_logo_src}
              />
            </div>

            <Button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `${el.d_block_href}`;
              }}
              style={{ margin: "10px" }}
            >
              SHOP NOW
            </Button>

            <div style={{ margin: "20px" }}>
              <p>{el.card_text}</p>

              <hr style={{ margin: "10px" }}></hr>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p>{el.b_size1}</p>
                  <p>{el.b_size}</p>
                </div>

                <div
                  style={{
                    height: "45px",
                    width: "45px",
                    borderRadius: "25px",
                    backgroundColor: "#f8f7f6",
                  }}
                >
                  <img
                    style={{ margin: "15px" }}
                    src="https://i.ibb.co/41tX2SP/share-icon.png"
                    alt="No image"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --------------------------------------------------------------- */}
    </>
  );
};

export default Offers;
