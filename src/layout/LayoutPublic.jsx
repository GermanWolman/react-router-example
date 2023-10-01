import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div className="container">
      {/* en este pedacito voy a poner el codigo de las rutas indicando con route en el app.jsx el LayoutPublic */}
      <Outlet></Outlet>
      <footer>Este es el footer</footer>
    </div>
  );
};

export default LayoutPublic;
