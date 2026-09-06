/* =========================
   TELEGRAM CONFIG
========================= */
const telegramUsername = "LandsMay2";

/* =========================
   BUY NOW BUTTONS
========================= */
const buyButtons = document.querySelectorAll(".cta-button");

buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.getAttribute("data-title") || "Product";
    const price = button.getAttribute("data-price") || "";

    const message = `💳 PAYMENT INSTRUCTIONS

📦 Product: ${title}
💰 Price: ${price}

To complete your purchase, please follow these steps:

1️⃣ Buy a Binance Gift Card with a value equal to the product price: ${price}.

🛒 Buy your Binance Gift Card here:
https://www.g2a.com/best-deals/binance-gift-cards

2️⃣ After purchasing the Gift Card, check the email/account you used for the purchase to receive your Gift Card code.

3️⃣ Copy the Gift Card code.

4️⃣ Send the code in this Telegram chat.

🤖 Once the payment is confirmed, your order will be processed in 30 seconds.

⚠️ IMPORTANT:

• Only send the Gift Card code.
• Never send your password, email password, 2FA code, or other account credentials.

Thank you for your purchase! 🙏

📌 PLEASE SAVE THIS MESSAGE
Keep this message for your records.`;

    const url = `https://telegram.me/${telegramUsername}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });
});

/* =========================
   FULL MENU BUTTON
========================= */
const fullMenuBtn = document.getElementById("fullMenuBtn");

if (fullMenuBtn) {
  fullMenuBtn.addEventListener("click", () => {
    const price = "150USD";

    const message = `💳 PAYMENT INSTRUCTIONS

📦 Product: FULL CONTENT
💰 Price: 150USD

To complete your purchase, please follow these steps:

1️⃣ Buy a Binance Gift Card with a value equal to the product price: 150USD.

🛒 Buy your Binance Gift Card here:
https://www.g2a.com/best-deals/binance-gift-cards

2️⃣ After purchasing the Gift Card, check the email/account you used for the purchase to receive your Gift Card code.

3️⃣ Copy the Gift Card code.

4️⃣ Send the code in this Telegram chat.

🤖 Once the payment is confirmed, your order will be processed in 30 seconds.

⚠️ IMPORTANT:

• Only send the Gift Card code.
• Never send your password, email password, 2FA code, or other account credentials.

Thank you for your purchase! 🙏

📌 PLEASE SAVE THIS MESSAGE
Keep this message for your records.`;

    const url = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });
}

/* =========================
   VIDEO CARDS
========================= */
document.querySelectorAll(".video-card").forEach((card) => {
  const wrapper = card.querySelector(".thumbnail-wrapper");
  const video = card.querySelector("video");

  if (!wrapper || !video) return;

  wrapper.addEventListener("click", () => {
    wrapper.style.display = "none";
    video.style.display = "block";
    video.load();
    video.play().catch(() => {});
  });
});
