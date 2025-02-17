// 英文导航
export const enNav = [
  { text: "Home", link: "/en/", activeMatch: "/en/" },
  {
    text: "Quick Start",
    link: "/quick-started/",
    activeMatch: "/quick-started/",
  },
  {
    text: "Online Payment",
    items: [
      { text: "Website", link: "/online-payment/website" },
      { text: "H5/Wap", link: "/online-payment/h5" },
      { text: "App", link: "/online-payment/app" },
      { text: "Cashier", link: "/online-payment/cashier" },
      { text: "Mini Program", link: "/online-payment/mini-program" },
      { text: "Token", link: "/online-payment/token" },
    ],
    activeMatch: "/online-payment/",
  },
  {
    text: "In-Store Payment",
    items: [
      { text: "Customer Present QR Code", link: "/in-store-payment/customer-present-qrcode" },
      { text: "Merchant Present QR Code", link: "/in-store-payment/merchant-present-qrcode" },
      { text: "Terminals",
        items: [
        { text: "A8", link: "/in-store-payment/terminals/a8" },
        { text: "IUC 285", link: "/in-store-payment/terminals/iuc285" },
        { text: "Open 1500", link: "/in-store-payment/terminals/open1500" },
        { text: "NRR", link: "/in-store-payment/terminals/nrr" },
      ], },
    ],
    activeMatch: "/in-store-payment/",
  },
];
