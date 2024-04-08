import { Box, Flex } from "@chakra-ui/react";
import { beige, green } from "../assets/constants/constants";
import data from "../assets/constants/data.json";
import { useEffect } from "react";

function PricingList() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const treatmentProcedures = data.services.procedures.filter(
    (procedure) => procedure.type === "treatment"
  );
  const makeupProcedures = data.services.procedures.filter(
    (procedure) => procedure.type === "pmu"
  );

  return (
    <Box bg={beige} color={green}>
      <Flex
        maxW="1000px"
        flexDirection="column"
        mx="auto"
        p={{ base: "20px", sm: "36px", md: "48px", lg: "64px", xl: "80px" }}
        fontFamily={"RollgatesLuxury"}
        fontWeight={"200"}
      >
        <Box
          p={`0px 0px 16px 0px`}
          fontFamily={"RollgatesLuxury"}
          fontSize={{
            base: "28px",
            xs: "32px",
            sm: "28px",
            md: "35px",
            lg: "40px",
            xl: "58px",
          }}
          lineHeight={{
            base: "30px",
            xs: "34px",
            sm: "30px",
            md: "36px",
            lg: "44px",
            xl: "55px",
          }}
          letterSpacing={"-1px"}
          fontWeight={"200"}
        >
          Lista de preturi
        </Box>
        <Box
          p={`0px 0px 16px 0px`}
          fontSize={{
            base: "24px",
            xs: "27px",
            sm: "25px",
            md: "31px",
            lg: "36px",
            xl: "50px",
          }}
        >
          Makeup
        </Box>
        <Box
          border={`1px solid ${green}`}
          display="flex"
          flexDirection="column"
          fontFamily={"Montserrat"}
        >
          {makeupProcedures.map((procedure) => (
            <Flex minH="60px" justifyContent="flex-end">
              <Box
                // padding="1rem 4rem 1rem 4rem"
                padding="1rem 1.8rem"
                fontWeight="400"
                fontSize={{
                  base: "13px",
                  xs: "14px",
                  sm: "15px",
                  md: "16px",
                  lg: "16.5px",
                  xl: "17px",
                }}
                textAlign="right"
              >
                {procedure.name} {procedure.nickname}
              </Box>
              <Box
                w={300}
                borderLeft={`1px solid ${green}`}
                // padding="1rem 8rem 1rem 4rem"
                padding="1rem 2rem"
                fontWeight="600"
              >
                {procedure.price} lei
              </Box>
            </Flex>
          ))}
        </Box>
        <Box
          p={`0px 0px 16px 0px`}
          fontFamily={"RollgatesLuxury"}
          fontSize={"48px"}
          letterSpacing={"-1px"}
          fontWeight={"200"}
          mt={32}
        >
          Tratamente
        </Box>
        <Box
          border={`1px solid ${green}`}
          display="flex"
          flexDirection="column"
          fontFamily={"Montserrat"}
        >
          {treatmentProcedures.map((procedure) => (
            <Flex minH="60px" justifyContent="flex-end">
              <Box
                padding="1rem 1.8rem"
                fontWeight="400"
                fontSize={{
                  base: "13px",
                  xs: "14px",
                  sm: "15px",
                  md: "16px",
                  lg: "16.5px",
                  xl: "17px",
                }}
                textAlign="right"
              >
                {procedure.name} {procedure.nickname}
              </Box>
              <Box
                 w={300}
                 borderLeft={`1px solid ${green}`}
                 // padding="1rem 8rem 1rem 4rem"
                 padding="1rem 2rem"
                 fontWeight="600"
              >
                {procedure.price} lei
              </Box>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}
export default PricingList;
