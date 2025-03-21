import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Heart,
  Minus,
  Plus,
  Share2,
  ShoppingCart,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ProductDetail = ({ params }: { params: { slug: string } }) => {
  const product = {
    id: "1",
    slug: params.slug,
    name: "Vợt Cầu Lông Yonex Astrox 100ZZ",
    description:
      "Vợt cầu lông Yonex Astrox 100ZZ là sự lựa chọn hàng đầu cho các cầu thủ tấn công. Với công nghệ ROTATIONAL GENERATOR SYSTEM, vợt mang lại sức mạnh tuyệt vời và khả năng kiểm soát tốt. Thiết kế đầu vợt nặng giúp tăng cường lực đập cầu, trong khi khung vợt cứng cáp đảm bảo độ ổn định.",
    price: "5.200.000₫",
    originalPrice: "5.800.000₫",
    discount: "10%",
    rating: 4.8,
    reviews: 28,
    stock: 15,
    sku: "YON-AX100ZZ-4U",
    brand: "Yonex",
    categories: ["Vợt Cầu Lông", "Vợt Tấn Công"],
    images: [
      "/placeholder.svg?height=600&width=600&text=Yonex+Astrox+100ZZ",
      "/placeholder.svg?height=600&width=600&text=Yonex+Astrox+100ZZ+Side",
      "/placeholder.svg?height=600&width=600&text=Yonex+Astrox+100ZZ+Grip",
      "/placeholder.svg?height=600&width=600&text=Yonex+Astrox+100ZZ+Head",
    ],
    variants: [
      { id: "1", name: "4U (80-84g)", inStock: true },
      { id: "2", name: "3U (85-89g)", inStock: true },
      { id: "3", name: "2U (90-94g)", inStock: false },
    ],
    specifications: [
      { name: "Trọng lượng", value: "4U (80-84g)" },
      { name: "Độ cứng", value: "Cứng" },
      { name: "Điểm cân bằng", value: "Đầu nặng" },
      {
        name: "Vật liệu khung",
        value: "H.M. Graphite, VOLUME CUT RESIN, Tungsten",
      },
      { name: "Vật liệu trục", value: "H.M. Graphite, NANOMESH NEO" },
      { name: "Lực căng tối đa", value: "27-29 lbs" },
    ],
    features: [
      "Công nghệ ROTATIONAL GENERATOR SYSTEM",
      "Thiết kế đầu vợt nặng cho cú đập mạnh mẽ",
      "Khung vợt cứng cáp mang lại độ ổn định cao",
      "Công nghệ NANOMESH NEO giảm rung động",
      "Phù hợp cho lối chơi tấn công",
    ],
  };

  const relatedProducts = [
    {
      id: "2",
      name: "Vợt Cầu Lông Victor Thruster K9000",
      price: "4.800.000₫",
      originalPrice: "5.200.000₫",
      image: "/placeholder.svg?height=400&width=400&text=Victor+K9000",
      rating: 4.5,
      reviews: 16,
      slug: "victor-thruster-k9000",
    },
    {
      id: "3",
      name: "Vợt Cầu Lông Lining Aeronaut 9000i",
      price: "4.900.000₫",
      image: "/placeholder.svg?height=400&width=400&text=Lining+9000i",
      rating: 4.7,
      reviews: 12,
      slug: "lining-aeronaut-9000i",
      badge: "Mới",
    },
    {
      id: "4",
      name: "Vợt Cầu Lông Yonex Duora Z-Strike",
      price: "5.100.000₫",
      originalPrice: "5.500.000₫",
      image: "/placeholder.svg?height=400&width=400&text=Yonex+Duora",
      rating: 4.6,
      reviews: 19,
      slug: "yonex-duora-z-strike",
    },
    {
      id: "5",
      name: "Vợt Cầu Lông Mizuno JPX S10",
      price: "3.900.000₫",
      originalPrice: "4.200.000₫",
      image: "/placeholder.svg?height=400&width=400&text=Mizuno+JPX",
      rating: 4.3,
      reviews: 7,
      slug: "mizuno-jpx-s10",
    },
  ];
  return (
    <div className="">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">
          Trang chủ
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/products" className="hover:text-primary">
          Sản phẩm
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/products?category=rackets" className="hover:text-primary">
          Vợt cầu lông
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground">{product.name}</span>
      </div>

      {/* Product Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden border">
            <Image
              src={"/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            {product.discount && (
              <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                -{product.discount}
              </Badge>
            )}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`relative aspect-square rounded-md overflow-hidden border cursor-pointer ${
                  index === 0 ? "ring-2 ring-primary" : ""
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Hình ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.reviews} đánh giá)
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span className="text-sm text-muted-foreground">
              SKU: {product.sku}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl font-bold text-primary">
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {product.originalPrice}
              </span>
            )}
            {product.discount && (
              <Badge className="bg-red-500 hover:bg-red-600">
                -{product.discount}
              </Badge>
            )}
          </div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="space-y-6 mb-6">
            {/* Variants */}
            <div>
              <h3 className="font-medium mb-3">Trọng lượng:</h3>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <Button
                    key={variant.id}
                    variant={variant.id === "1" ? "default" : "outline"}
                    className={
                      !variant.inStock ? "opacity-50 cursor-not-allowed" : ""
                    }
                    disabled={!variant.inStock}
                  >
                    {variant.name}
                    {!variant.inStock && " (Hết hàng)"}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-medium mb-3">Số lượng:</h3>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-r-none"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="h-10 px-4 flex items-center justify-center border-y">
                  1
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-l-none"
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <span className="ml-4 text-sm text-muted-foreground">
                  Còn {product.stock} sản phẩm
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button size="lg" className="flex-1 md:flex-none">
              <ShoppingCart className="mr-2 h-5 w-5" /> Thêm vào giỏ hàng
            </Button>
            <Button size="lg" variant="outline" className="flex-1 md:flex-none">
              <Heart className="mr-2 h-5 w-5" /> Thêm vào yêu thích
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="w-10 h-10 p-0 md:flex-none"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-2">
              <div className="font-medium min-w-[120px]">Thương hiệu:</div>
              <div>{product.brand}</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="font-medium min-w-[120px]">Danh mục:</div>
              <div>{product.categories.join(", ")}</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="font-medium min-w-[120px]">Chia sẻ:</div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
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
                    className="h-4 w-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
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
                    className="h-4 w-4"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
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
                    className="h-4 w-4"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <Tabs defaultValue="description" className="mb-12">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
          <TabsTrigger
            value="description"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
          >
            Mô tả
          </TabsTrigger>
          <TabsTrigger
            value="specifications"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
          >
            Thông số kỹ thuật
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
          >
            Đánh giá ({product.reviews})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="pt-6">
          <div className="space-y-4">
            <p>
              Vợt cầu lông Yonex Astrox 100ZZ là sự lựa chọn hàng đầu cho các
              cầu thủ tấn công. Với công nghệ ROTATIONAL GENERATOR SYSTEM, vợt
              mang lại sức mạnh tuyệt vời và khả năng kiểm soát tốt. Thiết kế
              đầu vợt nặng giúp tăng cường lực đập cầu, trong khi khung vợt cứng
              cáp đảm bảo độ ổn định.
            </p>
            <h3 className="text-lg font-semibold mt-4">Tính năng nổi bật:</h3>
            <ul className="list-disc pl-5 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mt-4">Phù hợp với:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Người chơi có lối đánh tấn công</li>
              <li>Cầu thủ trung cấp đến cao cấp</li>
              <li>Người chơi ưa thích cú đập cầu mạnh mẽ</li>
              <li>Người chơi đơn và đánh cặp tấn công</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="specifications" className="pt-6">
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {product.specifications.map((spec, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-muted/50" : ""}
                  >
                    <td className="py-3 px-4 font-medium border-r">
                      {spec.name}
                    </td>
                    <td className="py-3 px-4">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="pt-6">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold">{product.rating}</div>
                <div className="flex justify-center mt-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {product.reviews} đánh giá
                </div>
              </div>
              <Separator orientation="vertical" className="h-16" />
              <div className="flex-1 space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-2">
                    <div className="text-sm min-w-[30px]">{star} sao</div>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{
                          width: `${
                            star === 5
                              ? "70"
                              : star === 4
                              ? "20"
                              : star === 3
                              ? "5"
                              : star === 2
                              ? "3"
                              : "2"
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="text-sm text-muted-foreground min-w-[40px]">
                      {star === 5
                        ? "70%"
                        : star === 4
                        ? "20%"
                        : star === 3
                        ? "5%"
                        : star === 2
                        ? "3%"
                        : "2%"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div className="space-y-6">
              {[
                {
                  name: "Nguyễn Văn A",
                  rating: 5,
                  date: "15/05/2023",
                  comment:
                    "Vợt rất tốt, cầm chắc tay và đập cầu rất mạnh. Tôi đã thử nhiều loại vợt khác nhau nhưng Astrox 100ZZ là loại tôi thích nhất. Đặc biệt phù hợp với lối chơi tấn công của tôi.",
                },
                {
                  name: "Trần Thị B",
                  rating: 4,
                  date: "02/04/2023",
                  comment:
                    "Vợt chất lượng cao, đập cầu mạnh và chính xác. Tuy nhiên hơi nặng một chút đối với tôi. Nhưng nhìn chung là rất hài lòng với sản phẩm.",
                },
                {
                  name: "Lê Văn C",
                  rating: 5,
                  date: "18/03/2023",
                  comment:
                    "Đây là vợt cầu lông tốt nhất mà tôi từng sử dụng. Cú đập cầu mạnh mẽ và chính xác. Rất đáng đồng tiền bát gạo!",
                },
              ].map((review, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium">{review.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < review.rating
                                    ? "fill-primary text-primary"
                                    : "fill-muted text-muted"
                                }`}
                              />
                            ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">{review.comment}</p>
                  {index < 2 && <Separator />}
                </div>
              ))}
            </div>

            <Button>Xem tất cả đánh giá</Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Sản Phẩm Liên Quan</h2>
          <Link
            href="/products"
            className="text-sm font-medium text-primary flex items-center"
          >
            Xem tất cả <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group">
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
                <Link href={`/products/${product.slug}`}>
                  <h3 className="font-medium text-sm line-clamp-2 mb-1 h-10 hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
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
    </div>
  );
};

export default ProductDetail;
