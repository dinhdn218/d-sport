import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {[
              {
                title: "Bộ Sưu Tập Vợt Mới 2025",
                description: "Công nghệ đột phá. Hiệu suất vượt trội.",
                image: "/placeholder.svg?height=600&width=1200",
                cta: "Khám Phá Ngay",
              },
              {
                title: "Giày Cầu Lông Chuyên Nghiệp",
                description: "Tăng tốc. Ổn định. Bảo vệ.",
                image: "/placeholder.svg?height=600&width=1200",
                cta: "Mua Sắm Ngay",
              },
              {
                title: "Khuyến Mãi Mùa Hè",
                description: "Giảm đến 30% cho tất cả phụ kiện cầu lông",
                image: "/placeholder.svg?height=600&width=1200",
                cta: "Xem Ưu Đãi",
              },
            ].map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover brightness-75"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-10 lg:p-16">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-xl">
                      {slide.title}
                    </h1>
                    <p className="text-white/90 text-sm md:text-base lg:text-lg mb-6 max-w-md">
                      {slide.description}
                    </p>
                    <Button size="lg">{slide.cta}</Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </div>
        </Carousel>
      </section>

      {/* Categories */}
      <section className="py-12 container px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Danh Mục Sản Phẩm</h2>
          <Link
            href="/products"
            className="text-sm font-medium text-primary flex items-center"
          >
            Xem tất cả <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              name: "Vợt Cầu Lông",
              image: "/placeholder.svg?height=300&width=300",
              count: "120+ sản phẩm",
              link: "/products?category=rackets",
            },
            {
              name: "Giày Cầu Lông",
              image: "/placeholder.svg?height=300&width=300",
              count: "80+ sản phẩm",
              link: "/products?category=shoes",
            },
            {
              name: "Quần Áo",
              image: "/placeholder.svg?height=300&width=300",
              count: "200+ sản phẩm",
              link: "/products?category=apparel",
            },
            {
              name: "Phụ Kiện",
              image: "/placeholder.svg?height=300&width=300",
              count: "150+ sản phẩm",
              link: "/products?category=accessories",
            },
          ].map((category, index) => (
            <Link href={category.link} key={index} className="group">
              <div className="relative rounded-lg overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm">{category.count}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-muted">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Sản Phẩm Nổi Bật</h2>
            <Link
              href="/products"
              className="text-sm font-medium text-primary flex items-center"
            >
              Xem tất cả <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                name: "Vợt Cầu Lông Yonex Astrox 100ZZ",
                price: "5.200.000₫",
                originalPrice: "5.800.000₫",
                image: "/placeholder.svg?height=400&width=400",
                rating: 5,
                reviews: 28,
                badge: "Bán Chạy",
              },
              {
                name: "Vợt Cầu Lông Victor Thruster K9000",
                price: "4.800.000₫",
                originalPrice: "5.200.000₫",
                image: "/placeholder.svg?height=400&width=400",
                rating: 4.5,
                reviews: 16,
              },
              {
                name: "Giày Cầu Lông Yonex Power Cushion 65Z3",
                price: "3.200.000₫",
                originalPrice: "3.500.000₫",
                image: "/placeholder.svg?height=400&width=400",
                rating: 4.5,
                reviews: 42,
                badge: "Mới",
              },
              {
                name: "Áo Cầu Lông Li-Ning AT DRY PRO",
                price: "850.000₫",
                originalPrice: "950.000₫",
                image: "/placeholder.svg?height=400&width=400",
                rating: 4,
                reviews: 12,
              },
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  {product.badge && (
                    <Badge className="absolute top-2 right-2">
                      {product.badge}
                    </Badge>
                  )}
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Thêm vào giỏ
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-sm line-clamp-2 mb-1 h-10">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating)
                                ? "fill-primary text-primary"
                                : "fill-muted text-muted"
                            }`}
                          />
                        ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-12 container px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Sản Phẩm Mới Về</h2>
          <Link
            href="/products?sort=newest"
            className="text-sm font-medium text-primary flex items-center"
          >
            Xem tất cả <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              name: "Vợt Cầu Lông Lining Aeronaut 9000i",
              price: "4.900.000₫",
              image: "/placeholder.svg?height=400&width=400",
              badge: "Mới",
            },
            {
              name: "Giày Cầu Lông Victor SH-P9200",
              price: "2.800.000₫",
              image: "/placeholder.svg?height=400&width=400",
              badge: "Mới",
            },
            {
              name: "Túi Vợt Cầu Lông Yonex SUNR-LRB01MS BT6",
              price: "1.500.000₫",
              image: "/placeholder.svg?height=400&width=400",
              badge: "Mới",
            },
            {
              name: "Quần Cầu Lông Kawasaki SP-R171",
              price: "650.000₫",
              image: "/placeholder.svg?height=400&width=400",
              badge: "Mới",
            },
          ].map((product, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                {product.badge && (
                  <Badge className="absolute top-2 right-2">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-sm line-clamp-2 mb-2 h-10">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">{product.price}</span>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <ShoppingCart className="h-4 w-4" />
                    <span className="sr-only">Thêm vào giỏ hàng</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="py-12 bg-muted">
        <div className="container px-4">
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Khuyến mãi"
              width={1200}
              height={400}
              className="object-cover w-full h-[200px] md:h-[300px]"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center p-6 md:p-10 lg:p-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-xl">
                Giảm Giá Đến 40% Cho Tất Cả Vợt Cầu Lông
              </h2>
              <p className="text-white/90 text-sm md:text-base mb-6 max-w-md">
                Chỉ áp dụng đến hết ngày 30/06/2025. Nhanh tay mua ngay kẻo lỡ!
              </p>
              <div>
                <Button size="lg">Mua Ngay</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 container px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Khách Hàng Nói Gì Về Chúng Tôi
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Tôi đã mua vợt cầu lông ở đây hơn 5 năm nay. Chất lượng sản phẩm và dịch vụ luôn tuyệt vời. Đội ngũ nhân viên rất am hiểu và nhiệt tình tư vấn.",
              author: "Nguyễn Văn A",
              role: "Vận động viên cầu lông nghiệp dư",
            },
            {
              quote:
                "Cửa hàng có đầy đủ các thương hiệu lớn với giá cả hợp lý. Dịch vụ đan vợt chuyên nghiệp và nhanh chóng. Tôi rất hài lòng với trải nghiệm mua sắm tại đây.",
              author: "Trần Thị B",
              role: "Huấn luyện viên CLB cầu lông",
            },
            {
              quote:
                "Là người mới chơi cầu lông, tôi được tư vấn rất tận tình để chọn được bộ dụng cụ phù hợp với trình độ và ngân sách. Sẽ tiếp tục ủng hộ cửa hàng!",
              author: "Lê Văn C",
              role: "Người mới chơi cầu lông",
            },
          ].map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <p className="italic mb-4">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 bg-muted">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Thương Hiệu Nổi Bật
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((brand) => (
              <div key={brand} className="flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=80&width=120&text=Brand${brand}`}
                  alt={`Thương hiệu ${brand}`}
                  width={120}
                  height={80}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 container px-4">
        <div className="bg-primary/10 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Đăng Ký Nhận Thông Tin Khuyến Mãi
          </h2>
          <p className="mb-6 max-w-2xl mx-auto text-muted-foreground">
            Đăng ký để nhận thông tin về sản phẩm mới, khuyến mãi đặc biệt và
            các sự kiện cầu lông sắp tới.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email của bạn"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button>Đăng Ký</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
