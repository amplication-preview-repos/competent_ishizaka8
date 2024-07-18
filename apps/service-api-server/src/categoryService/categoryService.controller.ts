import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CategoryServiceService } from "./categoryService.service";
import { CategoryServiceControllerBase } from "./base/categoryService.controller.base";

@swagger.ApiTags("categoryServices")
@common.Controller("categoryServices")
export class CategoryServiceController extends CategoryServiceControllerBase {
  constructor(
    protected readonly service: CategoryServiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
