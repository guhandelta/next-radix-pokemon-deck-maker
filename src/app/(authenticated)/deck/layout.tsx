import React from 'react'
import Header from "../../components/header";

export default function AuthenticatedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* This Header would be displayed on the pages that are inside of the (authenticated) route group */}
            <Header />
            {children}
        </>
    );
}