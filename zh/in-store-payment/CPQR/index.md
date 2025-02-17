# 顾客出示二维码支付

## 简介
顾客出示二维码（Customer Present QR Code，简称CPQR）是一种常见的店内支付场景，顾客通过展示自己电子钱包中的付款码，商家通过扫描该码完成收款。

## 接入流程
1. 商家扫描顾客的付款码
2. 调用支付 API 发起交易
3. 获取交易结果

## API 参考

### 支付接口
#### 请求地址
```http
POST /api/v1/payment/qrcode
```

#### 请求参数
| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| qrCode | String | 是 | 顾客付款码内容 |
| amount | Number | 是 | 支付金额（单位：分） |
| merchantOrderNo | String | 是 | 商户订单号 |
| description | String | 否 | 订单描述 |

#### 响应参数
| 参数名 | 类型 | 描述 |
|--------|------|------|
| orderNo | String | 系统订单号 |
| status | String | 交易状态 |
| amount | Number | 交易金额 |
| payTime | String | 支付时间 |

### 查询订单接口
#### 请求地址
```http
GET /api/v1/payment/query
```

#### 请求参数
| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| orderNo | String | 是 | 系统订单号 |
| merchantOrderNo | String | 是 | 商户订单号 |

#### 响应参数
| 参数名 | 类型 | 描述 |
|--------|------|------|
| orderNo | String | 系统订单号 |
| status | String | 交易状态 |
| amount | Number | 交易金额 |
| payTime | String | 支付时间 |

## 状态码说明
| 状态码 | 描述 |
|--------|------|
| SUCCESS | 支付成功 |
| PENDING | 支付处理中 |
| FAILED | 支付失败 |

## 示例代码
```java
// Java 示例代码
public class PaymentExample {
    public static void main(String[] args) {
        // 初始化支付参数
        Map<String, Object> params = new HashMap<>();
        params.put("qrCode", "28930139019301");
        params.put("amount", 1000); // 10.00元
        params.put("merchantOrderNo", "TEST" + System.currentTimeMillis());
        
        // 发起支付请求
        PaymentResponse response = paymentService.pay(params);
        
        // 处理响应
        if ("SUCCESS".equals(response.getStatus())) {
            // 支付成功处理逻辑
        }
    }
}
```

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