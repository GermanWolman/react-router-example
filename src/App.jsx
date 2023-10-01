import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import LayoutPublic from "./layout/LayoutPublic";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* rutas anidadas (layout) para que todo este dentro la ruta / */}
        <Route path="/" element={<LayoutPublic></LayoutPublic>}>
          <Route path="/" element={<Inicio></Inicio>} />
          <Route path="/blog" element={<Blog></Blog>} />
          <Route path="/blog/:id" element={<BlogDetails></BlogDetails>} />
          <Route path="/contacto" element={<Contacto></Contacto>} />
          {/* el path en el 404 va con asteristico para que responda en cualquier ruta que no esté configurada */}
          <Route path="*" element={<NotFound></NotFound>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
