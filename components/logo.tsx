import Link from "next/link";

export default function Logo() {
    return (
        <>
            <Link
                href="/"
                className="flex items-center space-x-2 text-white"
            >
                <span className="font-bold text-xl">Geek Engineers</span>
            </Link>
        </>
    );
}