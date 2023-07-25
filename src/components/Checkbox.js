import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import "../assets/fonts/fonts.css";
import { green, beige } from "../assets/constants/constants";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

// default base style from the Checkbox theme
const baseStyle = definePartsStyle({
  label: {
    fontFamily: "Montserrat",
    fontSize: "Montserrat",
    lineHeight: "14px",
    letterSpacing: "-0.5px",
    // boxSize: 24,
  },
  control: {
    height: 3,
    width: 3,
    padding: 0,
    border:"0.5px solid",
    borderRadius: 0,
    borderColor: `${green}`,
  },
});

// Defining a custom variant
const variantCircular = definePartsStyle({
  control: defineStyle({
    rounded: "full",
  }),
});
const variantRectangular = definePartsStyle({
  control: defineStyle({}),
});

const variants = {
  circular: variantCircular,
  rectangular: variantRectangular,
};

const sizes = {
  s: definePartsStyle({
    control: defineStyle({}),
    label: defineStyle({
      // fontSize: "14px",
      // marginLeft: 6
    }),
  }),
};

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
});
