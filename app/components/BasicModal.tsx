import React, { ReactNode } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  SxProps,
  Theme,
} from "@mui/material";
import roundClose from "../assets/svg/round-close-icon.svg";
import Image from "next/image";

interface BaseModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  CloseIconComponent?: ReactNode | undefined;
  maxWidth?: number;
  paperSx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
}

const BaseModal: React.FC<BaseModalProps> = ({
  open,
  onClose,
  title,
  children,
  CloseIconComponent,
  paperSx,
  contentSx,
  maxWidth,
}) => {
  const resolvedMaxWidth = maxWidth === undefined ? 523 : maxWidth;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            borderRadius: 3,
            ...paperSx,
            maxWidth: resolvedMaxWidth,
            pt: 0,
          },
        },
      }}
    >
      {title && (
        <DialogTitle
          sx={{
            fontWeight: 400,
            fontSize: { xs: 14, sm: 16 },
            color: "#A8A8A8",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: { xs: "16px 8px", sm: "16px 16px 16px 32px" },
            border: "1px solid #E3E3E3",
          }}
        >
          {title}
          <IconButton onClick={onClose} sx={{ p: 0 }}>
            {CloseIconComponent || (
              <Image
                src={roundClose}
                alt="close"
                style={{ width: 40, height: 40, padding: 0 }}
              />
            )}
          </IconButton>
        </DialogTitle>
      )}

      <DialogContent sx={{ p: 0, ...contentSx }}>{children}</DialogContent>
    </Dialog>
  );
};

export default BaseModal;
