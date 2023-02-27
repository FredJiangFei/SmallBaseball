import { ThemeProps } from "styled-components/macro";
import { Theme } from "@mui/material";

export type GlobalStyleProps = {
  theme: ThemeProps<Theme> & { palette: any };
};
