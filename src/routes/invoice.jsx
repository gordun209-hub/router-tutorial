import { useParams } from "react-router-dom";
export const Invoice = () => {
  const params = useParams();
  console.log(params);
  return <h2> invoice: {params.invoiceId}</h2>;
};
