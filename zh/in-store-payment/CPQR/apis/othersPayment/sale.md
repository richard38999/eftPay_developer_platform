# 消费接口

## 接口说明
该接口用于处理支付宝、微信支付、PayMe等电子钱包的消费交易。

## 请求地址
```http
https://api.efps.com.hk/acquirer/v1/sale
```

## 请求参数
### 报文头 Header
| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| version | String | 是 | 版本号，固定值：1.0.0 |
| orgId | String | 是 | 机构号 |
| merNo | String | 是 | 商户号 |
| terminalNo | String | 是 | 终端号 |
| reqId | String | 是 | 请求流水号，每次请求必须唯一 |
| signType | String | 是 | 签名类型，固定值：SHA256withRSA |
| sign | String | 是 | 签名值 |

### 请求体 Body
```xml
<?xml version="1.0" encoding="UTF-8"?>
<request>
    <head>
        <version>1.0.0</version>
        <orgId>12345678</orgId>
        <merNo>123456789012345</merNo>
        <terminalNo>12345678</terminalNo>
        <reqId>20240101000001</reqId>
        <signType>SHA256withRSA</signType>
        <sign>MIIE...</sign>
    </head>
    <body>
        <transType>SALE</transType>
        <amount>1000</amount>
        <currency>HKD</currency>
        <qrCode>285012345678901234</qrCode>
        <orderDesc>Test Order</orderDesc>
        <notifyUrl>https://merchant.com/notify</notifyUrl>
        <timeout>60</timeout>
    </body>
</request>
```

### 请求体参数说明
| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| transType | String | 是 | 交易类型，固定值：SALE |
| amount | Number | 是 | 交易金额（单位：分） |
| currency | String | 是 | 交易币种（如：HKD） |
| qrCode | String | 是 | 付款码内容 |
| orderDesc | String | 否 | 订单描述 |
| notifyUrl | String | 否 | 通知地址 |
| timeout | Number | 否 | 超时时间（单位：秒） |

## 响应参数
### 响应体 Body
```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
    <head>
        <version>1.0.0</version>
        <orgId>12345678</orgId>
        <merNo>123456789012345</merNo>
        <terminalNo>12345678</terminalNo>
        <reqId>20240101000001</reqId>
        <respTime>20240101120000</respTime>
        <respCode>00</respCode>
        <respMsg>交易成功</respMsg>
        <signType>SHA256withRSA</signType>
        <sign>MIIE...</sign>
    </head>
    <body>
        <transType>SALE</transType>
        <amount>1000</amount>
        <currency>HKD</currency>
        <orderNo>202401010000000001</orderNo>
        <status>SUCCESS</status>
        <payTime>2024-01-01 12:00:00</payTime>
        <walletType>ALIPAY</walletType>
        <extraInfo>
            <channelOrderNo>2024010100000001</channelOrderNo>
            <channelTransId>2024010100000001</channelTransId>
        </extraInfo>
    </body>
</response>
```

### 响应体参数说明
| 参数名 | 类型 | 描述 |
|--------|------|------|
| respCode | String | 响应码 |
| respMsg | String | 响应描述 |
| transType | String | 交易类型 |
| amount | Number | 交易金额 |
| currency | String | 交易币种 |
| orderNo | String | 系统订单号 |
| status | String | 交易状态 |
| payTime | String | 支付时间 |
| walletType | String | 钱包类型 |
| extraInfo | Object | 附加信息 |
| - channelOrderNo | String | 渠道订单号 |
| - channelTransId | String | 渠道交易号 |

## 响应码说明
| 响应码 | 描述 | 处理建议 |
|--------|------|----------|
| 00 | 交易成功 | 交易成功，无需处理 |
| 01 | 交易处理中 | 请调用查询接口获取最终结果 |
| 02 | 交易失败 | 检查请求参数是否正确 |
| 03 | 交易超时 | 请调用查询接口确认交易状态 |
| 04 | 交易已撤销 | 交易已被撤销，可重新发起 |
| 96 | 系统故障 | 请联系技术支持 |
| 97 | 签名错误 | 检查签名参数和方法 |
| 98 | 报文格式错误 | 检查报文格式 |
| 99 | 通信超时 | 请重新发起交易 |

## 签名规则
1. 参与签名字段：version + orgId + merNo + terminalNo + reqId + amount + currency + qrCode
2. 签名方法：使用SHA256withRSA算法，私钥签名，公钥验签
3. 签名字符串拼接顺序：按字段名称排序，使用&连接

## 注意事项
1. 所有请求必须使用HTTPS协议
2. 交易金额单位为分，如 HKD 10.00 需传入 1000
3. 请求流水号需保证唯一性
4. 建议在发起交易时设置适当的超时时间
5. 交易状态为处理中时，需要调用查询接口获取最终结果
6. 生产环境请求地址将另行提供 