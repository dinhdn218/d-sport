import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, MapPin, ShoppingBag, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-0 py-8 w-full">
      <div className="mb-8">
        <Link
          href="/"
          className="flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Trở về trang chủ
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative rounded-lg overflow-hidden mb-16">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Các cầu thủ cầu lông đang thi đấu"
          width={1200}
          height={500}
          className="object-cover w-full h-[300px] md:h-[400px]"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Về Cửa Hàng Cầu Lông Của Chúng Tôi
          </h1>
          <p className="text-white/90 max-w-2xl text-lg">
            Đam mê cầu lông từ năm 2005, cung cấp thiết bị chất lượng và tư vấn
            chuyên nghiệp cho người chơi ở mọi trình độ.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-3xl font-bold">Câu Chuyện Của Chúng Tôi</h2>
          <Separator className="flex-1 ml-4" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4">
              Được thành lập vào năm 2005 bởi cựu vận động viên cầu lông quốc
              gia Minh Nguyễn, cửa hàng của chúng tôi bắt đầu là một cửa hàng
              nhỏ với một ước mơ lớn: mang thiết bị cầu lông chất lượng đến với
              người chơi ở mọi trình độ.
            </p>
            <p className="mb-4">
              Điều bắt đầu như một dự án đam mê nhanh chóng phát triển thành
              điểm đến tin cậy cho những người yêu thích cầu lông. Qua nhiều
              năm, chúng tôi đã mở rộng kho hàng, mở thêm nhiều chi nhánh và xây
              dựng một cộng đồng những người chơi chia sẻ tình yêu của chúng tôi
              đối với môn thể thao này.
            </p>
            <p>
              Ngày nay, chúng tôi tự hào là một trong những cửa hàng chuyên về
              cầu lông hàng đầu trong cả nước, cung cấp bộ sưu tập được chọn lọc
              kỹ lưỡng các vợt, cầu, giày, quần áo và phụ kiện từ các thương
              hiệu hàng đầu trên thế giới.
            </p>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Cửa hàng của chúng tôi năm 2005"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm">
              Cửa hàng đầu tiên của chúng tôi, khai trương năm 2005
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-3xl font-bold">Sứ Mệnh & Giá Trị</h2>
          <Separator className="flex-1 ml-4" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <div className="bg-primary h-2" />
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">
                Sứ Mệnh Của Chúng Tôi
              </h3>
              <p>
                Truyền cảm hứng và hỗ trợ người chơi cầu lông ở mọi giai đoạn
                của hành trình của họ bằng cách cung cấp sản phẩm xuất sắc, lời
                khuyên chuyên nghiệp và một cộng đồng thân thiện tôn vinh môn
                thể thao mà chúng tôi yêu thích.
              </p>
            </CardContent>
          </Card>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <Award className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Chất Lượng</h4>
                <p className="text-sm text-muted-foreground">
                  Chúng tôi lựa chọn và kiểm tra cẩn thận mọi sản phẩm chúng tôi
                  bán để đảm bảo đáp ứng tiêu chuẩn cao của chúng tôi.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Users className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Cộng Đồng</h4>
                <p className="text-sm text-muted-foreground">
                  Chúng tôi tạo ra một môi trường thân thiện cho người chơi ở
                  mọi trình độ để kết nối, học hỏi và cùng nhau phát triển.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <ShoppingBag className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Chuyên Môn</h4>
                <p className="text-sm text-muted-foreground">
                  Đội ngũ của chúng tôi gồm những người đam mê cầu lông cung cấp
                  lời khuyên chuyên nghiệp để giúp bạn đưa ra quyết định sáng
                  suốt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-3xl font-bold">Đội Ngũ Của Chúng Tôi</h2>
          <Separator className="flex-1 ml-4" />
        </div>
        <p className="mb-8">
          Đội ngũ của chúng tôi bao gồm những người chơi cầu lông đam mê và các
          chuyên gia tận tâm cung cấp cho bạn những sản phẩm và dịch vụ tốt
          nhất.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Minh Nguyễn",
              role: "Người Sáng Lập & CEO",
              bio: "Cựu vận động viên quốc gia với hơn 15 năm kinh nghiệm huấn luyện",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Linh Trần",
              role: "Quản Lý Cửa Hàng",
              bio: "Người đam mê cầu lông và chuyên gia về thiết bị",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Tuấn Phạm",
              role: "Chuyên Gia Vợt",
              bio: "Thợ đan vợt được chứng nhận với hơn 10 năm kinh nghiệm",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Mai Lê",
              role: "Chăm Sóc Khách Hàng",
              bio: "Giúp khách hàng tìm thiết bị hoàn hảo từ năm 2018",
              image: "/placeholder.svg?height=400&width=400",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-4 mx-auto">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>
              <p className="text-xs text-muted-foreground mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Stores */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-3xl font-bold">Cửa Hàng Của Chúng Tôi</h2>
          <Separator className="flex-1 ml-4" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Cửa Hàng Chính",
              address: "123 Đường Cầu Lông, Quận 1",
              city: "TP. Hồ Chí Minh",
              phone: "(028) 1234-5678",
              hours: "Thứ 2-Thứ 7: 10:00 - 19:00, Chủ Nhật: 12:00 - 17:00",
              image: "/placeholder.svg?height=300&width=500",
            },
            {
              name: "Chi Nhánh Miền Bắc",
              address: "456 Đại lộ Cầu, Quận Cầu Giấy",
              city: "Hà Nội",
              phone: "(024) 8765-4321",
              hours: "Thứ 2-Thứ 7: 10:00 - 19:00, Chủ Nhật: Đóng cửa",
              image: "/placeholder.svg?height=300&width=500",
            },
          ].map((store, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-[200px]">
                <Image
                  src={store.image || "/placeholder.svg"}
                  alt={store.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{store.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                    <div>
                      <p>{store.address}</p>
                      <p>{store.city}</p>
                    </div>
                  </div>
                  <p>
                    <span className="font-medium">Điện thoại:</span>{" "}
                    {store.phone}
                  </p>
                  <p>
                    <span className="font-medium">Giờ mở cửa:</span>{" "}
                    {store.hours}
                  </p>
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  Xem Chỉ Đường
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-3xl font-bold">Khách Hàng Nói Gì Về Chúng Tôi</h2>
          <Separator className="flex-1 ml-4" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Chuyên môn của đội ngũ đã giúp tôi tìm được cây vợt hoàn hảo cho phong cách chơi của mình. Tôi đã là khách hàng trung thành trong 5 năm nay!",
              author: "Huy Trần",
              role: "Người Chơi Câu Lạc Bộ",
            },
            {
              quote:
                "Bộ sưu tập thiết bị cầu lông tốt nhất trong thành phố. Nhân viên có kiến thức chuyên môn và giá cả hợp lý.",
              author: "Lan Nguyễn",
              role: "Người Chơi Giải Trí",
            },
            {
              quote:
                "Dịch vụ đan vợt của họ là hàng đầu. Tôi tin tưởng giao tất cả vợt của mình cho họ trước các giải đấu.",
              author: "Bình Lê",
              role: "Người Chơi Thi Đấu",
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
      </div>

      {/* CTA */}
      <div className="bg-muted p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ghé Thăm Chúng Tôi Ngay Hôm Nay
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Trải nghiệm bộ sưu tập đa dạng các thiết bị cầu lông của chúng tôi và
          nhận lời khuyên chuyên nghiệp từ đội ngũ của chúng tôi. Dù bạn là
          người mới bắt đầu hay vận động viên chuyên nghiệp, chúng tôi luôn sẵn
          sàng giúp bạn nâng cao trình độ chơi của mình.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg">Mua Sắm Online</Button>
          <Button size="lg" variant="outline">
            Liên Hệ Với Chúng Tôi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
