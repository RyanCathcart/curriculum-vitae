import { Button } from "@mui/material";
import { ReactNode } from "react";

interface HiddenButtonProps {
  children?: string;
  icon?: ReactNode;
  link: string;
  transition: string;
}

export default function HiddenButton(props: HiddenButtonProps) {
  const { children, icon, link, transition } = props;

  const handleClick = () => {
    link === "/" ? window.location.replace(link) : window.open(link);
  }

  return (
    <Button
      className="hidden-button"
      variant="outlined"
      color="primary"
      startIcon={icon}
      onClick={handleClick}
      sx={{
        visibility: "collapse",
        pointerEvents: "none",
        touchAction: "none",
        minWidth: "10em",
        borderRadius: 1,
        margin: 1,
        backgroundColor: "hsla(0, 0%, 95%, 90%)",
        filter: "opacity(0%)",
        transition: transition,
      }}
    >
      {children}
    </Button>
  );
}
