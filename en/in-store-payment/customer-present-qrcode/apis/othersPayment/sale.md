# Sale Interface

## Description
This interface is used to process payment transactions for e-wallets such as Alipay, WeChat Pay, and PayMe.

## Request URL
```http
https://api.efps.com.hk/acquirer/v1/sale
```

## Request Parameters
### Header
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| version | String | Yes | Version number, fixed value: 1.0.0 |
| orgId | String | Yes | Organization ID |
| merNo | String | Yes | Merchant number |
| terminalNo | String | Yes | Terminal number |
| reqId | String | Yes | Request ID, must be unique for each request |
| signType | String | Yes | Signature type, fixed value: SHA256withRSA |
| sign | String | Yes | Signature value |

### Request Body
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

### Request Body Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| transType | String | Yes | Transaction type, fixed value: SALE |
| amount | Number | Yes | Transaction amount (in cents) |
| currency | String | Yes | Transaction currency (e.g., HKD) |
| qrCode | String | Yes | Payment QR code content |
| orderDesc | String | No | Order description |
| notifyUrl | String | No | Notification URL |
| timeout | Number | No | Timeout duration (in seconds) |

## Response Parameters
### Response Body
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
        <respMsg>Transaction successful</respMsg>
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

### Response Body Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| respCode | String | Response code |
| respMsg | String | Response message |
| transType | String | Transaction type |
| amount | Number | Transaction amount |
| currency | String | Transaction currency |
| orderNo | String | System order number |
| status | String | Transaction status |
| payTime | String | Payment time |
| walletType | String | Wallet type |
| extraInfo | Object | Additional information |
| - channelOrderNo | String | Channel order number |
| - channelTransId | String | Channel transaction ID |

## Response Codes
| Code | Description | Handling Suggestion |
|------|-------------|-------------------|
| 00 | Transaction successful | No action needed |
| 01 | Transaction processing | Query transaction status |
| 02 | Transaction failed | Check request parameters |
| 03 | Transaction timeout | Query transaction status |
| 04 | Transaction voided | Can initiate new transaction |
| 96 | System error | Contact technical support |
| 97 | Signature error | Check signature parameters and method |
| 98 | Message format error | Check message format |
| 99 | Communication timeout | Retry transaction |

## Signature Rules
1. Fields for signature: version + orgId + merNo + terminalNo + reqId + amount + currency + qrCode
2. Signature method: Using SHA256withRSA algorithm, sign with private key, verify with public key
3. Signature string concatenation order: Sort by field name, connect with &

## Important Notes
1. All requests must use HTTPS protocol
2. Amount is in cents, e.g., HKD 10.00 should be sent as 1000
3. Request ID must be unique
4. Set appropriate timeout duration for transactions
5. Query transaction status when status is "processing"
6. Production environment URL will be provided separately 