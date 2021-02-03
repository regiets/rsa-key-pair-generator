# rsa-key-pair-generator

A simple script to generate a random RSA key pair (private and public key pair), which can be used to securely sign and validate JWT tokens.

## Get Started

1. Clone this GitHub repo.
```sh
git clone https://github.com/regiets/rsa-key-pair-generator.git
```

2. Install dependencies with npm.
```sh
npm install
```

3. Run the script to generate a new random RSA key pair which can be found in the `output.txt` file, created in the root of the root directory.
```sh
npm start
```

## Example `output.txt` file content
```
RSA_PUBLIC_KEY='-----BEGIN RSA PUBLIC KEY-----MIIBCgKCAQEAos2y+LD4y61QaJ3OV+D2GjVityiB+0yuRhig9vzATvNrmsWLDZTlZuDPylza94w59+cp8T1TCZaUAMpjAH/YbkndLxjFcOpqoH5mOzxYgTeskCiY6klXsamqRREaxn7NuW0Om9/rsAQpMzvw2S3F2SBFCD7BICdtfUqt6lwerU2fUFdMn83TkOAYtWrdcOpVwiTYTCH1pvNj2c/BvRlvHL9709rCzslTI/FUR/lI+TLdlqpvSf0aG+PnLT7bIolYSjruB0vft8Gy1qHtAfOCUCVfP2WZ6xNPQ+SXZ0k7+uxapmI0e/6ghOJZzFpobOaRtxLmTTe/03/HEXBYMYFq/QIDAQAB-----END RSA PUBLIC KEY-----'
RSA_PRIVATE_KEY='-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAos2y+LD4y61QaJ3OV+D2GjVityiB+0yuRhig9vzATvNrmsWLDZTlZuDPylza94w59+cp8T1TCZaUAMpjAH/YbkndLxjFcOpqoH5mOzxYgTeskCiY6klXsamqRREaxn7NuW0Om9/rsAQpMzvw2S3F2SBFCD7BICdtfUqt6lwerU2fUFdMn83TkOAYtWrdcOpVwiTYTCH1pvNj2c/BvRlvHL9709rCzslTI/FUR/lI+TLdlqpvSf0aG+PnLT7bIolYSjruB0vft8Gy1qHtAfOCUCVfP2WZ6xNPQ+SXZ0k7+uxapmI0e/6ghOJZzFpobOaRtxLmTTe/03/HEXBYMYFq/QIDAQABAoIBAQCextaBTLeYjNMa9KzFcBUUwnQgBVWfbM2ad3Kk7yPu2+BZ9ccD2+9PQnnk9mJng08Vw1FYgWJ2u3BkxP2BAy5lgYxB3nrRAQ40sJGru9LlUxLtFWrtM9Je5wW0jlX6uLiS2xWgV+ZYp/Y2jYL7jHSkqaApxmo7nbhetXKgWm9gvAAWvZDGM7rxURvMxIuggYCbBMyaq29bu2mxeH+rK8mmKmjun+op/Tl6KIiZOfw2M6Y35geeZaLy7xko8+SOYNe3wH+COQhlgW+mpevGbQcFkoYfmKsDAU9roW3QVP4S+pKGkq05SZ60+iIvdFY0d4BJAQudVMYxV8FEjIA2oQZRAoGBANu7VjhFAJuyZBs0YbS6E2nbCjfBEHUmFO1HNOea1Kgjr1bD9yIf9OB7KjmW2RnMMD5eMeivq3yy/fk+LzbOtobH9WZIN5vafLRrV8BXnKRz+3CWqBCriZMaejMKxUgyXGWlFky4ltAeaXRHuUr95rFTK1SstFUGlvSVIRyWIKbzAoGBAL2s4oudvEeIkDhn5bwmyjp3wJMOP5YaYyz38fQvdMXgKoj3DZ2ZaYaTbgAS7HqJuXff8AdQZIvdTHrKXmUt8bbtd6m7bJg0ctdkO/RBA40vCM1PlpQcnGPJONEzgaK3l+3zg3uraSC4JOK5XEgwxFr7K3ancurdMe6Faxs7YAJPAoGAOhVvWTiETKP/amGSYl+9ugG41bwnSZBjf8WO6po3FKs6MkljDpY7+QsVwltp0DP1nMbxkny9bB00naoeePJztXUuHXeBm6VJybeGXsXKFn7CPKTWkHGH0GbzXoK+W7NUUVouZuF0nFctsRs0k+pCDSXbEmsE0GUJimXRdukIgJkCgYBXGOJWljH07yK6pAr8YRuPyZmmbW6JcMiFx71VEc2fZ5ZgmoGoEuBAKcbjRc1NX5zJDQ3dbe8dwprx76d08qoCA/1k9WmiYsMxYReey5Pj6usxzBArJxAxSh9LAUnP/FpJq/5+dXGq0qQtcEyN4cbouFl2/OFqM/RPwPgz4wntRQKBgQCKsqofUue7eyS1Bi3SvDI4frnDaAIroUOS7NbxgpQdBhYmM+CGRuBQBKIHI5It+OAb2eyswBN5+3zm6wnkRvtRPJC7ZP44w/ZaLsUxK4AiOp+XcMl2DysuAe0pKaKDcTKjp3w+coNPs0fZzga+a0BbdlSPOGQ41BxZTjT8hfjOZQ==-----END RSA PRIVATE KEY-----'
```
