import { Separator, SimplePageLayout } from "@/components/layouts";
import dynamic from "next/dynamic";

const OrderExample = dynamic(() => import("@/components/project-components"));
export default function OrderLinePage() {
  return (
    <SimplePageLayout
      header="Ordrelinje"
      subheader="Ordrelinje komponent som er tatt i bruk i adminsidene til merkelappen.no."
    >
      <Separator>
        <OrderExample />
      </Separator>
    </SimplePageLayout>
  );
}
