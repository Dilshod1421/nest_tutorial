import { MailerService } from '@nestjs-modules/mailer';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../users/models/user.model';

@Injectable()
export class MailService {
    constructor(private mailService: MailerService){
    }

    async sendUserConfirmation(user: User): Promise<void>{
        const url = `${process.env.API_HOST}/api/users/activate/${user.activation_link}`;
    

        await this.mailService.sendMail({
            to: user.email,
            subject: "Welcome to Stadium App! Confirm your Email",
            template: './confirmation',
            context: {
                name: user.first_name,
                url,
            }
        })

        console.log(url);
        
    }
}
