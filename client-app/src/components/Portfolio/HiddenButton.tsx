import { Button } from "@mui/material";

interface HiddenButtonProps {
  label: string;
  link: string;
  transition: string;
}

export default function HiddenButton(props: HiddenButtonProps) {
  const { label, link, transition } = props;
  return (
    <Button
      className="hidden-button"
      variant="outlined"
      color="primary"
      href={link}
      sx={{
        visibility: "collapse",
        pointerEvents: "none",
        touchAction: "none",
        minWidth: "10em",
        borderRadius: 1,
        margin: 1,
        filter: "opacity(0%)",
        transition: transition,
      }}
    >
      {label}
    </Button>
  );
}
