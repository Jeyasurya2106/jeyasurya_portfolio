import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jeya Surya M - Full Stack & MERN Stack Developer Portfolio",
    short_name: "Jeya Surya",
    description:
      "Official portfolio of Jeya Surya M, a Full Stack Developer specializing in React.js, Next.js, Node.js, NestJS, TypeScript, PostgreSQL, and MySQL.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0c09",
    theme_color: "#d4ff3e",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

