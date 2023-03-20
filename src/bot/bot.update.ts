import { Ctx, Start, Update, On } from "nestjs-telegraf";
import { BotService } from "./bot.service";
import { Context } from "telegraf";

@Update()
export class BotUpdate {
    constructor(private readonly botService: BotService) { }

    @Start()
    async onStart(@Ctx() ctx: Context) {
        return this.botService.start(ctx);
    }

    @On('contact')
    async onContact(@Ctx() ctx: Context) {
        return this.botService.onContact(ctx);
    }
}