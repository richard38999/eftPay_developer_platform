export const zhSidebar = {
  'zh/': [
    {
      text: '使用指南',
      collapsed: false,
      items: [
        { text: '简介', link: `/guide/` },
        { text: '快速开始', link: `/quick-started/` },
        { text: '参考', link: `/reference/` },
      ]
    },
    {
      text: 'Terminal',
      collapsed: false,
      items: [
        { text: 'A8', link: `/api-examples/` },
        { text: 'IUC285', link: `/markdown-examples/` },
      ]
    },
  ],
  "/in-store-payment/": {
    base: "/zh/in-store-payment/",
    items: sidebarInStorePayment(),
  },
  "/online-payment/": {
    base: "/zh/online-payment/",
    items: sidebarOnlinePayment(),
  },
};

function sidebarInStorePayment() {
  return [
    {
      text: "顾客出示二维码",
      base: "/zh/in-store-payment/CPQR/",
      collapsed: false,
      items: [
        { text: "简介", link: "introduction" },
        { text: "响应码", link: "response-code" },
        { text: "异常处理", link: "exceptional-handling" },
        {
          text: "API接口",
          base: "/zh/in-store-payment/CPQR/apis/",
          collapsed: false,
          items: [
            {
              text: "支付宝/微信/PayMe",
              base: "/zh/in-store-payment/CPQR/apis/othersPayment/",
              collapsed: false,
              items: [
                { text: "消费", link: "sale" },
                { text: "撤销", link: "void" },
                { text: "退款", link: "refund" },
                { text: "管理退款", link: "admin-refund" },
                { text: "消费通知", link: "sale-advice" },
                { text: "冲正", link: "reversal" },
              ],
            },
            {
              text: "银联二维码",
              base: "/zh/in-store-payment/CPQR/apis/unionpayqr/",
              collapsed: false,
              items: [
                { text: "消费", link: "sale" },
                { text: "撤销", link: "void" },
                { text: "退款", link: "refund" },
                { text: "管理退款", link: "admin-refund" },
                { text: "消费通知", link: "sale-advice" },
                { text: "冲正", link: "reversal" },
              ],
            },
          ],
        },
        { text: "交易凭证", link: "receipt" },
        { text: "条码前缀", link: "barcode-prefix" },
      ],
    },
    {
      text: "商家出示二维码",
      collapsed: false,
      items: [
        { text: "简介", link: "introduction" },
        { text: "响应码", link: "response-code" },
        { text: "异常处理", link: "exceptional-handling" },
        { text: "API接口", link: "api-reference" },
        { text: "交易凭证", link: "receipt" },
      ],
    },
    {
      text: "终端设备",
      collapsed: false,
      items: [
        { text: "A8", link: "a8" },
        { text: "IUC285", link: "iuc285" },
      ],
    },
  ];
}

function sidebarOnlinePayment() {
  return [
    {
      text: "简介",
      collapsed: false,
      items: [
        { text: "关于在线支付", link: "about" },
        { text: "快速开始", link: "getting-started" },
        { text: "路由配置", link: "routing" },
        { text: "部署说明", link: "deploy" },
      ],
    },
    {
      text: "API接口",
      collapsed: false,
      items: [
        { text: "支付接口", link: "payment-api" },
        { text: "查询接口", link: "query-api" },
        { text: "退款接口", link: "refund-api" },
        { text: "通知接口", link: "notification-api" },
      ],
    },
  ];
}
