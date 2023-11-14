import React from "react";
import { beige, green } from "../assets/constants/constants";
import { useEffect } from "react";
import { Box, Divider, Flex, Grid, Hide, Show, Text } from "@chakra-ui/react";
import {
  BlogArticleImageBox,
  BlogArticleLayoutBox,
  BlogArticleTag,
  BlogArticleTitleBig,
  BlogArticleTitleMedium,
  LatestBlogArticleLayoutBox,
} from "../assets/constants/styledcomponents";
export const articleTags = ["PMU", "Skincare acasă", "Beauty", "Cursuri"];
export const blogContent = [
  {
    date: "1 AUGUST 2023",
    tag: "PMU",
    title:
      "Cum sa îngrijim o anumita zona a fetei dupa efectuarea unui tratament?",
    content:
      "Mollis pretium lorem primis senectus habitasse lectus scelerisque donec, ultricies tortor suspendisse adipiscing fusce morbi volutpat pellentesque, consectetur mi risus molestie curae malesuada cum.",
    category: "Îngrijire",
    srcImage: "https://picsum.photos/900",
  },
  {
    date: "2 iulie 2022",
    tag: "Beauty",
    title:
      "Cum aflam ce tipuri de tratamente dermato-estetice ni s-ar potrivi?",
    content:
      "Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Et tortor consequat id porta nibh venenatis cras. Risus at ultrices mi tempus imperdiet nulla.  Nascetur ridiculus mus mauris vitae ultricies leo integer.",
    category: "Trucuri",
    srcImage: "https://picsum.photos/1000",
  },
  {
    date: "3 aprilie 2022",
    tag: "Skincare acasă",
    title: "Ce ingrediente sunt de evitat în produsele de îngrijire a pielii",
    content:
      "Orci nulla pellentesque dignissim enim sit amet. Feugiat vivamus at augue eget arcu dictum. Tempor orci dapibus ultrices in. Vulputate eu scelerisque felis imperdiet. ",
    category: "Îngrijire",
    srcImage: "https://picsum.photos/1000/900",
  },
  {
    date: "4 septembrie 2021",
    tag: "Beauty",
    title: "Personalizarea unui tratament - care sunt beneficiile?",
    content:
      "Posuere urna nec tincidunt praesent semper feugiat nibh. Faucibus turpis in eu mi bibendum neque egestas congue. Facilisis magna etiam tempor orci. Scelerisque purus semper eget duis at tellus at urna condimentum. Viverra aliquet eget sit amet. Justo nec ultrices dui sapien eget mi proin sed libero. . Montes nascetur ridiculus mus mauris vitae ultricies. Et tortor at risus viverra. ",
    category: "Întrebări & răspunsuri",
    srcImage: "https://picsum.photos/800/1000",
  },
  {
    date: "5 martie 2023",
    tag: "PMU",
    title: "Adaptarea rutinei în funcție de anotimpuri",
    content:
      "Sit amet aliquam id diam maecenas ultricies mi. Sit amet massa vitae tortor condimentum lacinia quis. Ipsum nunc aliquet bibendum enim. Suscipit adipiscing bibendum est ultricies integer quis auctor. Sit amet mattis vulputate enim nulla.",
    category: "Hidratare",
    srcImage: "https://picsum.photos/950/1000",
  },
  {
    date: "6 februarie 2020",
    tag: "Beauty",
    title: "Mezoterapia cu microace vs. fractionata ",
    content:
      "Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Ornare aenean euismod elementum nisi quis eleifend.",
    category: "Tratament",
    srcImage: "https://picsum.photos/950/900",
  },
];

export default function Blog() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Flex
      justifyContent={"flex-start"}
      flexDirection={"column"}
      alignItems={"center"}
      height="fit-content"
      backgroundColor={beige}
      color={green}
      pt="15vh"
      fontFamily={"Montserrat"}
      weight="400"
      letterSpacing={"-0.5px"}
      px="8vw"
    >
      <Box borderBottom={`1px solid ${green}`} width="100%" pb="6vh">
        {" "}
        <Text
          fontSize="calc(40px + 1.690625vw)"
          fontFamily={"RollgatesLuxury"}
          mb="1vh"
        >
          Blog
        </Text>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            "@media only screen and (max-width: 971px)": {
              flexDirection: "column",
              alignItems: "flex-start",
            },
          }}
        >
          <Box
            fontSize={"calc(16.5px + 0.290625vw)"}
            // minWidth="80vw"
            maxWidth="50%"
            lineHeight={"calc(25px + 0.390625vw)"}
            pr="36px"
            pb="24px"
            sx={{
              "@media only screen and (max-width: 971px)": {
                maxWidth: "90%",
              },
            }}
          >
            Află despre cele mai noi tratamente, recomandări sau secrete de
            beauty de la un expert în domeniu.
          </Box>

          <Flex justifyContent={"flex-end"} wrap={"wrap"}>
            {articleTags?.map((article) => (
              <BlogArticleTag>{article}</BlogArticleTag>
            ))}
          </Flex>
        </Flex>
      </Box>
      <Grid
        height="auto"
        rowGap="4vw"
        gridTemplateColumns={"repeat(auto-fit, minmax(400px, 0.8fr))"}
        justifyContent={"center"}
        pt="6vh"
        width={"100%"}
        marginBottom={"10vh"}
      >
        <LatestBlogArticleLayoutBox>
          <BlogArticleImageBox
            height="22em"
            srcImage={"https://picsum.photos/1200"}
          />
          <BlogArticleTag>PMU</BlogArticleTag>
          <BlogArticleTitleBig>
            Cum sa îngrijim o anumita zona a fetei dupa efectuarea unui
            tratament?
          </BlogArticleTitleBig>
        </LatestBlogArticleLayoutBox>
        <LatestBlogArticleLayoutBox>
          <BlogArticleImageBox
            height="22em"
            srcImage={"https://picsum.photos/1100"}
          />
          <BlogArticleTag>Beauty</BlogArticleTag>
          <BlogArticleTitleBig>
            Cum aflam ce tipuri de tratamente dermato-estetice ni s-ar potrivi?
          </BlogArticleTitleBig>
        </LatestBlogArticleLayoutBox>
      </Grid>
      <Grid
        borderTop={`0.5px solid ${green}`}
        height="auto"
        width="100%"
        pt={"64px"}
        // gap="4vw"
        gridTemplateColumns={"repeat(auto-fit, minmax(380px, 0.7fr))"}
        letterSpacing={"0px"}
        rowGap={"7vh"}
        justifyContent={"center"}
        marginBottom={"15vh"}
      >
        {blogContent?.map((post) => (
          <BlogArticleLayoutBox>
            <BlogArticleImageBox height="15em" srcImage={post.srcImage} />
            <BlogArticleTag>{post.tag}</BlogArticleTag>
            <BlogArticleTitleMedium>
              <Text as="b">{post.title}</Text>
            </BlogArticleTitleMedium>
          </BlogArticleLayoutBox>
        ))}
        {/* <BlogArticleLayoutBox>
          {" "}
          <BlogArticleImageBox height="15em" />
          <BlogArticleTag>Beauty</BlogArticleTag>
          <BlogArticleTitleMedium>
            <Text as="b">
              {" "}
              Ce ingrediente sunt de evitat în produsele de îngrijire a pielii{" "}
            </Text>
          </BlogArticleTitleMedium>
        </BlogArticleLayoutBox>
        <BlogArticleLayoutBox>
          {" "}
          <BlogArticleImageBox height="15em" />
          <BlogArticleTag>PMU</BlogArticleTag>
          <BlogArticleTitleMedium>
            <Text as="b">
              Întretinerea machiajului permanent:{" "}
              <Text as="i">Sfaturi pentru longevitate</Text>
            </Text>
          </BlogArticleTitleMedium>
        </BlogArticleLayoutBox>
        <BlogArticleLayoutBox>
          {" "}
          <BlogArticleImageBox height="15em" />
          <BlogArticleTag>Beauty</BlogArticleTag>
          <BlogArticleTitleMedium>
            <Text as="b">
              Stiinta tratamentelor anti-îmbatrânire pe baza de laser{" "}
            </Text>
          </BlogArticleTitleMedium>
        </BlogArticleLayoutBox>
        <BlogArticleLayoutBox>
          {" "}
          <BlogArticleImageBox height="15em" />
          <BlogArticleTag>PMU</BlogArticleTag>
          <BlogArticleTitleMedium>
            <Text as="b">
              Ghidul complet al tratamentelor dermato-cosmetice personalizate
            </Text>
          </BlogArticleTitleMedium>
        </BlogArticleLayoutBox>
        <BlogArticleLayoutBox>
          {" "}
          <BlogArticleImageBox height="15em" />
          <BlogArticleTag>Beauty</BlogArticleTag>
          <BlogArticleTitleMedium>
            <Text as="b">
              Legatura dintre soare si rezultatele obtinute in urma
              tratamentelor dermato-cosmetice
            </Text>
          </BlogArticleTitleMedium>
        </BlogArticleLayoutBox>
        <BlogArticleLayoutBox>
          {" "}
          <BlogArticleImageBox height="15em" />
          <BlogArticleTag>Beauty</BlogArticleTag>
          <BlogArticleTitleMedium>
            <Text as="b">
              Îngrijirea de sine & încrederea în sine: Cum serviciile de
              înfrumusețare cresc încrederea în sine
            </Text>
          </BlogArticleTitleMedium>
        </BlogArticleLayoutBox> */}
      </Grid>
    </Flex>
  );
}
