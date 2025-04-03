# 🚗 AI-Powered Car Marketplace  

An **AI-powered car marketplace** that enables users to **search, filter, and book test drives** effortlessly. The platform incorporates **artificial intelligence, real-time booking, and advanced security features**, making it a cutting-edge solution for car buyers and sellers.  

---

## 🌟 Features  

### 🔍 AI-Powered Image Search  
- Users can **upload an image of a car**, and the system uses **Gemini API** to analyze and retrieve relevant details.  
- AI recognizes the **car brand, model, year, and specifications**, helping users find their ideal vehicle.  

### 🏎️ Advanced Car Filtering System  
- Users can **filter cars based on multiple criteria**, including:  
  - **Car Name & Model** (Search by exact or partial name)  
  - **Price Range** (Set min-max price)  
  - **Fuel Type** (Petrol, Diesel, Electric, Hybrid)  
  - **Transmission Type** (Automatic, Manual)  
  - **Body Type** (SUV, Sedan, Hatchback, Coupe, etc.)  
  - **Car Features** (Sunroof, Navigation, Bluetooth, etc.)  
  - **AI Image Search** (Find similar cars based on an uploaded image)  

### 🏢 Admin Panel for Car Management  
- Admins can **upload cars manually** or **automate listings using AI**.  
- Full CRUD operations: **Edit, Update, Delete** car listings in real time.  
- Integrated **dashboard with analytics** to monitor user engagement.  

### 🚗 Real-Time Test Drive Booking  
- Users can **schedule test drives** directly from the platform.  
- Integrated **calendar system** for booking and rescheduling.  
- Admins can **approve or decline test drive requests** based on availability.  

### 🔐 Secure Authentication & User Management  
- **Google Authentication** via **Clerk** for seamless and secure login.  
- Supports **role-based access** (Admin, Buyer, Seller).  
- Users can **save favorite cars** and track their **bookings & test drives**.  

### 🛡️ Advanced Security & Performance  
- **Rate Limiting & Bot Detection** using **ArcJet** to prevent abuse.  
- Protects against **brute force attacks, spam, and unauthorized access**.  
- **IP-based rate limiting** for API requests to **prevent DDoS attacks**.  

### 🚀 Performance & Optimization  
- **SEO-Optimized** using **Next.js caching & SSR (Server-Side Rendering)**.  
- **Database Indexing** for lightning-fast searches.  
- **Efficient Pagination & Lazy Loading** for enhanced performance.  

### 📱 Responsive Design & UX  
- Fully **mobile-friendly UI**, optimized for all devices.  
- **Dark Mode & Light Mode** for a better user experience.  
- **Car Comparison Tool** to help buyers make informed decisions.  

---

## 🛠 Tech Stack  

### **Frontend:**  
- ⚡ **Next.js** – SSR (Server-Side Rendering), SSG (Static Site Generation)  
- 🎨 **Tailwind CSS** – Modern UI styling for a responsive design  
- 🛒 **React Query** – Optimized data fetching & state management  

### **Backend & Database:**  
- 🗄️ **Prisma ORM** – Efficient database interactions  
- 🏪 **Supabase (PostgreSQL)** – Scalable and real-time database  
- 🌐 **Node.js & Express.js** – API handling & backend logic  

### **AI & APIs:**  
- 🧠 **Gemini API** – AI-based image recognition for car search  
- 📍 **Google Maps API** – Location-based search for nearby dealers  
- 📊 **GraphQL & REST API** – Optimized data fetching  

### **Security & Performance Enhancements:**  
- 🔐 **Google Auth & Clerk** – Secure user authentication  
- 🔑 **JWT (JSON Web Token)** – API authentication & role-based access  
- 🛡️ **ArcJet Rate Limiting & Bot Detection** – Prevents spam, DDoS, and bot abuse  
- 🔥 **OAuth 2.0** – Secure third-party authentication  

---

## 🎯 Project Goals & Impact  
This AI-powered car marketplace aims to:  
✅ **Revolutionize car searching** with **AI-powered image recognition**.  
✅ **Improve user experience** using **advanced filtering & AI-powered search**.  
✅ **Enhance security & authentication** with **ArcJet & Clerk**.  
✅ **Optimize SEO & Performance** with **Next.js caching & SSR**.  
✅ **Increase engagement & sales** with a **real-time test drive booking system**.  

---

## 🚀 How to Run the Project  

### **Prerequisites:**  
- Node.js (v18 or later)  
- PostgreSQL Database  
- Supabase Account  
- Clerk API Key  
- Gemini API Key  
- ArcJet API Key for **Rate Limiting & Bot Protection**  

### **Installation Steps:**  
```bash
# Clone the repository
git clone https://github.com/yourusername/ai-car-marketplace.git
cd ai-car-marketplace

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run the development server
npm run dev
