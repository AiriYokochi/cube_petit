import { HashRouter, Routes, Route, Navigate } from "react-router-dom"

import JaHome from "./pages/ja/JaHome"
import JaConcept from "./pages/ja/JaConcept"
import JaHardware from "./pages/ja/JaHardware"
import JaSoftware from "./pages/ja/JaSoftware"
import JaBuild from "./pages/ja/JaBuild"
import JaBuy from "./pages/ja/JaBuy"
import JaContact from "./pages/ja/JaContact"

import EnHome from "./pages/en/EnHome"


export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* root */}
        <Route path="/" element={<Navigate to="/ja" replace />} />

        {/* Japanese */}
        <Route path="/ja" element={<JaHome />} />
        <Route path="/ja/concept" element={<JaConcept />} />
        <Route path="/ja/hardware" element={<JaHardware />} />
        <Route path="/ja/software" element={<JaSoftware />} />
        <Route path="/ja/build" element={<JaBuild />} />
        <Route path="/ja/buy" element={<JaBuy />} />
        <Route path="/ja/contact" element={<JaContact />} />

        {/* English */}
        <Route path="/en" element={<EnHome />} />


        {/* fallback */}
        <Route path="*" element={<Navigate to="/ja" replace />} />
      </Routes>
    </HashRouter>
  )
}