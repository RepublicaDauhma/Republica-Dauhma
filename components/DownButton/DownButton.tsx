import react from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JSX } from "react/jsx-runtime";

export default function DownButton() {
    return (
        <div className="flex justify-center">
            <Link href="#sobre-nos">
                <button className="mx-auto mt-10 bg-indigo-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-purple-200 transition duration-300 flex items-center gap-2">
                    Ver Mais<ArrowRight className="w-5 h-5" />
                </button>
            </Link>
        </div>
    );
}
