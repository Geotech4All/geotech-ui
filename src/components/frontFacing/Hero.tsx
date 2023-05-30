import { Canvas } from "@react-three/fiber";
import { Earth } from "@components/frontFacing";

export default function Hero() {
    return (
        <div className="bg-black relative">
            <Canvas style={{ height: 350 }}>
                <Earth />
            </Canvas>
            <div className="text-white absolute top-[50%] left-5 md:left-10">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold">Geotech4all</h1>
                <div className="flex flex-col gap-3">
                    <p className="text-xl font-semibold">Everything geoscience</p>
                </div>
                <p className="text-xl mt-4">News, Articles, Podcasts, Conferences, Webinars and Interviews</p>
            </div>
        </div>
    );
}
