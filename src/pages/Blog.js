import { Flex } from "@chakra-ui/react";
import BlogpageHeading from "../components/ui/BlogpageHeading";
import BlogpageCard from "../components/ui/BlogpageCard";
import { beige } from "../assets/constants/constants";

export const blogContent = [
  {
    date: "1 AUGUST 2023",
    title: "Îngrijirea tenului după procedurile de make-up permanent",
    content:
      "Mollis pretium lorem primis senectus habitasse lectus scelerisque donec, ultricies tortor suspendisse adipiscing fusce morbi volutpat pellentesque, consectetur mi risus molestie curae malesuada cum.",
    category: "Îngrijire",
    srcImage: "../assets/images/11.jpg",
  },
  {
    date: "2 iulie 2022",
    title: "Cum aflu ce tratament i se potrivește tenului meu?",
    content:
      "Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Et tortor consequat id porta nibh venenatis cras. Risus at ultrices mi tempus imperdiet nulla.  Nascetur ridiculus mus mauris vitae ultricies leo integer.",
    category: "Trucuri",
    srcImage: "../assets/images/12.jpg",
  },
  {
    date: "3 aprilie 2022",
    title: "Îngrijirea tenului în sarcină",
    content:
      "Orci nulla pellentesque dignissim enim sit amet. Feugiat vivamus at augue eget arcu dictum. Tempor orci dapibus ultrices in. Vulputate eu scelerisque felis imperdiet. ",
    category: "Îngrijire",
    srcImage: "../assets/images/15.jpg",
  },
  {
    date: "4 septembrie 2021",
    title: "Personalizarea unui tratament - care sunt beneficiile?",
    content:
      "Posuere urna nec tincidunt praesent semper feugiat nibh. Faucibus turpis in eu mi bibendum neque egestas congue. Facilisis magna etiam tempor orci. Scelerisque purus semper eget duis at tellus at urna condimentum. Viverra aliquet eget sit amet. Justo nec ultrices dui sapien eget mi proin sed libero. . Montes nascetur ridiculus mus mauris vitae ultricies. Et tortor at risus viverra. ",
    category: "Întrebări & răspunsuri",
    srcImage: "../assets/images/20.jpg",
  },
  {
    date: "5 martie 2023",
    title: "Adaptarea rutinei în funcție de anotimpuri",
    content:
      "Sit amet aliquam id diam maecenas ultricies mi. Sit amet massa vitae tortor condimentum lacinia quis. Ipsum nunc aliquet bibendum enim. Suscipit adipiscing bibendum est ultricies integer quis auctor. Sit amet mattis vulputate enim nulla.",
    category: "Hidratare",
    srcImage: "../assets/images/19.jpg",
  },
  {
    date: "6 februarie 2020",
    title: "Mezoterapia cu microace vs. fracționată ",
    content:
      "Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Ornare aenean euismod elementum nisi quis eleifend.",
    category: "Tratament",
    srcImage: "../assets/images/17.jpg",
  },
];

export default function Blog() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={`${beige}`}
      flexDirection={"column"}
    >
      <BlogpageHeading />
      <Flex gap="8px" flexDirection="row" overflow={"hidden"} pb="48px">
        <Flex width="min-content" gap="8px" flexDirection="column">
          <BlogpageCard post={blogContent[0]} />
          <BlogpageCard post={blogContent[1]} />
        </Flex>

        <Flex width="min-content" gap="8px" flexDirection="column">
          <BlogpageCard post={blogContent[2]} />
          <BlogpageCard post={blogContent[3]} />
        </Flex>
        <Flex width="min-content" gap="8px" flexDirection="column">
          <BlogpageCard post={blogContent[4]} />
          <BlogpageCard post={blogContent[5]} />
        </Flex>
      </Flex>
    </Flex>
  );
}
