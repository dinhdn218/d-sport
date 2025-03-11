import React from "react";
import { RxDragHandleHorizontal } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const HeaderDropdownMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center">
          <RxDragHandleHorizontal className="cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <div className="block lg:hidden">
            <DropdownMenuItem className="font-semibold">
              TẤT CẢ SẢN PHẨM
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </div>
          <DropdownMenuLabel className="font-semibold">
            SUMMER COLLECTION
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Vợt Viktor</DropdownMenuItem>
          <DropdownMenuItem>Áo Yonex</DropdownMenuItem>
          <DropdownMenuItem>Cầu Thành Công 77</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="font-semibold">
            DỤNG CỤ BỔ TRỢ
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Bóng tập cổ tay</DropdownMenuItem>
          <DropdownMenuItem>Vợt tập điểm ngọn</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="font-semibold">
            CUSTOM PHIÊN BẢN GIỚI HẠN
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HeaderDropdownMenu;
