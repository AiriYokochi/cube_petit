import { HashRouter, Routes, Route, Navigate } from "react-router-dom"

import JaHome from "./pages/ja/main/JaHome"
import JaConcept from "./pages/ja/main/JaConcept"
import JaHardware from "./pages/ja/main/JaHardware"
import JaSoftware from "./pages/ja/main/JaSoftware"
import JaBuild from "./pages/ja/main/JaBuild"
import JaBuy from "./pages/ja/main/JaBuy"
import JaContact from "./pages/ja/main/JaContact"

import EnHome from "./pages/en/EnHome"
import JaDev from "./pages/ja/dev/JaDev"

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
        <Route path="/ja/dev/main" element={<JaDev />} />

        {/* English */}
        <Route path="/en" element={<EnHome />} />


        {/* fallback */}
        <Route path="*" element={<Navigate to="/ja" replace />} />
      </Routes>
    </HashRouter>
  )
}