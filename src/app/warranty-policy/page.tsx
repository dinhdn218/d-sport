import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  RefreshCw,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WarrantyPolicy = () => {
  return (
    <div className="">
      <div className="mb-8">
        <Link
          href="/"
          className="flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Trở về trang chủ
        </Link>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Chính Sách Bảo Hành & Đổi Trả
        </h1>
        <p className="text-muted-foreground">
          Cam kết của chúng tôi về chất lượng và sự hài lòng của khách hàng
        </p>
      </div>

      <Tabs defaultValue="warranty" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="warranty">Chính Sách Bảo Hành</TabsTrigger>
          <TabsTrigger value="returns">Đổi Trả & Hoàn Tiền</TabsTrigger>
        </TabsList>
        <TabsContent value="warranty" className="mt-6">
          <div className="grid gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Phạm Vi Bảo Hành</h2>
              <p className="mb-4">
                Tại Cửa Hàng Cầu Lông của chúng tôi, chúng tôi đảm bảo chất
                lượng sản phẩm. Chính sách bảo hành của chúng tôi được thiết kế
                để mang lại sự an tâm cho bạn khi mua sắm.
              </p>

              <div className="grid gap-6 md:grid-cols-2 mt-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Vợt Cầu Lông
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            Vợt cao cấp: Bảo hành 24 tháng đối với lỗi sản xuất
                          </li>
                          <li>
                            Vợt tiêu chuẩn: Bảo hành 12 tháng đối với lỗi sản
                            xuất
                          </li>
                          <li>
                            Nứt khung vợt được bảo hành trong điều kiện sử dụng
                            bình thường
                          </li>
                          <li>
                            Bảo hành mất hiệu lực nếu vợt có dấu hiệu va đập
                            mạnh
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Giày</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Bảo hành 6 tháng đối với lỗi sản xuất</li>
                          <li>Bao gồm lỗi đế tách rời và vấn đề đường may</li>
                          <li>Không bảo hành đối với hao mòn thông thường</li>
                          <li>
                            Bảo hành mất hiệu lực nếu giày được sử dụng ngoài
                            sân cầu lông trong nhà
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Quần Áo</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Bảo hành 30 ngày đối với lỗi sản xuất</li>
                          <li>Bao gồm lỗi đường may, khóa kéo và vải</li>
                          <li>
                            Không bảo hành đối với phai màu do giặt thông thường
                          </li>
                          <li>
                            Tuân thủ hướng dẫn chăm sóc để duy trì bảo hành
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Phụ Kiện</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            Túi vợt: Bảo hành 12 tháng đối với lỗi sản xuất
                          </li>
                          <li>Dây đan: Không bảo hành sau khi lắp đặt</li>
                          <li>Cuốn cán: Không bảo hành sau khi lắp đặt</li>
                          <li>
                            Phụ kiện khác: Bảo hành 30 ngày đối với lỗi sản xuất
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">
                Quy Trình Yêu Cầu Bảo Hành
              </h2>
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <p className="font-medium">Liên hệ với dịch vụ khách hàng</p>
                  <p className="text-sm text-muted-foreground">
                    Liên hệ với chúng tôi qua email hoặc điện thoại để báo cáo
                    vấn đề với sản phẩm của bạn.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Cung cấp chứng từ mua hàng</p>
                  <p className="text-sm text-muted-foreground">
                    Gửi hóa đơn hoặc mã đơn hàng để xác minh ngày mua và thời
                    hạn bảo hành.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Đánh giá sản phẩm</p>
                  <p className="text-sm text-muted-foreground">
                    Trả lại sản phẩm tại cửa hàng để kiểm tra hoặc gửi hình ảnh
                    theo yêu cầu của đội ngũ của chúng tôi.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Giải quyết</p>
                  <p className="text-sm text-muted-foreground">
                    Dựa trên đánh giá, chúng tôi sẽ sửa chữa, thay thế hoặc cấp
                    tín dụng cửa hàng cho sản phẩm bị lỗi.
                  </p>
                </li>
              </ol>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">
                Các Trường Hợp Không Được Bảo Hành
              </h2>
              <p className="mb-4">Bảo hành của chúng tôi không bao gồm:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Hư hỏng do tai nạn, sử dụng sai mục đích hoặc chăm sóc không
                  đúng cách
                </li>
                <li>Hao mòn thông thường do sử dụng thường xuyên</li>
                <li>Sản phẩm đã bị sửa đổi hoặc thay đổi</li>
                <li>Hư hỏng do bảo quản hoặc vận chuyển không đúng cách</li>
                <li>Sản phẩm mua từ đại lý không được ủy quyền</li>
                <li>Vấn đề về mỹ phẩm không ảnh hưởng đến hiệu suất</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="returns" className="mt-6">
          <div className="grid gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Chính Sách Đổi Trả
              </h2>
              <p className="mb-4">
                Chúng tôi muốn bạn hoàn toàn hài lòng với giao dịch mua hàng của
                mình. Nếu không, chúng tôi cung cấp chính sách đổi trả và hoàn
                tiền đơn giản.
              </p>

              <div className="grid gap-6 md:grid-cols-2 mt-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <RefreshCw className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Thời Gian Đổi Trả
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Sản phẩm chưa sử dụng: 30 ngày kể từ ngày mua</li>
                          <li>
                            Sản phẩm bị lỗi: Báo cáo trong vòng 7 ngày sau khi
                            nhận
                          </li>
                          <li>Sản phẩm giảm giá: 14 ngày kể từ ngày mua</li>
                          <li>
                            Vợt đã đan dây: Không được đổi trả trừ khi bị lỗi
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <BadgeCheck className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Điều Kiện Đổi Trả
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            Sản phẩm phải ở trong tình trạng ban đầu, chưa sử
                            dụng
                          </li>
                          <li>Tất cả nhãn và bao bì phải còn nguyên vẹn</li>
                          <li>Yêu cầu hóa đơn hoặc chứng từ mua hàng</li>
                          <li>
                            Đổi trả không có hóa đơn có thể chỉ được hoàn lại
                            bằng tín dụng cửa hàng
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Truck className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Vận Chuyển Đổi Trả
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            Chi phí vận chuyển đổi trả do khách hàng chịu trách
                            nhiệm
                          </li>
                          <li>
                            Sản phẩm bị lỗi: Chúng tôi chi trả chi phí vận
                            chuyển đổi trả
                          </li>
                          <li>
                            Gửi sai sản phẩm: Chúng tôi chi trả chi phí vận
                            chuyển đổi trả
                          </li>
                          <li>
                            Sử dụng phương thức vận chuyển có theo dõi cho tất
                            cả các đổi trả
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <RefreshCw className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Quy Trình Hoàn Tiền
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            Hoàn tiền được xử lý trong vòng 7 ngày làm việc sau
                            khi nhận đổi trả
                          </li>
                          <li>Hoàn tiền vào phương thức thanh toán ban đầu</li>
                          <li>Chi phí vận chuyển không được hoàn lại</li>
                          <li>
                            Tùy chọn tín dụng cửa hàng có sẵn cho đổi trả không
                            có hóa đơn
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">
                Quy Trình Đổi Hàng
              </h2>
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <p className="font-medium">Liên hệ với dịch vụ khách hàng</p>
                  <p className="text-sm text-muted-foreground">
                    Cho chúng tôi biết bạn muốn đổi một sản phẩm và chỉ rõ sản
                    phẩm thay thế.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Trả lại sản phẩm ban đầu</p>
                  <p className="text-sm text-muted-foreground">
                    Làm theo quy trình đổi trả của chúng tôi để gửi lại sản phẩm
                    mua ban đầu.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Chênh lệch giá</p>
                  <p className="text-sm text-muted-foreground">
                    Nếu sản phẩm thay thế có giá cao hơn, bạn sẽ cần thanh toán
                    phần chênh lệch. Nếu giá thấp hơn, chúng tôi sẽ hoàn lại
                    phần chênh lệch.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Vận chuyển cho đổi hàng</p>
                  <p className="text-sm text-muted-foreground">
                    Khách hàng chịu trách nhiệm cho việc vận chuyển trả lại.
                    Chúng tôi sẽ vận chuyển sản phẩm thay thế với chi phí của
                    chúng tôi.
                  </p>
                </li>
              </ol>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">
                Sản Phẩm Không Được Đổi Trả
              </h2>
              <p className="mb-4">
                Các sản phẩm sau không thể được đổi trả hoặc hoàn tiền:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Sản phẩm đã qua sử dụng hoặc đã mặc (trừ các sản phẩm bị lỗi)
                </li>
                <li>Sản phẩm không có bao bì hoặc nhãn gốc</li>
                <li>Dây vợt sau khi lắp đặt</li>
                <li>Cuốn cán sau khi lắp đặt</li>
                <li>Các vật dụng cá nhân như tất và đồ lót</li>
                <li>
                  Các sản phẩm giảm giá được đánh dấu là &quot;Bán Cuối
                  Cùng&quot;
                </li>
                <li>Thẻ quà tặng và tín dụng cửa hàng</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-6 rounded-lg mt-8">
        <h2 className="text-xl font-semibold mb-4">Cần Hỗ Trợ?</h2>
        <p className="mb-4">
          Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo hành hoặc đổi trả của
          chúng tôi, vui lòng liên hệ với đội ngũ dịch vụ khách hàng:
        </p>
        <div className="grid gap-2">
          <p>
            <span className="font-medium">Email:</span> hotro@cuahangcaulong.com
          </p>
          <p>
            <span className="font-medium">Điện thoại:</span> (028) 456-7890
          </p>
          <p>
            <span className="font-medium">Giờ làm việc:</span> Thứ 2-Thứ 7,
            10:00 - 19:00
          </p>
        </div>
        <div className="mt-6">
          <Button>Liên Hệ Dịch Vụ Khách Hàng</Button>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPolicy;
