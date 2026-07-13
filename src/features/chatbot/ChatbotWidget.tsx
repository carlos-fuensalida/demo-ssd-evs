"use client";

import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";

/**
 * Placeholder UI only. The chatbot connects to a separate backend and
 * needs a decision on: global vs. view-scoped context, and whether calls
 * go through our backend or directly to the chatbot backend — see
 * .specs/constitution.md Architecture notes and Open Questions
 * ("Chatbot frontend").
 */
export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Fab
        color="primary"
        aria-label="Open assistant"
        onClick={() => setIsOpen(true)}
        sx={{ position: "fixed", bottom: 24, right: 24 }}
      >
        <ChatIcon />
      </Fab>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ width: 360, p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Assistant</Typography>
            <IconButton aria-label="Close assistant" onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Chatbot integration pending backend and context-scope decisions.
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
