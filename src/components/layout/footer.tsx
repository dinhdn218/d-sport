import { hrefSocials } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t py-8 md:py-12 bg-[url(/images/footer.png)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Về Chúng Tôi</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Liên Hệ
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Tuyển Dụng
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Tin Tức
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Chính Sách</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/warranty-policy"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Bảo Hành & Đổi Trả
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Vận Chuyển
                </Link>
              </li>
              <li>
                <Link
                  href="/payment"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Thanh Toán
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Bảo Mật
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Dịch Vụ</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/stringing"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Đan Vợt
                </Link>
              </li>
              <li>
                <Link
                  href="/custom"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Đặt Hàng Riêng
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Thành Viên
                </Link>
              </li>
              <li>
                <Link
                  href="/gift-cards"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Thẻ Quà Tặng
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Liên Hệ</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                18 Định Công Thượng, Định Công, Hoàng Mai, Hà Nội
              </li>
              <li className="text-sm text-muted-foreground">
                Email: dinhdn218@gmail.com
              </li>
              <li className="text-sm text-muted-foreground">
                Hotline: 039 446 6363
              </li>
              <li className="text-sm text-muted-foreground">
                Giờ làm việc: 08:00 - 19:00
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} DSport. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href={hrefSocials.facebook}
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              target="_blank"
              href={hrefSocials.instagram}
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              target="_blank"
              href={hrefSocials.linkedin}
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
