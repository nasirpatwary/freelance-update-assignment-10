import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'swiper/css';
import './index.css'
import "animate.css";
import "aos/dist/aos.css";
import "@smastrom/react-rating/style.css";
import "react-datepicker/dist/react-datepicker.css";
import { RouterProvider } from 'react-router'
import router from './routes/router'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './providers/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <AuthProvider>
       <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
