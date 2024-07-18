import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CategoryServiceResolverBase } from "./base/categoryService.resolver.base";
import { CategoryService } from "./base/CategoryService";
import { CategoryServiceService } from "./categoryService.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CategoryService)
export class CategoryServiceResolver extends CategoryServiceResolverBase {
  constructor(
    protected readonly service: CategoryServiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
