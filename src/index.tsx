import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";
import { GlobalStyle } from "./theme/GlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
