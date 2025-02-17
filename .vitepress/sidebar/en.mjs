// export const enSidebar = {
//   "/en/": [
//     {
//       text: "Guide",
//       collapsed: false,
//       items: [
//         { text: "guide", link: `/en/guide/` },
//         { text: "quick started", link: `/en/quick-started/` },
//         { text: "reference", link: `/en/reference/` },
//       ],
//     },
//     {
//       "in-store-payment/": [
//         {
//           text: "In-Store-Payment",
//           base: '/in-store-payment/',
//           collapsed: false,
//           items: [
//             {
//               text: "Customer Present QR Code",
//               link: `customer-present-qrcode`,
//             },
//             {
//               text: "Merchant Present QR Code",
//               link: `merchant-present-qrcode`,
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

export const enSidebar = {
  "/in-store-payment/": {
    base: "/in-store-payment/",
    items: sidebarInStorePayment(),
  },
  "/online-payment/": {
    base: "/online-payment/",
    items: sidebarOnlinePayment(),
  },
};

function sidebarInStorePayment() {
  return [
    {
      text: "Customer Present QR Code",
      base: "/in-store-payment/customer-present-qrcode/",
      collapsed: false,
      items: [
        { text: "Introduction", link: "introduction" },
        { text: "Response Code", link: "response-code" },
        { text: "Exceptional Handling", link: "exceptional-handling" },
        {
          text: "APIs",
          base: "/in-store-payment/customer-present-qrcode/apis/",
          collapsed: false,
          items: [
            {
              text: "Alipay/WeChat/PayMe",
              base: "/in-store-payment/customer-present-qrcode/apis/othersPayment/",
              collapsed: false,
              items: [
                { text: "Sale", link: "sale" },
                { text: "Void", link: "void" },
                { text: "Refund", link: "refund" },
                { text: "Admin Refund", link: "admin-refund" },
                { text: "Sale Advice", link: "sale-advice" },
                { text: "Reversal", link: "reversal" },
              ],
            },
            {
              text: "UnionPay QR",
              base: "/in-store-payment/customer-present-qrcode/apis/unionpayqr/",
              collapsed: false,
              items: [
                { text: "Sale", link: "sale" },
                { text: "Void", link: "void" },
                { text: "Refund", link: "refund" },
                { text: "Admin Refund", link: "admin-refund" },
                { text: "Sale Advice", link: "sale-advice" },
                { text: "Reversal", link: "reversal" },
              ],
            },
          ],
        },
        { text: "Receipt", link: "receipt" },
        { text: "Barcode Prefix", link: "barcode-prefix" },
      ],
    },
    {
      text: "Merchant Present QR Code",
      collapsed: false,
      items: [
        { text: "Markdown Extensions", link: "markdown" },
        { text: "Asset Handling", link: "asset-handling" },
        { text: "Frontmatter", link: "frontmatter" },
        { text: "Using Vue in Markdown", link: "using-vue" },
        { text: "Internationalization", link: "i18n" },
      ],
    },
    {
      text: "Customization",
      collapsed: false,
      items: [
        { text: "Using a Custom Theme", link: "custom-theme" },
        {
          text: "Extending the Default Theme",
          link: "extending-default-theme",
        },
        { text: "Build-Time Data Loading", link: "data-loading" },
        { text: "SSR Compatibility", link: "ssr-compat" },
        { text: "Connecting to a CMS", link: "cms" },
      ],
    },
    {
      text: "Experimental",
      collapsed: false,
      items: [
        { text: "MPA Mode", link: "mpa-mode" },
        { text: "Sitemap Generation", link: "sitemap-generation" },
      ],
    },
    {
      text: "Config & API Reference",
      base: "/reference/",
      link: "site-config",
    },
  ];
}

function sidebarOnlinePayment() {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        { text: "What is VitePress?", link: "what-is-vitepress" },
        { text: "Getting Started", link: "getting-started" },
        { text: "Routing", link: "routing" },
        { text: "Deploy", link: "deploy" },
      ],
    },
    {
      text: "Writing",
      collapsed: false,
      items: [
        { text: "Markdown Extensions", link: "markdown" },
        { text: "Asset Handling", link: "asset-handling" },
        { text: "Frontmatter", link: "frontmatter" },
        { text: "Using Vue in Markdown", link: "using-vue" },
        { text: "Internationalization", link: "i18n" },
      ],
    },
    {
      text: "Customization",
      collapsed: false,
      items: [
        { text: "Using a Custom Theme", link: "custom-theme" },
        {
          text: "Extending the Default Theme",
          link: "extending-default-theme",
        },
        { text: "Build-Time Data Loading", link: "data-loading" },
        { text: "SSR Compatibility", link: "ssr-compat" },
        { text: "Connecting to a CMS", link: "cms" },
      ],
    },
    {
      text: "Experimental",
      collapsed: false,
      items: [
        { text: "MPA Mode", link: "mpa-mode" },
        { text: "Sitemap Generation", link: "sitemap-generation" },
      ],
    },
    {
      text: "Config & API Reference",
      base: "/reference/",
      link: "site-config",
    },
  ];
}
