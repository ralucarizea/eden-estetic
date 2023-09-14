import { ReactComponent as ComplexionIcon } from "./complexion.svg";
import { ReactComponent as NeckIcon } from "./neck.svg";
import { ReactComponent as EyesIcon } from "./eyes.svg";
import { ReactComponent as CleavageIcon } from "./cleavage.svg";
import { ReactComponent as LipsIcon } from "./lips.svg";
import { ReactComponent as HydratingIcon } from "./hydrating.svg";
import { ReactComponent as ExtrahydratingIcon } from "./extrahydrating.svg";
import { ReactComponent as LiftingIcon } from "./lifting.svg";
import { ReactComponent as PeelingIcon } from "./peeling.svg";
import { ReactComponent as AntiagingIcon } from "./antiaging.svg";
import { ReactComponent as PlumpingIcon } from "./plumping.svg";
import { ReactComponent as RejuvenatingIcon } from "./rejuvenating.svg";
import { ReactComponent as AcneIcon } from "./acne.svg";
import { ReactComponent as ScarsIcon } from "./scars.svg";
import { ReactComponent as CloggedporeIcon } from "./cloggedpore.svg";
import { ReactComponent as SensitiveIcon } from "./sensitive.svg";
import { ReactComponent as HairfallIcon } from "./hairfall.svg";
import { ReactComponent as OilyIcon } from "./oily.svg";
import { ReactComponent as DryIcon } from "./dry.svg";
import { ReactComponent as RosaceaIcon } from "./rosacea.svg";
import { ReactComponent as CleansingIcon } from "./cleansing.svg";
import { ReactComponent as CalmingIcon } from "./calming.svg";

import { Box } from "@chakra-ui/react";
export const icons = {
  ComplexionIcon: ComplexionIcon,
  CalmingIcon: CalmingIcon,
  NeckIcon: NeckIcon,
  EyesIcon: EyesIcon,
  CleavageIcon: CleavageIcon,
  LipsIcon: LipsIcon,
  HydratingIcon: HydratingIcon,
  ExtrahydratingIcon: ExtrahydratingIcon,
  LiftingIcon: LiftingIcon,
  PeelingIcon: PeelingIcon,
  AntiagingIcon: AntiagingIcon,
  PlumpingIcon: PlumpingIcon,
  RejuvenatingIcon: RejuvenatingIcon,
  AcneIcon: AcneIcon,
  ScarsIcon: ScarsIcon,
  CloggedporeIcon: CloggedporeIcon,
  SensitiveIcon: SensitiveIcon,
  HairfallIcon: HairfallIcon,
  OilyIcon: OilyIcon,
  DryIcon: DryIcon,
  RosaceaIcon: RosaceaIcon,
  CleansingIcon: CleansingIcon,
};

export default function StyledIcon(props) {
  const MyIcon = icons[props.definition];
  return <MyIcon width={"2.6em"} height={"2rem"} />;
}
