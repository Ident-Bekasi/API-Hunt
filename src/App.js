import FilterSection from "./components/FilterSection";
import ShowAPIs from "./components/ShowAPIs";
import TopSection from "./components/TopSection";
import useAxios from "./hooks/useAxios";
import { useEffect } from "react";

function App() {
  const { fetchData, response, loading } = useAxios("/entries");

  useEffect(() => {
    fetchData({ params: { category: "Animals" } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <TopSection fetchData={fetchData} />
      <div className="container mx-auto max-w-4xl">
        <FilterSection />
        <ShowAPIs response={response} loading={loading} />
      </div>
    </div>
  );
}

export default App;
