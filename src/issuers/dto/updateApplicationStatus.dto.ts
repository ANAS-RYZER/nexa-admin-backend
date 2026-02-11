import { IsIn, IsString } from "class-validator";

export class UpdateApplicationStatusDto {
  @IsString()
  @IsIn(["pending", "approved", "rejected"])
  status: "pending" | "approved" | "rejected";
}
