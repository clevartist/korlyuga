export default function Home() {
  return (
    <div className="bg-[url('/home_bg.png')] bg-cover bg-center bg-no-repeat min-h-screen flex justify-end">
      <div className="w-1/2 flex items-center justify-center">
        <img className="w-2/3 object-contain" src="/welcome_text.png" />
      </div>
    </div>
  );
}
