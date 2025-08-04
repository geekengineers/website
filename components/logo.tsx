import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/" className="flex items-center space-x-2 text-white">
        <span className="font-kabisat font-bold md:text-[17px] text-[14px]">
          Geek Engineers
        </span>
      </Link>
    </>
  );
}
