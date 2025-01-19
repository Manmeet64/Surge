import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../Components/Mascot.jsx";
import { Link } from "react-router-dom";
function Landing() {
    return (_jsxs("div", { className: "w-[100%] h-[110vh] flex flex-col justify-center bg-image items-center bg-custom-gradient", children: [_jsxs("div", { className: "w-[100%] h-[50vh] flex flex-col justify-center items-center", children: [_jsx("h1", { className: "text-7xl font-bold font-poppins text-center text-[#8f41cf]", children: "Surge" }), _jsx(Link, { to: "/script-generator", className: "bg-purple-400 px-4 py-2 rounded-md text-xl mt-4 text-white hover:bg-purple-500 duration-300 transition-all ease-in-out absolute top-[190px]", children: "Check it out" })] }), _jsxs(Canvas, { className: "w-[100%] h-[50vh] flex justify-center items-center", children: [_jsx("ambientLight", { intensity: 0.5 }), _jsx("directionalLight", { position: [10, 10, 5], intensity: 1 }), _jsx(Model, {}), _jsx(OrbitControls, { enableZoom: false, maxPolarAngle: Math.PI / 2, minPolarAngle: Math.PI / 2 })] })] }));
}
export default Landing;
