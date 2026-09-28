# 🌴 monis.rent — Workspace Designer

An interactive web app that lets users design their dream remote-work setup — pick a desk, chair, and accessories — and see a live price summary before renting it, powered by a one-click WhatsApp checkout.

**🔗 Live Demo:** [monis-workspace-designer-three.vercel.app](https://monis-workspace-designer-three.vercel.app/)

---

## ✨ Overview

`monis.rent` is a fictional furniture-rental brand (Bali-based) built as a portfolio project to demonstrate an interactive product configurator — the kind of UI pattern used by real rental/e-commerce platforms for build-your-own-bundle experiences.

Users move through three simple steps — desk, chair, accessories — and watch a live preview and running total update in real time, then send their setup straight to WhatsApp to "rent" it.

## 🧱 Tech Stack

| Category | Tech |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (TypeScript) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| State Management | [Zustand](https://github.com/pmndrs/zustand) |
| Icons | [Lucide React](https://lucide.dev/) |
| Deployment | [Vercel](https://vercel.com/) |

## 🚀 Features

- 🪑 Choose from multiple desks, chairs, and accessories
- 🔄 Live visual preview that updates instantly as selections change
- 💰 Real-time order summary with monthly pricing
- ✅ Multi-select accessories (monitor, lamp, plant, keyboard, fan, etc.)
- 📲 One-click WhatsApp checkout to complete the "rental"
- 📱 Fully responsive, mobile-friendly layout

## 📸 Preview

> Step 1: Pick your desk → Step 2: Pick your chair → Step 3: Add accessories → Live total & checkout

*(Add a screenshot or GIF of the live demo here for a stronger first impression.)*

## 🛠️ Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Mahak-012/monis-workspace-designer.git
cd monis-workspace-designer
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

```
monis-workspace-designer/
├── app/          # Next.js app router pages
├── components/   # Reusable UI components
├── lib/          # Store, types, and helper logic
├── public/       # Static assets
└── ...config files
```

## 🔮 What I'd Improve With More Time

- 🖱️ Drag-and-drop positioning of accessories on the desk preview
- 🧊 3D preview using React Three Fiber
- 🖼️ Real product images pulled from a monis.rent API
- 👤 User accounts with saved setups

## 🙋 About

Built by **Mahak** — a frontend development student based in Lahore, Pakistan, building a portfolio for international clients.

- GitHub: [@Mahak-012](https://github.com/Mahak-012)

## 📄 License

This project is open source and available for learning purposes.
