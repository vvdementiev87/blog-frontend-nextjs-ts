import * as React from "react";
import { useQuery } from "@tanstack/react-query";

export interface IHeaderComponentProps {}

export default function SubFooterComponent(props: IHeaderComponentProps) {
  const { data } = useQuery(["authData"]);

  return (
    <>
      {data?.success ? (
        <div>
          <p>Footer token: {data?.data?.token}</p>
          <p>Footer uuid: {data?.data?.uuid}</p>
          <p>Footer username: {data?.data?.username}</p>
        </div>
      ) : (
        <p>{data?.reason}</p>
      )}
    </>
  );
}
