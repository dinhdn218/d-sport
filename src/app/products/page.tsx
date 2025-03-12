import {
  Filter,
  Grid3X3,
  LayoutGrid,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  Star,
} from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";

const Products = () => {
  return (
    <div className="container mx-auto px-4 sm:px-0 py-8 w-full">
      {/* Hero Banner */}
      <div className="bg-muted py-6">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold mb-2">Sản Phẩm Cầu Lông</h1>
            <p className="text-muted-foreground max-w-2xl">
              Khám phá bộ sưu tập đa dạng các sản phẩm cầu lông chất lượng cao
              từ các thương hiệu hàng đầu thế giới.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="border-b sticky top-16 z-40 bg-background">
        <div className="container px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-sm hidden md:flex items-center">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Tìm kiếm sản phẩm..."
                className="flex h-10 w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden">
                    <Filter className="h-4 w-4 mr-2" />
                    Lọc
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Bộ Lọc</SheetTitle>
                    <SheetDescription>
                      Lọc sản phẩm theo danh mục, thương hiệu, giá và nhiều tiêu
                      chí khác.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    {/* Mobile Filters */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-4">Danh Mục</h3>
                        <div className="space-y-3">
                          {[
                            "Vợt Cầu Lông",
                            "Giày Cầu Lông",
                            "Quần Áo",
                            "Phụ Kiện",
                            "Cầu Lông",
                          ].map((category) => (
                            <div
                              key={category}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox id={`category-${category}`} />
                              <label
                                htmlFor={`category-${category}`}
                                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {category}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-4">Thương Hiệu</h3>
                        <div className="space-y-3">
                          {[
                            "Yonex",
                            "Victor",
                            "Li-Ning",
                            "Kawasaki",
                            "Mizuno",
                            "Adidas",
                          ].map((brand) => (
                            <div
                              key={brand}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox id={`brand-${brand}`} />
                              <label
                                htmlFor={`brand-${brand}`}
                                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {brand}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-4">Giá</h3>
                        <div className="space-y-4">
                          <Slider
                            defaultValue={[0, 10000000]}
                            min={0}
                            max={10000000}
                            step={100000}
                          />
                          <div className="flex items-center justify-between">
                            <span className="text-sm">0₫</span>
                            <span className="text-sm">10.000.000₫</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1">Áp Dụng</Button>
                        <Button variant="outline" className="flex-1">
                          Đặt Lại
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <div className="hidden md:flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Lọc
                </Button>

                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px] h-9">
                    <SelectValue placeholder="Sắp xếp theo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Nổi bật</SelectItem>
                    <SelectItem value="newest">Mới nhất</SelectItem>
                    <SelectItem value="price-asc">Giá: Thấp đến cao</SelectItem>
                    <SelectItem value="price-desc">
                      Giá: Cao đến thấp
                    </SelectItem>
                    <SelectItem value="name-asc">Tên: A-Z</SelectItem>
                    <SelectItem value="name-desc">Tên: Z-A</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-4">Danh Mục</h3>
                <div className="space-y-3">
                  {[
                    "Vợt Cầu Lông",
                    "Giày Cầu Lông",
                    "Quần Áo",
                    "Phụ Kiện",
                    "Cầu Lông",
                  ].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={`desktop-category-${category}`} />
                      <label
                        htmlFor={`desktop-category-${category}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Thương Hiệu</h3>
                <div className="space-y-3">
                  {[
                    "Yonex",
                    "Victor",
                    "Li-Ning",
                    "Kawasaki",
                    "Mizuno",
                    "Adidas",
                  ].map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox id={`desktop-brand-${brand}`} />
                      <label
                        htmlFor={`desktop-brand-${brand}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Giá</h3>
                <div className="space-y-4">
                  <Slider
                    defaultValue={[0, 10000000]}
                    min={0}
                    max={10000000}
                    step={100000}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">0₫</span>
                    <span className="text-sm">10.000.000₫</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1">Áp Dụng</Button>
                <Button variant="outline" className="flex-1">
                  Đặt Lại
                </Button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                {
                  name: "Vợt Cầu Lông Lining Aeronaut 9000i",
                  price: "4.900.000₫",
                  image: "/placeholder.svg?height=400&width=400",
                  rating: 4.8,
                  reviews: 9,
                  badge: "Mới",
                },
                {
                  name: "Giày Cầu Lông Victor SH-P9200",
                  price: "2.800.000₫",
                  image: "/placeholder.svg?height=400&width=400",
                  rating: 4.2,
                  reviews: 15,
                  badge: "Mới",
                },
                {
                  name: "Túi Vợt Cầu Lông Yonex SUNR-LRB01MS BT6",
                  price: "1.500.000₫",
                  image: "/placeholder.svg?height=400&width=400",
                  rating: 4.7,
                  reviews: 23,
                  badge: "Mới",
                },
                {
                  name: "Quần Cầu Lông Kawasaki SP-R171",
                  price: "650.000₫",
                  image: "/placeholder.svg?height=400&width=400",
                  rating: 4.1,
                  reviews: 18,
                  badge: "Mới",
                },
                {
                  name: "Vợt Cầu Lông Mizuno JPX S10",
                  price: "3.900.000₫",
                  originalPrice: "4.200.000₫",
                  image: "/placeholder.svg?height=400&width=400",
                  rating: 4.3,
                  reviews: 7,
                },
                {
                  name: "Cầu Lông Yonex AS-50 (Hộp 12 Quả)",
                  price: "750.000₫",
                  image: "/placeholder.svg?height=400&width=400",
                  rating: 4.9,
                  reviews: 56,
                },
                {
                  name: "Balo Cầu Lông Victor BR-9008",
                  price: "1.850.000₫",
                  originalPrice: "2.100.000₫",
                  image: "/placeholder.svg?height=400&width=400",
                  rating: 4.6,
                  reviews: 14,
                },
                {
                  name: "Cuốn Cán Vợt Yonex AC-102EX (3 Cuộn)",
                  price: "250.000₫",
                  image: "/placeholder.svg?height=400&width=400",
                  rating: 4.8,
                  reviews: 32,
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

            {/* Pagination */}
            <div className="mt-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
