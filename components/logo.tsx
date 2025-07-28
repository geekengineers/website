import Link from "next/link";

export default function Logo() {
    return (
        <>
            <Link
                href="/"
                className="flex items-center space-x-2 text-white"
            >
                <span className="font-kabisat font-bold text-[17px]">Geek Engineers</span>
            </Link>
        </>
    );
}