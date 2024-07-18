import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CATEGORYSERVICE_TITLE_FIELD } from "../categoryService/CategoryServiceTitle";

export const ServiceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"services"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
