import { createRoot } from "react-dom/client"
import App from "./App"
import { Toaster } from "react-hot-toast"

createRoot(document.getElementById('root')).render(
    <>
    <App></App>
    <Toaster></Toaster>
    </>
)