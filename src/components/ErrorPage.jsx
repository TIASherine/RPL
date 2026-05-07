export default function ErrorPage({ code, desc }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-4xl rounded-3xl p-10 text-center shadow-lg">
          <img src="/img/error.webp" className="w-100" />

          <h1 className="text-7xl font-extrabold text-red-500">{code}</h1>
          <h2 className="text-2xl text-gray-500 mt-4"> {desc} </h2>
        </div>
      </div>
    </div>
  );
}
