export default function RootLayout({ children }: LayoutProps<"/">) {
  return <main className="bg-blue-500 pt-20">{children}</main>;
}
