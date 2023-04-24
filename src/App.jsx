import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Edit from "./pages/products/Edit";
import View from "./pages/products/View";
import Main from "./pages/Main";
import { useAppConfigQuery, useGetProductQuery } from "./api/innoloftApi";

function App() {
  const { data, isFetching, error } = useGetProductQuery();
  const { data: config } = useAppConfigQuery();
  console.log(config);

  console.log(data, isFetching);
  return (
    <>
      <Navbar config={config} user={data?.user} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/products/edit"
          element={<Edit data={data} isFetching={isFetching} />}
        />
        <Route
          path="/products/view/"
          element={<View data={data} isFetching={isFetching} />}
        />
      </Routes>
    </>
  );
}

export default App;
