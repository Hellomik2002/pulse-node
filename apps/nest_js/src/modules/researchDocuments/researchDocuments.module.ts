import { Module } from "@nestjs/common";

import { MyResearchDocumentsResolver } from "./resolver/ger_doc.resolver";
import { ResearchDocumentsResolver } from "./resolver/researchDocuments.resolver";

@Module({ providers: [ResearchDocumentsResolver, MyResearchDocumentsResolver] })
export class ResearchDocumentsModule {}
