import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CategoryServiceServiceBase } from "./base/categoryService.service.base";

@Injectable()
export class CategoryServiceService extends CategoryServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
