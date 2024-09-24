import Image from "next/image";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
<main className="flex min-h-screen w-full justify-between font-inter">
    {children}
    <div className="auth-asset">
         <div>
            <Image src="/icons/auth-financeimage.png" alt="Auth image" width={700} height={700}  className="border border-black-1 rounded-md"/>
         </div>
    </div>
</main>
    );
}
