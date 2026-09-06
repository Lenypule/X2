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

🛒 **Complete your purchase**

To pay **${price}**, follow these steps:

**1️⃣ Buy a Binance Gift Card** for **${price}**:
https://www.g2a.com/best-deals/binance-gift-cards

**2️⃣ Get your Gift Card code** from the email/account used for the purchase.

**3️⃣ Copy the code** and send it **here in this Telegram chat**.

🤖 **Payment confirmed → Order processed in ~30 seconds.**

⚠️ **IMPORTANT**
• Send **ONLY the Gift Card code**.
• Never send your password, 2FA code, email password, or other credentials.

Thank you for your purchase! 🙏
.`;

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
    const message = "Hi, I'd like to see your full menu.";
    window.open(`https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`, "_blank");
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
