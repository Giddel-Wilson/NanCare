# NanCare - Elderly Support Hub

A comprehensive elderly care and support website built with SvelteKit and Tailwind CSS. NanCare is a welfare organization dedicated to improving the quality of life for seniors and supporting their families through various care services and resources.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Multi-page Navigation**: Home, About, Services, Testimonials, Contact
- **Interactive FAQ**: Accordion-style frequently asked questions
- **Contact Form**: Comprehensive form for service inquiries
- **Regional Coverage**: Nigerian offices across multiple states
- **Professional Animations**: Smooth transitions and hover effects
- **Accessibility**: Semantic HTML and keyboard navigation support

## 📋 Services Offered

- Family Support & Counseling
- Wellness & Health Advocacy
- Resource Coordination
- Community Integration Programs
- Education & Training for Caregivers
- Advocacy for Elderly Rights

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Giddel-Wilson/NanCare.git
cd NanCare
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

### Development

Start the development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

The application will be available at `http://localhost:5173`

## 🏗️ Building for Production

To create a production version of the app:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── routes/
│   ├── +layout.svelte          # Main layout with navigation
│   ├── +page.svelte             # Homepage
│   ├── about/+page.svelte       # About page
│   ├── services/+page.svelte    # Services page
│   ├── testimonials/+page.svelte # Success stories
│   └── contact/+page.svelte     # Contact form & FAQ
├── app.css                      # Global styles
├── app.html                     # HTML template
└── lib/                         # Shared components
```

## 🌍 Regional Coverage

NanCare serves multiple regions across Nigeria:

- **Southwest**: Lagos, Ogun, Oyo States
- **Southeast**: Imo, Anambra, Abia States  
- **South-South**: Rivers, Delta, Cross River States
- **Federal Capital Territory**: FCT Abuja, Kano, Kaduna States

## 📞 Contact Information

- **Phone**: +234-801-NAN-CARE (626-2273)
- **Email**: support@nancare.org
- **Emergency**: +234-801-HELP-NOW (435-7669)

## 🛠️ Technology Stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Vercel (configured)
- **Testing**: Vitest + Testing Library

## 📄 License

This project is developed for NanCare - Elderly Support Hub.

## 🤝 Contributing

For contributions and support inquiries, please contact the NanCare team.

---

**NanCare** - Compassionate elderly care support for Nigerian families
