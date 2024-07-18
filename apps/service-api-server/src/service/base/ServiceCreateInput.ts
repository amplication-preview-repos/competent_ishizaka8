/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";
import {
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
  IsNumber,
  Min,
  Max,
} from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { CategoryServiceWhereUniqueInput } from "../../categoryService/base/CategoryServiceWhereUniqueInput";
import { Type } from "class-transformer";
import { CategoryServiceCreateNestedManyWithoutServicesInput } from "./CategoryServiceCreateNestedManyWithoutServicesInput";

@InputType()
class ServiceCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  images?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  slug?: string | null;

  @ApiProperty({
    required: false,
    type: () => CategoryServiceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryServiceWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryServiceWhereUniqueInput, {
    nullable: true,
  })
  categoryService?: CategoryServiceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CategoryServiceCreateNestedManyWithoutServicesInput,
  })
  @ValidateNested()
  @Type(() => CategoryServiceCreateNestedManyWithoutServicesInput)
  @IsOptional()
  @Field(() => CategoryServiceCreateNestedManyWithoutServicesInput, {
    nullable: true,
  })
  categoryServices?: CategoryServiceCreateNestedManyWithoutServicesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  discountPrice?: number | null;
}

export { ServiceCreateInput as ServiceCreateInput };
