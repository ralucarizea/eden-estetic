import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import "../../assets/fonts/fonts.css";
import { green, beige } from "../../assets/constants/constants";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

// default base style from the Checkbox theme
const baseStyle = definePartsStyle({
  label: {
    fontFamily: "Montserrat",
    lineHeight: "8px",
    fontWeight: "400",
    letterSpacing: "-0.5px",
  },
  control: {
    height: 3,
    width: 3,
    padding: 0,
    border: "0.5px solid",
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
      fontSize: "14px",
      // marginLeft: 6
    }),
  }),
  md: definePartsStyle({
    control: defineStyle({}),
    label: defineStyle({
      fontSize: "13px",
    }),
  }),
};

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
});
