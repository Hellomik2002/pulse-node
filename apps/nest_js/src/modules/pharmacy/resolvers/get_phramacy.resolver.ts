import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PharmacyCreateInput } from "src/@generated/pharmacy/pharmacy-create.input";
import { Pharmacy } from "src/@generated/pharmacy/pharmacy.model";
import { mainPrismaClient } from "src/prisma/main_client";

import { typesnceClient } from "../pharmacy.module";

// const Typesense = require('typesense')

@Resolver()
export class GetPharmacyResolver {
  @Mutation(() => Pharmacy)
  async addPharmacy(
    @Args("data", { type: () => PharmacyCreateInput }) data: PharmacyCreateInput
  ): Promise<Pharmacy> {
    const result = await mainPrismaClient.pharmacy.create({
      data: data,
    });

    typesnceClient.collections("pharmacy").documents().upsert(result);
    return result;
  }
  @Query(() => [Pharmacy])
  async getPharmacy(): Promise<Pharmacy[]> { 
    return mainPrismaClient.pharmacy.findMany();
  }
}
