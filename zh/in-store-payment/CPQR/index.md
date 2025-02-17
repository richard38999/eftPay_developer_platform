# 顾客出示二维码支付

## 简介
顾客出示二维码（Customer Present QR Code，简称CPQR）是一种常见的店内支付场景，顾客通过展示自己电子钱包中的付款码，商家通过扫描该码完成收款。

## 支持的支付方式
- 支付宝 (Alipay)
- 微信支付 (WeChat Pay)
- PayMe
- JKOPAY
- Hana Pay
- 数字人民币 (e-CNY)

## 接入流程
1. 商家扫描顾客的付款码
2. 调用支付 API 发起交易
3. 获取交易结果

## 功能清单
- [消费](./apis/othersPayment/sale.md)
- [撤销](./apis/othersPayment/void.md)
- [退款](./apis/othersPayment/refund.md)
- [管理退款](./apis/othersPayment/admin-refund.md)
- [消费通知](./apis/othersPayment/sale-advice.md)
- [冲正](./apis/othersPayment/reversal.md)

## 重要文档
- [响应码说明](./response-code.md)
- [异常处理](./exceptional-handling.md)
- [交易凭证](./receipt.md)
- [条码前缀](./barcode-prefix.md)

## 注意事项
1. 商户订单号需要保证唯一性
2. 金额单位为分，如 10.00 元需要传入 1000
3. 建议实现订单查询机制，确保订单状态准确性
4. 注意处理支付超时情况

## 常见问题
1. Q: 如何处理支付超时？
   A: 建议设置合理的超时时间，并通过订单查询接口确认最终支付状态

2. Q: 如何确保订单号唯一？
   A: 可以使用时间戳加随机数的方式生成订单号

3. Q: 支付失败如何处理？
   A: 可以根据返回的错误码进行相应处理，必要时可以重新发起支付

1. Alipay & WeChatPay & JKOPAY & Hana & e-CNY

1.1 Sale

Request Message