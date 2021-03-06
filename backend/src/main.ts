import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

const start = async () => {
  try {
    const PORT = process.env.PORT || 6000;
    const app = await NestFactory.create(AppModule);

    await app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
  } catch (e) {
    console.log(e);
  }
}

start();
