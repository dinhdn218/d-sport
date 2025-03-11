import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

const HeaderShoppingCart = () => {
  return (
    <div>
      <Link href={"/cart"}>
        <CiShoppingCart />
      </Link>
    </div>
  );
};

export default HeaderShoppingCart;
