export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="font-bold italic text-2xl text-green-500 cursor-pointer select-none">Tiendita</h1>

      <button
        className="px-6 py-2 flex justify-center items-center bg-green-500
                      text-white rounded-lg hover:bg-green-600 transition duration-400
                      active:bg-green-700 focus:ring focus:ring-green-600"
      >
        <i className="fa-solid fa-cart-shopping"></i>
        <span className="pl-2">5</span>
      </button>
    </header>
  );
};
