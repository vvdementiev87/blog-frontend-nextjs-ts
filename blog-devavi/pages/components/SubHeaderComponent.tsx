import * as React from "react";
import { useUser } from "../../app/hooks/useUser";

export interface IHeaderComponentProps {}

export default function SubHeaderComponent(props: IHeaderComponentProps) {
  const [username, setUsername] = React.useState("");

  const { error, isLoading, data, refetch, status } = useUser(username);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    refetch();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder={"Enter username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>Click</button>
      </form>
      <p>{username}</p>
      <p>{status}</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error has occurred: {error?.message}</p>
      ) : data.success ? (
        <div>
          <h1>{data?.data?.username}</h1>
          <p>{data?.data?.name}</p>
        </div>
      ) : (
        <p>{data.reason}</p>
      )}
    </>
  );
}
