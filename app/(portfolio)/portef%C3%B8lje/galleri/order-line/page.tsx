import OrderExample from "@/components/project-components";
import { Separator, SimplePageLayout } from "@/components/layouts";

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
