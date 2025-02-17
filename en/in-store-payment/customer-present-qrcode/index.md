# Customer Present QR Code Payment

## Introduction
Customer Present QR Code (CPQR) is a common in-store payment scenario where customers show their payment QR code from their e-wallet, and merchants scan the code to complete the payment.

## Supported Payment Methods
- Alipay
- WeChat Pay
- PayMe
- JKOPAY
- Hana Pay
- e-CNY (Digital RMB)

## Integration Process
1. Merchant scans customer's payment QR code
2. Call payment API to initiate transaction
3. Get transaction result

## Features
- [Sale](./apis/othersPayment/sale.md)
- [Void](./apis/othersPayment/void.md)
- [Refund](./apis/othersPayment/refund.md)
- [Admin Refund](./apis/othersPayment/admin-refund.md)
- [Sale Advice](./apis/othersPayment/sale-advice.md)
- [Reversal](./apis/othersPayment/reversal.md)

## Important Documents
- [Response Codes](./response-code.md)
- [Exception Handling](./exceptional-handling.md)
- [Receipt](./receipt.md)
- [Barcode Prefix](./barcode-prefix.md)

## API Reference

### Payment Interface
#### Request URL
```http
POST /api/v1/payment/qrcode
```

#### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| qrCode | String | Yes | Customer payment QR code content |
| amount | Number | Yes | Payment amount (in cents) |
| merchantOrderNo | String | Yes | Merchant order number |
| description | String | No | Order description |

#### Response Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| orderNo | String | System order number |
| status | String | Transaction status |
| amount | Number | Transaction amount |
| payTime | String | Payment time |

### Order Query Interface
#### Request URL
```http
GET /api/v1/payment/query
```

#### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| orderNo | String | Yes | System order number |
| merchantOrderNo | String | Yes | Merchant order number |

#### Response Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| orderNo | String | System order number |
| status | String | Transaction status |
| amount | Number | Transaction amount |
| payTime | String | Payment time |

## Status Codes
| Status Code | Description |
|-------------|-------------|
| SUCCESS | Payment successful |
| PENDING | Payment processing |
| FAILED | Payment failed |

## Sample Code
```java
// Java example code
public class PaymentExample {
    public static void main(String[] args) {
        // Initialize payment parameters
        Map<String, Object> params = new HashMap<>();
        params.put("qrCode", "28930139019301");
        params.put("amount", 1000); // 10.00 dollars
        params.put("merchantOrderNo", "TEST" + System.currentTimeMillis());
        
        // Send payment request
        PaymentResponse response = paymentService.pay(params);
        
        // Handle response
        if ("SUCCESS".equals(response.getStatus())) {
            // Payment success handling logic
        }
    }
}
```

## Important Notes
1. Merchant order number must be unique
2. Amount is in cents, e.g., $10.00 should be sent as 1000
3. Implement order query mechanism to ensure order status accuracy
4. Handle payment timeout scenarios properly

## FAQ
1. Q: How to handle payment timeout?
   A: Set reasonable timeout duration and confirm final payment status through order query interface

2. Q: How to ensure order number uniqueness?
   A: Use timestamp plus random number to generate order number

3. Q: How to handle payment failure?
   A: Handle according to the returned error code, initiate payment again if necessary