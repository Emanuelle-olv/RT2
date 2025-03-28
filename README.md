# TypeScript CLI Calculator (RT4)

This repository contains an object-oriented calculator built using **TypeScript**, designed to run in the command line (CLI).  
The project was developed as part of the **RT4 activity** in the **Multiplatform Software Development (DSM)** course at **FATEC São José dos Campos**.

---

## 📋 Description

This CLI calculator helps reinforce key concepts of **Object-Oriented Programming (OOP)** such as:

- class inheritance  
- abstraction  
- encapsulation  
- polymorphism  

The calculator supports basic operations (**addition, subtraction, multiplication, division, exponentiation**) and also calculates the roots of second-degree equations using **Bhaskara’s formula**.

The program will continue to prompt the user for operations until the command `sair` (exit) is typed.

---

## 🧪 Example

```bash
$ npx ts-node src/index.ts

----------------------------------------

digite a operação: somar, subtrair, multiplicar, dividir, potencia ou bhaskara

📌 exemplo de uso:
→ 5 2 somar
→ bhaskara

💡 digite "sair" para encerrar o programa

digite os números e a operação: 5 2 somar

✅ resultado: 7
```

---

## ⚙️ Technologies

- Node.js  
- TypeScript  
- ts-node  
- readline (Node.js built-in module)

---

## 📁 Project Structure

```
RT4/
├── node_modules/
├── src/
│   ├── index.ts
│   ├── mensagens.ts
│   └── operacoes/
│       ├── Calculo.ts
│       ├── Soma.ts
│       ├── Subtracao.ts
│       ├── Multiplicacao.ts
│       ├── Divisao.ts
│       ├── Potencia.ts
│       └── Bhaskara.ts
├── package.json
├── tsconfig.json
└── .gitignore
```

---

## 🚀 How to Run

```bash
# install dependencies
npm install

# run the project directly using ts-node
npx ts-node src/index.ts
```

---

## 👩‍💻 Author

Emanuelle S. G. Oliveira DSM student - FATEC

---

> Project developed for educational purposes.
