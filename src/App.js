import FilterSection from "./components/FilterSection";
import ShowAPIs from "./components/ShowAPIs";
import TopSection from "./components/TopSection";
import useAxios from "./hooks/useAxios";
import { useEffect } from "react";

function App() {
  const { fetchData, response, loading } = useAxios("entries");

  useEffect(() => {
    fetchData({ params: { category: "Animals" } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <TopSection fetchData={fetchData} />
      <div>
        <FilterSection fetchData={fetchData} />
        <ShowAPIs response={response} loading={loading} />
      </div>
    </div>
  );
}

export default App;
