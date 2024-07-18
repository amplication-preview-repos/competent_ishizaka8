import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SERVICE_TITLE_FIELD } from "./ServiceTitle";
import { CATEGORYSERVICE_TITLE_FIELD } from "../categoryService/CategoryServiceTitle";

export const ServiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="images" source="images" />
        <TextField label="content" source="content" />
        <TextField label="title" source="title" />
        <TextField label="slug" source="slug" />
        <ReferenceField
          label="CategoryService"
          source="categoryservice.id"
          reference="CategoryService"
        >
          <TextField source={CATEGORYSERVICE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="price" source="price" />
        <TextField label="discountPrice" source="discountPrice" />
        <ReferenceManyField
          reference="CategoryService"
          target="serviceId"
          label="categoryServices"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="title" source="title" />
            <TextField label="slug" source="slug" />
            <TextField label="description" source="description" />
            <ReferenceField
              label="Service"
              source="service.id"
              reference="Service"
            >
              <TextField source={SERVICE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
