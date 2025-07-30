import React from "react";

const WhatsappButton = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const whatsappMessage = import.meta.env.VITE_WHATSAPP_MESSAGE;

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <button class="whatsapp-button" onClick={handleClick}>
      Chat with us on WhatsApp
    </button>
  );
};

export default WhatsappButton;
