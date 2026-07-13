import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Fija la raíz del proyecto: hay un package-lock.json suelto en el home del
  // usuario que Next confunde con la raíz del workspace.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
