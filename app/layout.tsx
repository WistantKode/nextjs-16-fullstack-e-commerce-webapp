import "./globals.css";
import {Toaster} from "react-hot-toast";
import {ClerkProvider} from "@clerk/nextjs";

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (

        <html lang="en">
        <body className="font-poppins antialiased">
        <ClerkProvider>
            {children}
        </ClerkProvider>
        <Toaster
            position="bottom-right"
            toastOptions={{
                style: {
                    background: "#000000",
                    accentColor: "#000000",
                    color: "#fff",
                },
            }}
        />
        </body>
        </html>
    );
};
export default RootLayout;
