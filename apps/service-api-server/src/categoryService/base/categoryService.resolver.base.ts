/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CategoryService } from "./CategoryService";
import { CategoryServiceCountArgs } from "./CategoryServiceCountArgs";
import { CategoryServiceFindManyArgs } from "./CategoryServiceFindManyArgs";
import { CategoryServiceFindUniqueArgs } from "./CategoryServiceFindUniqueArgs";
import { CreateCategoryServiceArgs } from "./CreateCategoryServiceArgs";
import { UpdateCategoryServiceArgs } from "./UpdateCategoryServiceArgs";
import { DeleteCategoryServiceArgs } from "./DeleteCategoryServiceArgs";
import { ServiceFindManyArgs } from "../../service/base/ServiceFindManyArgs";
import { Service } from "../../service/base/Service";
import { ServiceWhereInput } from "../../service/base/ServiceWhereInput";
import { CategoryServiceService } from "../categoryService.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CategoryService)
export class CategoryServiceResolverBase {
  constructor(
    protected readonly service: CategoryServiceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CategoryService",
    action: "read",
    possession: "any",
  })
  async _categoryServicesMeta(
    @graphql.Args() args: CategoryServiceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CategoryService])
  @nestAccessControl.UseRoles({
    resource: "CategoryService",
    action: "read",
    possession: "any",
  })
  async categoryServices(
    @graphql.Args() args: CategoryServiceFindManyArgs
  ): Promise<CategoryService[]> {
    return this.service.categoryServices(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CategoryService, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CategoryService",
    action: "read",
    possession: "own",
  })
  async categoryService(
    @graphql.Args() args: CategoryServiceFindUniqueArgs
  ): Promise<CategoryService | null> {
    const result = await this.service.categoryService(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CategoryService)
  @nestAccessControl.UseRoles({
    resource: "CategoryService",
    action: "create",
    possession: "any",
  })
  async createCategoryService(
    @graphql.Args() args: CreateCategoryServiceArgs
  ): Promise<CategoryService> {
    return await this.service.createCategoryService({
      ...args,
      data: {
        ...args.data,

        service: args.data.service
          ? {
              connect: args.data.service,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CategoryService)
  @nestAccessControl.UseRoles({
    resource: "CategoryService",
    action: "update",
    possession: "any",
  })
  async updateCategoryService(
    @graphql.Args() args: UpdateCategoryServiceArgs
  ): Promise<CategoryService | null> {
    try {
      return await this.service.updateCategoryService({
        ...args,
        data: {
          ...args.data,

          service: args.data.service
            ? {
                connect: args.data.service,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CategoryService)
  @nestAccessControl.UseRoles({
    resource: "CategoryService",
    action: "delete",
    possession: "any",
  })
  async deleteCategoryService(
    @graphql.Args() args: DeleteCategoryServiceArgs
  ): Promise<CategoryService | null> {
    try {
      return await this.service.deleteCategoryService(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Service], { name: "services" })
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "read",
    possession: "any",
  })
  async findServices(
    @graphql.Parent() parent: CategoryService,
    @graphql.Args() args: ServiceFindManyArgs
  ): Promise<Service[]> {
    const results = await this.service.findServices(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Service, {
    nullable: true,
    name: "service",
  })
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "read",
    possession: "any",
  })
  async getService(
    @graphql.Parent() parent: CategoryService
  ): Promise<Service | null> {
    const result = await this.service.getService(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Query(() => [ServiceWhereInput])
  async GetCategoryServices(
    @graphql.Args()
    args: string
  ): Promise<ServiceWhereInput[]> {
    return this.service.GetCategoryServices(args);
  }
}
