import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import "../assets/fonts/fonts.css";
import thin from "../assets/images/thinLineEllipse.svg";
import {
  // productMenuGridColNumber,s
  green,
  beige,
  // translatedTags,
} from "../assets/constants/constants";
import {
  DiagnosisCaption,
  DiagnosisHeading,
  DiagnosisNumberedElement,
} from "../assets/constants/styledcomponents";

const DiagnosisSubmenu = () => {
  return (
    <>
      <Grid
        templateColumns="1fr"
        templateRows="repeat(3, minmax(500px, 1fr))"
        gap={24}
        py={32}
        px={16}
        textAlign={"left"}
      >
        <Flex>
          <Box
            display="inline-block"
            opacity="0.30   "
            position="relative"

            // border={"1px solid red"}
          >
            <Image src={`${thin}`} alt="" minWidth="20vw" />
            {/* <Box
              h="45vh"
              w="35vw"
              borderRadius="50%"
              transform="rotate(103deg)"
              border={`1px solid ${green}`}
              // borderColor="gray.500"
              // bg="#e1ecf4"
              zIndex="0"
            ></Box> */}
            <DiagnosisNumberedElement
              position="absolute"
              // transform={"translate(-50%, -50%)"}
              // transform="rotate(0deg)"
              left="42%"
              top="47%"
              zIndex="2"
            >
              1.
            </DiagnosisNumberedElement>
          </Box>
          <Box
            display="inline-block"
            position={"absolute"}
            left="25%"
            pr="80px"
            width="70%"
            // border={`1px solid ${green}`}
          >
            <DiagnosisHeading>
              Ce presupun diagnoza si consultanta în cosmetica?
            </DiagnosisHeading>
            <DiagnosisCaption>
              {" "}
              Diagnoza și consultanța în cosmetica facială reprezintă două etape
              esențiale în îngrijirea și îmbunătățirea aspectului pielii feței.
              Aceste servicii au ca scop evaluarea individuală a nevoilor pielii
              feței și furnizarea de recomandări personalizate pentru a obține
              rezultate optime.{" "}
              <Text fontWeight={"500"} pt="4px">
                Diagnoza în cosmetica facială:
              </Text>
              <UnorderedList pb="4px" pl="8px">
                <ListItem>
                  {" "}
                  Analiza pielii feței: Se evaluează tipul de piele, nivelul de
                  hidratare, sensibilitatea, porii, textura, tonul, acneea,
                  petele sau alte probleme specifice tenului.
                </ListItem>
                <ListItem>
                  Identificarea problemelor: Se recunosc și se documentează
                  problemele sau condițiile existente ale pielii, cum ar fi
                  ridurile, liniile fine, acnee, hiperpigmentare sau probleme
                  ale elasticității pielii.
                </ListItem>
                <ListItem>
                  Utilizarea tehnicilor specializate: Diagnoza poate implica
                  folosirea unor instrumente și aparate speciale pentru a evalua
                  în mod precis sănătatea pielii și pentru a determina nevoile
                  individuale ale fiecărei persoane.
                </ListItem>
              </UnorderedList>
              <Text fontWeight={"500"} pt="4px">
                Consultanța în cosmetica facială:
              </Text>
              <UnorderedList pl="16px">
                <ListItem>
                  {" "}
                  Recomandări personalizate: Pe baza diagnozei, specialistul în
                  cosmetica facială oferă sfaturi și soluții personalizate
                  pentru îmbunătățirea sănătății și aspectului pielii feței.
                </ListItem>
                <ListItem>
                  Tratamente și proceduri sugerate: Se furnizează informații cu
                  privire la tratamentele cosmetice potrivite pentru fiecare
                  problemă identificată în diagnoză, cum ar fi tratamente
                  faciale, exfoliere chimică, terapii cu laser, terapie cu
                  lumina intens pulsată (IPL) sau alte proceduri specifice
                  tenului.
                </ListItem>
                <ListItem>
                  Produse recomandate: Specialistul poate sugera produse
                  cosmetice adecvate pentru tipul de piele și pentru a susține
                  rezultatele tratamentelor recomandate.
                </ListItem>
              </UnorderedList>
            </DiagnosisCaption>
          </Box>
        </Flex>
        <Box
        // bg="gray.200"
        >
          <Box
            // border="2px solid chartreuse"
            // p="0px 120px 0px 120px"
            // mt="80px"
            // width={"80%"}
            minHeight={"80vh"}
            width="90%"
            pl="100px"
          >
            <DiagnosisHeading>
              De ce & cand este nevoie de diagnoza cosmetica?
            </DiagnosisHeading>

            <DiagnosisCaption position={"relative"}>
              {" "}
              Phasellus porta luctus erat ac sodales. Nunc facilisis leo ut urna
              pellentesque finibus id eget ligula. Morbi et neque a lacus
              accumsan ultrices. Fusce tempor pellentesque lacus, ut dapibus
              tellus elementum quis. Integer maximus pretium ipsum sit amet
              mattis. Morbi feugiat, felis nec vehicula iaculis, nibh ligula
              auctor dui, ut egestas dui felis sed quam. Mauris nisl arcu,
              interdum sit amet nulla sit amet, venenatis condimentum purus. Nam
              non feugiat ipsum. In hac habitasse platea dictumst. Integer
              mattis nisl vitae dictum tempus. Nam sit amet velit nisi. Praesent
              eget urna quis mauris blandit dapibus. In semper lacus aliquam
              felis blandit, sit amet scelerisque enim gravida. Suspendisse
              finibus lectus vitae leo faucibus, eget rutrum orci tincidunt.
              Etiam et sagittis leo. Vivamus ullamcorper ipsum ut vehicula
              elementum.
              <Box position="absolute" right="-4%" top="0%" opacity={"0.3"}>
                <Image
                  src={`${thin}`}
                  alt=""
                  minWidth="20vw"
                  float="right"
                  // border="2px solid purple"
                />
                <DiagnosisNumberedElement
                  position={"absolute"}
                  top="52%"
                  right="0%"
                  transform={"translate(-50%, -50%)"}
                  s
                >
                  2.
                </DiagnosisNumberedElement>
              </Box>
            </DiagnosisCaption>
          </Box>
        </Box>
        <Box>
          <Box p="0px 120px 0px 0px" position="relative" minHeight={"80vh"}>
            <Box
              display="inline-block"
              opacity="0.3"
              position="relative"

              // border={"1px solid red"}
            >
              <Image src={`${thin}`} alt="" minWidth="20vw" />
              <DiagnosisNumberedElement
                position="absolute"
                left="33%"
                top="50%"
                zIndex="2"
              >
                3.
              </DiagnosisNumberedElement>
            </Box>
            <Box
              display="inline-block"
              position={"absolute"}
              left="19%"
              // border="1px solid red"
              pl="20px"
            >
              <DiagnosisHeading>
                In ce consta o sedinta de diagnoza cosmetica?
              </DiagnosisHeading>
              <DiagnosisCaption>
                {" "}
                Morbi malesuada sapien ligula, et accumsan nibh semper sed.
                Maecenas sollicitudin felis imperdiet elit fringilla, vel
                volutpat turpis molestie. Phasellus eu libero nec sem
                scelerisque porttitor. Morbi in sapien sed neque bibendum
                tincidunt et sit amet sem. Maecenas nulla enim, tincidunt vitae
                fermentum non, blandit mattis orci. Duis nec suscipit lacus.
                Mauris vitae nunc id risus molestie condimentum a sit amet
                lectus. Donec efficitur enim eu aliquet gravida. Aliquam posuere
                efficitur vehicula. Morbi at condimentum massa. Donec nec
                convallis sapien. Maecenas rutrum lacus eget purus tempus
                aliquet. Donec dictum ex in sodales suscipit. Vivamus eget
                lacinia tellus. Cras elementum lacus ligula, sed venenatis leo
                pulvinar sit amet. Proin pharetra, elit ac semper porta, purus
                augue posuere ipsum, in suscipit leo ipsum sed erat. Nullam
                gravida pulvinar ipsum id interdum. In faucibus mattis felis,
                imperdiet interdum risus condimentum sit amet. Vestibulum nec
                bibendum erat. In condimentum ut nisi at congue. Aenean congue
                interdum porta. Aenean dictum mi orci, sit amet vestibulum
                tortor placerat vel. Cras a mi leo. In in ultricies odio. Duis
                rhoncus metus sit amet mi venenatis, ac tristique leo facilisis.
                Duis vestibulum diam vel auctor vestibulum. Maecenas eu lacinia
                odio, sit amet bibendum odio. Nam at ultrices nunc.
              </DiagnosisCaption>
            </Box>
          </Box>{" "}
        </Box>
      </Grid>
      {/* <Box></Box> */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

      {/* <Box width="100%" height="300px"></Box> */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* */}
    </>
  );
};
export default DiagnosisSubmenu;
