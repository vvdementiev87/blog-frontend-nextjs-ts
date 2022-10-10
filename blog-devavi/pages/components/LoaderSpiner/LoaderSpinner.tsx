import * as React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export interface ILoaderSpinnerProps {}

export function LoaderSpinner(props: ILoaderSpinnerProps) {
  const [loading, setLoading] = React.useState(true);
  const [color, setColor] = React.useState("#ffffff");
  return (
    <ClipLoader
      color={color}
      loading={loading}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
