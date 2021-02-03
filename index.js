
// Run this script to create a new public/private RSA Key pair

const NodeRSA = require('node-rsa');
const fs = require('fs');

const key = new NodeRSA({b: 512});

// console.log({key});

key.generateKeyPair(2048, 65537);

const tempPrivateKey = key.exportKey('pkcs1-private');
const tempPublicKey = key.exportKey('pkcs1-public');

const privateKey = tempPrivateKey.replace(/\n/g, '');
const publicKey = tempPublicKey.replace(/\n/g, '');

// console.log({tempPrivateKey});
// console.log({tempPublicKey});
//
// console.log({privateKey});
// console.log({publicKey});

const pair = `RSA_PUBLIC_KEY='${publicKey}'
RSA_PRIVATE_KEY='${privateKey}'`;

// Remove file
fs.writeFile('./output.txt', pair, 'utf8', (err) => {
	if (err) throw err;
	console.log('./output.txt was created.');
});




















/* ===== Output "".env" =====
RSA_PUBLIC_KEY='-----BEGIN RSA PUBLIC KEY-----MIIBCgKCAQEAjdTujtTIkkxacnXk4dMNiF7RgvNZu2XUIL8ufqqwGZ4y3VeUdZrbeJlARH5HQiFROnpihmDx+qYWzt4eRI0A4iW2J+RjUaUHzDdMWWjkElN1naArR8Dd6u5q4CfWJcZYNl2EWf6vhNbvOzF5PqRCPFCCikjfrIOH32jKuEQX7v7Be9xz2GMhmTBA2jUiVIk206MUjUsfK3p/Bw3H2AbJSaEWuSakHAAKEbG/mu29DnyWf6f6K7llANMDwV5pmYrTkk6k2VXycFhz1c7P8biR1VOD1CrJdQHC4VwBiyOm+XrO2sRmluukvdHGjJt4VWSiA62Xy4uihrravU7xfEeIkQIDAQAB-----END RSA PUBLIC KEY-----'

RSA_PRIVATE_KEY='-----BEGIN RSA PRIVATE KEY-----MIIEogIBAAKCAQEAjdTujtTIkkxacnXk4dMNiF7RgvNZu2XUIL8ufqqwGZ4y3VeUdZrbeJlARH5HQiFROnpihmDx+qYWzt4eRI0A4iW2J+RjUaUHzDdMWWjkElN1naArR8Dd6u5q4CfWJcZYNl2EWf6vhNbvOzF5PqRCPFCCikjfrIOH32jKuEQX7v7Be9xz2GMhmTBA2jUiVIk206MUjUsfK3p/Bw3H2AbJSaEWuSakHAAKEbG/mu29DnyWf6f6K7llANMDwV5pmYrTkk6k2VXycFhz1c7P8biR1VOD1CrJdQHC4VwBiyOm+XrO2sRmluukvdHGjJt4VWSiA62Xy4uihrravU7xfEeIkQIDAQABAoIBAFYqYY/ml7/BoUVeeGH1fYg2yqP6wa4GzBvk6hNMEVZO9Onh1jColuMqf4/dA9+aLCYRyh+HcBrtonelG9BbtYiujn6n0ur8DsOzaK/8+Gplx9OuRfz+oBOlKsrpiMFEQb0tjUW7Y9iZV5enk9hJpG/OHbBzW2gMNJS2rknKHJw1w17WI7HaYVK5TToSANX3fc2+5WyIcGVwLIkUnKoPuOC8qoeuSTW0oPIHo1eqyHg1p6VGdzPvuh6HDeLEls8Do5VM+QgSQ21cV6f1zv0X1swT9BrtvbSL8ZGIbKVqaeE+8tGt4oMjjwYWyiu6OiX9Cuv03l4R0QnCqA4xpxjhS8ECgYEAyddpmxyW3yGy5/rRkXRzcNdokrOeVQgyyTLYY46KNUc4+e724c3HUmJ/H+OaoLljfSeRlBbcLnc36v8wogqLQZ+XT3K5agEL02isFOfChowfq4lDbz+hhl4qiQ7PVu+gJkMFqFXVo3f8Bb1GJ8e9Zr455U1WyBsdXQ/WXTb87mkCgYEAs+Nss+q9rQUK781IA91tbnSqd5eUAN/9P2XhNxt+AyuQ/bMkwIL/dN5lCyLCIc+DVQGOLN369owRO+renOZbNZXXaM/Z/DRg8cyTYUR9+3gly3QCkLy8rQySMSlfW2brVJjYsuSK02lnzZAr4DSEPdFGPKYvdT0CC/mgb2zC0+kCgYAhanpfZbJMqqWV5l5/uEnMar0zXG1gIoVV7gcJJHYZL/ts1XUmGQ1gxFHLk8DrzwV7mOtvGwHE55PoYetJSHmZmbRRQOsVc6rjizbCF0SLRfOQUJ9LcbtqJXjhTARjnjRjYUE0h1FhSOH+iUFuIJFoyyGGpvExG9wWpiKVOB9T0QKBgDQh99HYeOnYqUe/9VvxYxJ8yx5nlmP+hhVGgFOJKybeDGIJ9d+41zHWdfAZPauwyP3sunh0SJQFGcWElslf1RUdfNUKT8FQqLvKrvekcuJa+pEQ6OFrYT7Bguiudc02cYMN3NdTdow4YvXnD2AluCF2MeXHv785VAuGZ6GDIp9pAoGAbdoSYoknma5ezH1qa/IiTRtcQ2UUgjDPOJKotbaylFjOi2v2sCL7Sub1qHYYPYZUPb16wDIeJyjnsuEJORajsqZIQ2uWC6esj7FagfkbPmxGvD6t49bRYdXTmO4yjiVOpmpLLN5YvyUOnv/pBPAALC4VD6CfrL/Tf4KBDE8gQ7c=-----END RSA PRIVATE KEY-----'
*/
