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
    (procedure) => procedure.type === "treatment",
  );
  const makeupProcedures = data.services.procedures.filter(
    (procedure) => procedure.type === "pmu",
  );

  return (
    <Box bg={beige}>
      <Flex maxW="1000px" flexDirection="column" mx="auto" p="24">
        <Box
          p={`0px 0px 16px 0px`}
          fontFamily={"RollgatesLuxury"}
          fontSize={"76px"}
          letterSpacing={"-1px"}
          fontWeight={"200"}
        >
          Lista de preturi
        </Box>
        <Box
          p={`0px 0px 16px 0px`}
          fontFamily={"RollgatesLuxury"}
          fontSize={"48px"}
          letterSpacing={"-1px"}
          fontWeight={"200"}
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
                padding="1rem 2rem"
                w={900}
                textAlign="right"
              >
                {procedure.name} {procedure.nickname}
              </Box>
              <Box
                w={300}
                borderLeft={`1px solid ${green}`}
                // padding="1rem 8rem 1rem 4rem"
                padding="1rem 2rem"
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
                // padding="1rem 4rem 1rem 4rem"
                padding="1rem 2rem"
                w={900}
                textAlign="right"
              >
                {procedure.name} {procedure.nickname}
              </Box>
              <Box
                w={300}
                borderLeft={`1px solid ${green}`}
                // padding="1rem 8rem 1rem 4rem"
                padding="1rem 2rem"
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
