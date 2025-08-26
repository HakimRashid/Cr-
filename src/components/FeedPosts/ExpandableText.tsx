import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, type BoxProps, Text } from "@chakra-ui/react";

//Note: This component uses -webkit-line-clamp which is not supported in all browsers (notably Firefox).
// This code was partially written by ChatGPT.

type ExpandableTextProps = BoxProps & {
  lines?: number; // how many lines to show when collapsed (default 1)
  buttonLabelMore?: string;
  buttonLabelLess?: string;
};

export function ExpandableText({
  children,
  lines = 1,
  buttonLabelMore = "See more",
  buttonLabelLess = "See less",
  ...boxProps
}: ExpandableTextProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [needsToggle, setNeedsToggle] = useState(false);

  const measure = () => {
    const el = ref.current;
    if (!el) return;

    // Remove clamp to measure full height
    el.style.removeProperty("display");
    el.style.removeProperty("-webkit-box-orient");
    (el.style as any).webkitLineClamp = "";
    el.style.removeProperty("overflow");

    const fullHeight = el.scrollHeight;

    // Apply clamp to measure collapsed height
    el.style.display = "-webkit-box";
    el.style.webkitBoxOrient = "vertical";
    (el.style as any).webkitLineClamp = String(lines);
    el.style.overflow = "hidden";

    const clampedHeight = el.clientHeight;

    // Decide if toggle is needed
    setNeedsToggle(fullHeight > clampedHeight + 1);

    // If expanded, restore full view
    if (expanded) {
      el.style.removeProperty("display");
      el.style.removeProperty("-webkit-box-orient");
      (el.style as any).webkitLineClamp = "";
      el.style.removeProperty("overflow");
    }
  };

  useLayoutEffect(() => {
    measure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, lines]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box {...boxProps}>
      <Box
        ref={ref}
        style={
          expanded
            ? {}
            : {
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: String(lines),
                overflow: "hidden",
              }
        }
      >
        {children}
      </Box>

      {needsToggle && (
        <Text
          onClick={() => setExpanded(!expanded)}
          color="gray.500"
          fontWeight="bold"
          cursor="pointer"
          _hover={{ textDecoration: "underline" }}
          mt={1}
        >
          {expanded ? buttonLabelLess : buttonLabelMore}
        </Text>
      )}
    </Box>
  );
}
export default ExpandableText;