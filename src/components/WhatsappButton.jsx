import React from 'react';

const WhatsAppButton = () => {
  const phone = '923289975150';         // ← your number
  const message = encodeURIComponent(
    "Hello, I'm interested in Eagle Wood Works."
  );
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      WhatsApp Us
    </a>
  );
};

export default WhatsAppButton;
