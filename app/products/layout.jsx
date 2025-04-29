import Header from "@/components/header";

export default async function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
