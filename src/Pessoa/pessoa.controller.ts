import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Query,
  Response,
} from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { CriarPessoa } from './pessoa.dto';
import { Response as ExpressResponse } from 'express';

@Controller('/pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() payload: CriarPessoa,
    @Response() response: ExpressResponse,
  ) {
    const { id } = await this.pessoaService.create(payload);
    response.header('Location', `/pessoas/${id}`);
    return { id };
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async get(@Param('id') id: string) {
    const pessoa = await this.pessoaService.get(id);
    if (!pessoa) {
      throw new NotFoundException('pessoa nao encontrada');
    }
    return pessoa;
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async search(@Query('t') termo: string) {
    if (!termo) {
      throw new BadRequestException('t eh obrigatorio');
    }
    return this.pessoaService.search(termo);
  }

  @Get('/contagem-pessoas')
  @HttpCode(HttpStatus.OK)
  async count() {
    return this.pessoaService.count();
  }
}
