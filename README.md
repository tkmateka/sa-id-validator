<p align="center">
  <img src="./src/assets/logo.svg" width="300" alt="SA ID Validator">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@tk007/sa-id-validator">
    <img src="https://img.shields.io/npm/v/@tk007/sa-id-validator.svg?style=flat-square" alt="npm version" />
  </a>
  <a href="https://github.com/tkmateka/sa-id-validator/actions">
    <img src="https://github.com/tkmateka/sa-id-validator/workflows/CI/badge.svg" alt="build status" />
  </a>
</p>

# 🇿🇦 SA ID Validator

[![npm version](https://img.shields.io/npm/v/@tk007/sa-id-validator)](https://www.npmjs.com/package/@tk007/sa-id-validator)
[![CI](https://img.shields.io/github/actions/workflow/status/tk007/sa-id-validator/ci.yml?branch=main)](https://github.com/tk007/sa-id-validator/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> Validate South African ID Numbers easily using TypeScript.

---

## ✨ Features

- Validate if a South African ID number is correct
- Extract Gender
- Extract Date of Birth
- Calculate Age
- Fully typed with TypeScript
- Zero dependencies

---

## 📦 Install

```bash
npm install @tk007/sa-id-validator

## OR with yarn
yarn add @tk007/sa-id-validator

🚀 Usage

import { validateSouthAfricanID } from '@tk007/sa-id-validator';

const result = validateSouthAfricanID('8001015009087');

console.log(result);
// Output:
// {
//   isValid: true,
//   gender: "Male",
//   dateOfBirth: "1980-01-01",
//   age: 45
// }


📋 API
validateSouthAfricanID(idNumber: string): ValidationResult

| Field         | Type     | Description                         |
| ------------- | -------- | ----------------------------------- |
| `isValid`     | `boolean`| Whether the ID number is valid      |
| `gender`      | `string` | "Male" or "Female"                  |
| `dateOfBirth` | `string` | Date of birth in `YYYY-MM-DD` format |
| `age`         | `number` | Current age based on today          |

🛠️ Development
Clone the repo and install dependencies:

git clone https://github.com/tk007/sa-id-validator.git
cd sa-id-validator
npm install

### Build:
npm run build

### Run tests:
npm run test

📜 License
MIT © tk007

🙌 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a pull request.


---

### 🚀 If you add this, your package page will look **so much more professional and polished**!
Would you like me to also give you a matching **`package.json` metadata improvement** (description, homepage, repository fields, etc)? 📦  
It'll make your npm page even better! 🚀  
Want it?
