import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './modules/account/account.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [AccountModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
