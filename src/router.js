import Login from "./pages/Login/components/Login";
import ProductTable from "./pages/ProductsTable/ProductTable";
import ProductPreview from "./pages/ProductPreview/ProductPreview";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import Error from "./pages/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privatRoute";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/ProductTable" element={<ProductTable />} />
        <Route path="/ProductPreview" element={<ProductPreview />} />
        <Route
          path="/ProductDetailPage/:productId"
          element={<ProductDetailPage />}
        />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
