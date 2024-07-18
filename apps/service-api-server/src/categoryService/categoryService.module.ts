import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CategoryServiceModuleBase } from "./base/categoryService.module.base";
import { CategoryServiceService } from "./categoryService.service";
import { CategoryServiceController } from "./categoryService.controller";
import { CategoryServiceResolver } from "./categoryService.resolver";

@Module({
  imports: [CategoryServiceModuleBase, forwardRef(() => AuthModule)],
  controllers: [CategoryServiceController],
  providers: [CategoryServiceService, CategoryServiceResolver],
  exports: [CategoryServiceService],
})
export class CategoryServiceModule {}
