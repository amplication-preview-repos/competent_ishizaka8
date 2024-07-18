import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { CategoryServiceTitle } from "../categoryService/CategoryServiceTitle";

export const ServiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="content" multiline source="content" />
        <TextInput label="title" source="title" />
        <TextInput label="slug" source="slug" />
        <ReferenceInput
          source="categoryService.id"
          reference="CategoryService"
          label="CategoryService"
        >
          <SelectInput optionText={CategoryServiceTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="categoryServices"
          reference="CategoryService"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CategoryServiceTitle} />
        </ReferenceArrayInput>
        <NumberInput label="price" source="price" />
        <NumberInput label="discountPrice" source="discountPrice" />
      </SimpleForm>
    </Create>
  );
};
