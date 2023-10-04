import { Module } from '@nestjs/common';
import {PessoaModule} from "../Pessoa/pessoa.module";
import {PrismaModule} from "../prisma/prisma.module";

@Module({
  imports: [
      PrismaModule,
      PessoaModule
  ],
})
export class AppModule {}
