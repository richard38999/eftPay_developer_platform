# Response Codes

## Detailed Response Codes
| Code | Description | Code | Description | Code | Description |
|------|-------------|------|-------------|------|-------------|
| 01 | Enquire Payment Processor | 36 | Restricted Account | 77 | Settlement Error |
| 02 | Enquire Service Providers | 39 | Invalid Account | 78 | Tracking Code Error |
| 03 | Invalid Merchant ID | 41 | Account Frozen | 79 | Invalid Account |
| 04 | A/C Not Authenticated | 42 | Invalid Account | 80 | Data Error |
| 05 | Declined | 43 | Invalid Payment Code | 81 | Encryption Error |
| 06 | Error | 51 | Insufficient Fund | 83 | Password Unauthorized |
| 09 | No Network Payment Not Authorized | 54 | Payment Code Expired | 84 | Cannot Connect to Payment |
| 12 | Invalid Transaction | 55 | Incorrect Payment Password | 85 | Normal Account |
| 13 | Invalid Amount | 57 | Unsupported Service | 87 | Incorrect Payment PW Processing |
| 14 | Invalid Payment Code | 58 | Transaction Not Allowed | 88 | Network Failure |
| 19 | Timeout - Retry Again | 59 | Fraud Suspected | 89 | Invalid Terminal Code |
| 20 | Invalid Transaction | 60 | Exceed of Payment Threshold of Product | 90 | System Backup |
| 21 | No Processing | 61 | Exceed Limit | 91 | Payment Processor Network Issue |
| 22 | Operation Issues | 62 | Server Code Error | 92 | Communication Error |
| 23 | Unacceptable Trans Fee | 63 | Payment Code Verification Failed | 93 | Trans Not Completed |
| 25 | Record Not Found | 64 | Incorrect Original Amount | 94 | Duplicated Number |
| 26 | Buyer Operation Not Completed | 65 | Restricted | 95 | Daily Cut-Off - Please Wait |
| 27 | Already Approved | 66 | Exceed Daily Limit | 96 | Systems Error |
| 28 | Error - Do Not Retry | 67 | Exceed Monthly Limit | 97 | Invalid Terminal ID |
| 29 | Modification Failure | 68 | Host Response Timeout | 98 | No Response from Payment Processor |
| 30 | Transmission Format Error | 69 | Over Currency Exchange Limit | 99 | Invalid PW Encryption |
| 31 | Network Interruption | 70 | Insufficient Fund | A0 | MAC Error |
| 34 | Fraud Suspected | 75 | Payment Password Retrial Over | N0 | Original Trans Not Found |
| - | - | 76 | Invalid Product Code | - | - |

## Response Code Categories
### Successful Response Codes
| Code | Description | Handling Suggestion |
|------|-------------|-------------------|
| 00 | Transaction successful | No action needed |
| 27 | Already Approved | No action needed |

### Unconfirmed Response Codes
| Code | Description | Handling Suggestion |
|------|-------------|-------------------|
| 06 | Error | Call Sale Advice API check the transaction status or Call Reversal API to reverse the transaction |
| 19 | Timeout | Call Sale Advice API check the transaction status or Call Reversal API to reverse the transaction |
| 26 | Buyer Operation Not Completed | Call Sale Advice API check the transaction status or Call Reversal API to reverse the transaction |
| 96 | System error | Call Sale Advice API check the transaction status or Call Reversal API to reverse the transaction |
| 98 | No Response from Payment Processor | Call Sale Advice API check the transaction status or Call Reversal API to reverse the transaction |

## Transaction Failure Response Codes
| Code | Description | Handling Suggestion |
|------|-------------|-------------------|
| B1 | Invalid merchant number | Check merchant number |
| B2 | Invalid terminal number | Check terminal number |
| B3 | Service not enabled | Contact customer service |
| B4 | Amount exceeds limit | Check transaction amount limit |
| B5 | Invalid currency | Check supported currencies |
| B6 | Invalid QR code | Check QR code format |