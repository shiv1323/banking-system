import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Aboutus, AppForm, AppNavbar, AppTable, ShowTransaction } from './Component/Index_'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppNavbar />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/Banking-System" element={<AppTable />} />
        <Route path="/sendmoney" element={<AppForm />} />
        <Route path="/transaction" element={<ShowTransaction />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
