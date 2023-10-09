import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CriarPessoa } from './pessoa.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Pessoa } from '@prisma/client';

@Injectable()
export class PessoaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(payload: CriarPessoa) {
    if (
      payload.apelido === null ||
      payload.nome === null ||
      payload.nascimento === null
    ) {
      throw new UnprocessableEntityException(
        'algum atributo nao pode ser nulo',
      );
    }
    const already = await this.prisma.pessoa.findUnique({
      where: {
        apelido: payload.apelido,
      },
    });
    if (already) {
      throw new UnprocessableEntityException('apelido ja existe');
    }
    return this.prisma.pessoa.create({
      data: payload as Pessoa,
      select: {
        id: true,
      },
    });
  }

  async get(id: string) {
    return this.prisma.pessoa.findUnique({
      where: {
        id,
      },
    });
  }

  async search(termo: string) {
    return this.prisma.pessoa.findMany({
      take: 50,
      where: {
        OR: [
          {
            apelido: {
              contains: termo,
            },
          },
          {
            nome: {
              contains: termo,
            },
          },
          {
            stack: {
              array_contains: termo,
            },
          },
        ],
      },
    });
  }

  async count() {
    return this.prisma.pessoa.count();
  }
}
