import { Box, BoxProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";



export function Section({ children, ...props }: BoxProps & PropsWithChildren) {
  return <Box as="section" {...props}>
    {children}
  </Box>
}
