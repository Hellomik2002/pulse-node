import { Module } from "@nestjs/common";
import Typesense from "typesense";

import { GetPharmacyResolver } from "./resolvers/get_phramacy.resolver";

export const typesnceClient = new Typesense.Client({
  nodes: [
    {
      host: "alabs.pulse.org.kg",
      port: 443,
      protocol: "https",
    },
  ],
  apiKey: "xyz",
  connectionTimeoutSeconds: 2,
});

@Module({
  providers: [GetPharmacyResolver],
})
export class PharmacyModule {}
