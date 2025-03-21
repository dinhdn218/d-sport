import Link from "next/link";
import HeaderDropdownMenu from "../header-dropdown-menu";
import HeaderShoppingCart from "../header-shopping-cart";
import { routes } from "@/constants";

const Header = () => {
  return (
    <header className="fixed w-full top-0 bg-white shadow z-50 h-24 flex">
      <div className="container mx-4 sm:mx-auto flex items-center justify-between">
        <Link
          href={routes.home}
          className="font-bold text-4xl italic text-green-800"
        >
          DSport
        </Link>
        <div className="hidden lg:flex items-center justify-between gap-12">
          <Link href={routes.home}>Trang chủ</Link>
          <Link href={routes.products}>Sản phẩm</Link>
          <Link href={routes.about}>Về chúng tôi</Link>
        </div>
        <div className="flex items-center justify-between gap-4 text-2xl md:text-3xl">
          <HeaderDropdownMenu />
          <HeaderShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
